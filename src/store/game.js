import { createSlice } from '@reduxjs/toolkit';

const currentGame = {
  stage: 'initial',
  playerChoice: null,
  pcChoice: null,
  playerWinner: null,
};

const initialState = {
  score: 0,
  currentGame,
  possibleChoices: ['paper', 'scissors', 'rock'],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos = [action.payload.todo, ...state.todos];
    },
    setPlayerChoice(state, action) {
      state.currentGame.playerChoice = action.payload.choice;
    },
    setStage(state, action) {
      state.currentGame.stage = action.payload.stage;
    },
    setPcChoice(state) {
      const playerChoice = state.currentGame.playerChoice;
      const possibleChoices = [...state.possibleChoices];

      if (state.currentGame.playerChoice === null) {
        return false;
      }

      possibleChoices.splice(possibleChoices.indexOf(playerChoice), 1);

      const pcChoice =
        possibleChoices[Math.floor(Math.random() * possibleChoices.length)];

      state.currentGame.pcChoice = pcChoice;
    },
    setWinner(state) {
      const pcChoice = state.currentGame.pcChoice;
      const playerChoice = state.currentGame.playerChoice;
      let playerWinner = true;

      if (pcChoice === null || playerChoice === null) {
        return false;
      }

      if (playerChoice === 'paper') {
        if (pcChoice === 'scissors') {
          playerWinner = false;
        }
      }

      if (playerChoice === 'rock') {
        if (pcChoice === 'paper') {
          playerWinner = false;
        }
      }

      if (playerChoice === 'scissors') {
        if (pcChoice === 'rock') {
          playerWinner = false;
        }
      }

      if (playerWinner) {
        state.score += 1;
      } else {
        state.score -= 1;
      }

      state.currentGame.playerWinner = playerWinner;
    },
    resetCurrentGame(state) {
      state.currentGame = currentGame;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice;
