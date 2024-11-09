import React from "react";
import { View, StyleSheet } from "react-native";
import Square from "./Square";

const Board = ({ board, onSquarePress }) => {
  return ( 
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}> 
          {row.map((cell, colIndex) => (
            <Square
              key={colIndex}
              row={rowIndex}
              col={colIndex}
              value={cell}
              onPress={() => onSquarePress(rowIndex, colIndex)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    borderWidth: 3,
    borderColor: "#333",
    margin: 10,
  },
  row: {
    flexDirection: "row",
  },
});

export default Board;