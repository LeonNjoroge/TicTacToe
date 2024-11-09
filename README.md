# Tic Tac Toe - React Native App

A simple Tic Tac Toe game built with React Native, featuring an interactive board, player turn tracking, and winner detection. This app demonstrates React Native basics such as state management, component design, and game logic.

## Features

- **Interactive Game Board**: Allows players to place their moves.
- **Player Turn Management**: Alternates turns between two players ("X" and "O").
- **Winner Detection**: Identifies and displays the winner.
- **Game Reset**: Option to reset the game and start a new round.

## Project Structure

The project consists of the following main components:

1. **`App.js`** - Main game logic and state management.
2. **`Board.js`** - Game board component displaying the grid.
3. **`Square.js`** - Individual square component for each cell.
4. **`gameLogic.js`** - Contains the function to check for winning combinations.

## File Overview

### `App.js`

The main entry point of the app, which includes:

- **State Management**: Tracks the board, current player, and the winner.
- **`handlePress` Function**: Updates the board with the current player's move and checks for a winner.
- **`resetGame` Function**: Resets the game to its initial state.

### `Board.js`

The `Board` component renders the 3x3 grid. It accepts `board` and `onSquarePress` as props:

- **`board` Prop**: Represents the current game state as a 3x3 array.
- **`onSquarePress` Prop**: Function to handle pressing a square.

### `Square.js`

Each square on the board. Includes:

- **TouchableOpacity**: Allows pressing the square.
- **Text**: Displays the current player's symbol in the square.

### `gameLogic.js`

Contains the function `checkWinner`, which checks for any winning combinations on the board. This function:

- **Defines Winning Combinations**: Includes all possible row, column, and diagonal combinations.
- **Evaluates the Board**: Loops through each combination to check for a match.
- **Returns the Winner**: Returns the player symbol (`'X'` or `'O'`) if a winning combination is found.

## How to Run

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>

2. **Install Dependancies**:
    ``bash
    npm install

3. **Run the App**:
    ``bash
    npm start
