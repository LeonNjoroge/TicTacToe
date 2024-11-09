import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Board from './components/Board';
import {checkWinner} from './utils/gameLogic';

export default function App() {

  //const [board, setBoard] = useState(Array(3).fill(Array(3).fill(null)));
  const [board, setBoard] =  useState(Array(3).fill(Array(3).fill(null)));

  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handlePress = (row, col) => {
    if(board[row][col] || winner) return;

    const newBoard = board.map((boardRow, rowIndex) => 
      boardRow.map((cell, colIndex) => (rowIndex === row && colIndex === col ? currentPlayer : cell))
    );
    
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner){
      setWinner(newWinner);
    }else{
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(3).fill(Array(3).fill(null)));
    setCurrentPlayer('X');
    setWinner(null);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>

        {!winner? <Text>Current player is: {currentPlayer}</Text> : <Text>Game Over!</Text>}

        <Board board={board} onSquarePress={handlePress} />

        
        {winner && <Text style={styles.winnerText}>Winner: {winner}!</Text>}
          <TouchableOpacity onPress={resetGame} style={styles.resetButton}>
            <Text style={styles.resetText}>Reset Game</Text>
          </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  title:{
    fontSize: 25,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  winnerText: {
    fontSize: 24,
    color: 'green',
    marginTop: 20,
  },
  resetButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4682b4',
    borderRadius: 5,
  },
  resetText: {
    fontSize: 18,
    color: 'white',
  },
});