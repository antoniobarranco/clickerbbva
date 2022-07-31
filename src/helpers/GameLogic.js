//
// Main constants that defines the game
//

export const GameValues = {
  normalIncrement: 1,
  autoClickerIncrement: 1,
  megaClickerIncrement: 10,

  autoClickerBaseCost: 100,
  megaClickerBaseCost: 1000,

  timeFrequency: 100,
};

//
// Base profile game for a new player
//

export const BaseGameState = {
  user: 'unnamed',
  score: 0,
  autoclickers: 0,
  megaclickers: 0,
};

//
// In order to prevent aditional re-renders or extra timers and side effects
// we calc total increments of one cycle according current busters
// by that way we dont overload the browser and do not force extra unneeded renders
//

export const calcClickersIncrement = (autoclickers, megaclickers) => {
  let Increment = 0;
  const { autoClickerIncrement, megaClickerIncrement } = GameValues;

  if (autoclickers > 0 || megaclickers > 0) {
    Increment = autoclickers * autoClickerIncrement + megaclickers * megaClickerIncrement;
  }

  return Increment;
};

//
// Uptates the price of a boost based on actual game state (score)
//

export const calcBoostersCost = (autoclickers, megaclickers) => {
  const BoostersCost = {
    autoClickerCost: GameValues.autoClickerBaseCost + GameValues.autoClickerBaseCost * autoclickers,
    megaClickerCost: GameValues.megaClickerBaseCost + GameValues.megaClickerBaseCost * megaclickers,
  };

  return BoostersCost;
};

//
// Convert larger numbers to units with IS unit and add Hits postfix.
// When number is lower than K, decimals are not shown
//

export function formatNumericValue(value, decimals = 2) {
  if (value === 0) return '0 Hits';

  const k = 1000;
  const sizes = [' Hits', 'K Hits', 'M Hits', 'G Hits', 'T Hits', 'P Hits', 'E Hits', 'Z Hits', 'Y Hits'];
  const showdecimals = (value < k) ? 0 : decimals;

  const i = Math.floor(Math.log(value) / Math.log(k));

  return (value / k ** i).toFixed(showdecimals) + sizes[i];
}
