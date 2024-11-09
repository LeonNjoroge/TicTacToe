import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


// Component represents each cell on the board
const Square = ({value, onPress}) =>{
    return(
        <TouchableOpacity style={styles.square} onPress={onPress}>
            <Text style={styles.squareText}>{value}</Text>
        </TouchableOpacity>
    );
 
};

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333',
      },
      squareText: {
        fontSize: 36,
        fontWeight: 'bold',
      },
});


export default Square;