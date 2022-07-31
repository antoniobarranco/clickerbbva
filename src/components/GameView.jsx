import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useBeforeunload } from 'react-beforeunload';
import {
  GameValues, BaseGameState, calcClickersIncrement, calcBoostersCost, formatNumericValue,
} from '../helpers/GameLogic';
import {
  CheckUserExists, CreateUser, LoadUser, SaveUser,
} from '../helpers/UserLogic';
import GameViewScore from './GameViewScore';
import GameViewControls from './GameViewControls';
import GameViewStats from './GameViewStats';
import BreadCrumbs from './ui/BreadCrumbs';

function GameView() {
  //
  // This is the game view of the app. Because all game logic resides on that view and this is
  // relatively simple, all states, and side effects are maintaned on this component, following
  // Flux pattern instead a less simple Redux or React Context approach which justifies on more
  // complex applications and reduces component independence by sharing external or non-facilitated
  // state through its props
  //

  //
  // States Set: there are a main game state based on player data and four simple states to
  // control the activation or booster buttons
  //

  let gameInitialState = BaseGameState;
  const [gameState, setGameState] = useState(gameInitialState);
  const [canBuyAutoClicker, setcanBuyAutoClicker] = useState(false);
  const [canBuyMegaClicker, setcanBuyMegaClicker] = useState(false);
  const [autoClickerCost, setautoClickerCost] = useState(0);
  const [megaClickerCost, setmegaClickerCost] = useState(0);

  //
  // Get de params of URL sanityzed bi queryString
  //

  const navigate = useNavigate();
  const location = useLocation();

  const { player } = queryString.parse(location.search);

  //
  // Get default inital player state and get or set depending of user match on Local Storage
  //

  useEffect(() => {
    if (!player) return navigate('/', { replace: true });

    if (CheckUserExists(player)) {
      gameInitialState = { ...LoadUser(player) };
    } else {
      gameInitialState = { ...CreateUser(player) };
    }

    setGameState(gameInitialState);
  }, [player]);

  //
  // Handles the exit button in order to save current state.
  // Also handles the hard quit using a hook that listen BeforeUnload event
  //

  const handleExit = () => {
    SaveUser(gameState, player);
    navigate('/', { replace: true });
  };

  useBeforeunload(handleExit);

  //
  // Handles button interaction. They work updating the proper state
  //

  const hitHandle = () => {
    const scoreIncrement = gameState.score + GameValues.normalIncrement;
    setGameState({ ...gameState, score: scoreIncrement });
  };

  const autoClickerHandle = () => {
    const autoClickersIncrement = gameState.autoclickers + 1;
    setGameState({ ...gameState, autoclickers: autoClickersIncrement });
  };

  const megaClickerHandle = () => {
    const megaClickersIncrement = gameState.megaclickers + 1;
    setGameState({ ...gameState, megaclickers: megaClickersIncrement });
  };

  //
  // To update UI states that are used to show or hide booster buttons
  //

  const updateBoosterAvailability = () => {
    const { score } = gameState;
    setcanBuyAutoClicker((score >= autoClickerCost));
    setcanBuyMegaClicker((score >= megaClickerCost));
    // (score >= autoClickerCost) ? setcanBuyAutoClicker(true) : setcanBuyAutoClicker(false);
    // (score >= megaClickerCost) ? setcanBuyMegaClicker(true) : setcanBuyMegaClicker(false);
  };

  //
  // Game loop: uses and useEffect to create a side effect that avoids counting errors because
  // async nature of React renders. Game loop updates get pre calculed values and updates in
  // one time operation, avoiding the use of more side effects or even more timers.
  //

  useEffect(() => {
    setTimeout(() => {
      const BoosterCost = calcBoostersCost(gameState.autoclickers, gameState.megaclickers);

      setautoClickerCost(BoosterCost.autoClickerCost);
      setmegaClickerCost(BoosterCost.megaClickerCost);
      updateBoosterAvailability(BoosterCost);

      const { autoclickers, megaclickers } = gameState;

      const clickersIncrement = calcClickersIncrement(autoclickers, megaclickers);

      setGameState((gameState) => ({ ...gameState, score: gameState.score + clickersIncrement }));
    }, GameValues.timeFrequency);
  });

  return (
    <>

      <BreadCrumbs Text={`Hi ${gameState.user}!`} handleExit={handleExit} />

      <GameViewScore score={formatNumericValue(gameState.score)} />

      <GameViewControls
        hitHandle={hitHandle}
        autoClickerHandle={autoClickerHandle}
        megaClickerHandle={megaClickerHandle}
        autoClickers={gameState.autoclickers}
        megaClickers={gameState.megaclickers}
        canBuyAutoClicker={canBuyAutoClicker}
        canBuyMegaClicker={canBuyMegaClicker}
      />

      <GameViewStats
        clickersIncrement={calcClickersIncrement(gameState.autoclickers, gameState.megaclickers)}
        autoClickerCost={autoClickerCost}
        megaClickerCost={megaClickerCost}
        timeInterval={GameValues.timeFrequency}
      />

    </>
  );
}

export default GameView;
