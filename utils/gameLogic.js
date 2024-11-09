export const checkWinner = (board) =>{
    const winningCombinations = [
        [[0, 0], [0, 1], [0, 2]], // Row 1
        [[1, 0], [1, 1], [1, 2]], // Row 2
        [[2, 0], [2, 1], [2, 2]], // Row 3
        [[0, 0], [1, 0], [2, 0]], // Column 1
        [[0, 1], [1, 1], [2, 1]], // Column 2
        [[0, 2], [1, 2], [2, 2]], // Column 3
        [[0, 0], [1, 1], [2, 2]], // Diagonal
        [[0, 2], [1, 1], [2, 0]], // Diagonal
      ];

      for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a[0]][a[1]] &&
            board[a[0]][a[1]] === board[b[0]][b[1]] &&
            board[a[0]][a[1]] === board[c[0]][c[1]]) {
          return board[a[0]][a[1]];
        }
      }
      return null;
};