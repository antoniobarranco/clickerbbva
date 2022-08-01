import { BaseGameState } from './GameLogic';

//
// Check the existance of a previous user on Local Storage.
//

export const CheckUserExists = (player) => localStorage.getItem(player);

//
// Create a new user from name, inheriting the rest of the properties of those established as a base
// and setting its name.
//

export const CreateUser = (player) => {
  const gameInitialState = { ...BaseGameState, user: player };
  localStorage.setItem(player, JSON.stringify(gameInitialState));
  return { ...gameInitialState };
};

//
// Load an existing user from Loca Storage to continue the game.
//

export const LoadUser = (player) => {
  const userData = JSON.parse(localStorage.getItem(player));
  return { ...userData, user: player };
};

//
// Save user to local storage from their player name and gamestate.
//

export const SaveUser = (gameState, player) => {
  localStorage.setItem(player, JSON.stringify(gameState));
};

//
// Retrieve an array with all users on Local Storage
//

export const GetAllUsers = () => {
  const localStorageValues =  Object.values(localStorage);
  return localStorageValues.map(item => JSON.parse(item));
};
