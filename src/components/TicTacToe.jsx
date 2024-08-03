import React, { useState } from 'react';

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        if (board[index] || calculateWinner(board)) return;
        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const winner = calculateWinner(board);

    const renderSquare = (index) => (
        <button 
            style={styles.square} 
            onClick={() => handleClick(index)}
        >
            {board[index]}
        </button>
    );

    return (
        <div style={styles.game}>
            <div style={styles.status}>
                {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}
            </div>
            <div style={styles.board}>
                {board.map((_, index) => renderSquare(index))}
            </div>
        </div>
    );
}

function calculateWinner(board) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let line of lines) {
        const [a, b, c] = line;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return null;
}

const styles = {
    game: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        marginTop: '50px'
    },
    status: {
        marginBottom: '20px',
        fontSize: '24px',
        fontWeight: 'bold'
    },
    board: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 100px)',
        gridTemplateRows: 'repeat(3, 100px)',
        gap: '10px'
    },
    square: {
        width: '100px',
        height: '100px',
        fontSize: '36px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        border: '2px solid #333',
        backgroundColor: '#fff',
        transition: 'background-color 0.3s ease'
    },
    squareHover: {
        backgroundColor: '#ddd'
    },
    squareDisabled: {
        cursor: 'not-allowed',
        backgroundColor: '#f9f9f9'
    }
};

export default TicTacToe;
