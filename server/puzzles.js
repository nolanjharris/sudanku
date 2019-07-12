const puzzles = [
    {
        id: 1,
        board: [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ]
    },
    {
        id: 2,
        board: [
            [3, 0, 6, 0, 0, 8, 4, 0, 2],
            [0, 2, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 7, 0, 0, 0, 0, 3, 1],
            [0, 0, 3, 0, 1, 0, 0, 8, 0],
            [9, 0, 0, 8, 0, 3, 0, 0, 5],
            [0, 5, 0, 0, 9, 0, 6, 0, 0],
            [1, 3, 0, 0, 0, 0, 2, 5, 0],
            [0, 9, 0, 0, 0, 0, 0, 7, 4],
            [0, 0, 5, 0, 0, 6, 3, 0, 0]
        ]
    },
    {
        id: 3,
        board: [
            [0, 5, 3, 2, 0, 7, 0, 0, 8],
            [6, 0, 1, 5, 0, 0, 0, 0, 2],
            [2, 0, 0, 9, 1, 3, 0, 5, 0],
            [7, 1, 4, 6, 9, 2, 0, 0, 0],
            [0, 2, 0, 0, 0, 0, 0, 6, 0],
            [0, 0, 0, 4, 5, 1, 2, 9, 7],
            [0, 6, 0, 3, 2, 5, 0, 0, 9],
            [1, 0, 0, 0, 0, 6, 3, 0, 4],
            [8, 0, 0, 1, 0, 9, 6, 7, 0]
        ]
    },
    {
        id: 4,
        board: [
            [0, 4, 0, 0, 0, 0, 9, 0, 3],
            [0, 3, 0, 2, 4, 9, 0, 0, 1],
            [9, 0, 0, 3, 0, 1, 2, 4, 0],
            [0, 0, 7, 0, 1, 0, 0, 0, 9],
            [0, 1, 9, 7, 0, 3, 6, 2, 0],
            [4, 0, 0, 0, 9, 0, 7, 1, 0],
            [0, 2, 4, 5, 0, 6, 0, 0, 7],
            [6, 0, 0, 1, 0, 7, 0, 8, 0],
            [7, 0, 1, 9, 0, 0, 0, 5, 0]
        ]
    },
    {
        id: 5,
        board: [
            [0, 6, 0, 3, 0, 0, 8, 0, 4],
            [5, 3, 7, 0, 9, 0, 0, 0, 0],
            [0, 4, 0, 0, 0, 6, 3, 0, 7],
            [0, 9, 0, 0, 5, 1, 2, 3, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [7, 1, 3, 6, 2, 0, 0, 4, 0],
            [3, 0, 6, 4, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 6, 0, 5, 2, 3],
            [1, 0, 2, 0, 0, 9, 0, 8, 0]
        ]
    },
    {
        id: 6,
        board: [
            [0, 0, 9, 7, 3, 0, 5, 2, 6],
            [0, 0, 5, 0, 2, 0, 8, 0, 0],
            [6, 0, 8, 0, 0, 0, 0, 4, 7],
            [0, 0, 0, 0, 0, 9, 0, 6, 2],
            [0, 4, 0, 6, 0, 3, 0, 8, 0],
            [8, 9, 0, 5, 0, 0, 0, 0, 0],
            [2, 6, 0, 0, 0, 0, 1, 0, 8],
            [0, 0, 7, 0, 1, 0, 6, 0, 0],
            [9, 5, 1, 0, 6, 4, 2, 0, 0]
        ]
    },
    {
        id: 7,
        board: [
            [0, 2, 3, 0, 9, 0, 8, 1, 5],
            [6, 0, 1, 5, 3, 8, 4, 7, 2],
            [5, 0, 0, 4, 0, 0, 0, 0, 0],
            [3, 0, 0, 0, 0, 0, 2, 0, 4],
            [0, 0, 6, 0, 4, 0, 3, 0, 0],
            [7, 0, 8, 0, 0, 2, 0, 0, 1],
            [0, 0, 0, 0, 0, 3, 7, 0, 8],
            [0, 0, 0, 7, 8, 0, 9, 0, 6],
            [0, 0, 2, 9, 5, 0, 1, 4, 0]
        ]
    },
    {
        id: 8,
        board: [
            [4, 0, 0, 6, 0, 7, 0, 1, 0],
            [0, 0, 0, 0, 0, 8, 4, 0, 2],
            [0, 8, 0, 0, 2, 1, 0, 3, 9],
            [0, 1, 9, 0, 7, 0, 0, 6, 4],
            [2, 5, 0, 1, 0, 0, 0, 8, 7],
            [0, 4, 0, 3, 0, 2, 0, 9, 0],
            [0, 6, 0, 2, 1, 0, 0, 5, 0],
            [1, 0, 5, 0, 0, 4, 0, 2, 0],
            [8, 0, 0, 9, 0, 6, 0, 0, 3]
        ]
    },
    {
        id: 9,
        board: [
            [0, 0, 0, 0, 8, 0, 5, 0, 3],
            [0, 5, 0, 0, 0, 1, 7, 0, 4],
            [3, 0, 0, 7, 5, 2, 1, 8, 6],
            [0, 0, 5, 0, 0, 4, 0, 0, 0],
            [0, 2, 1, 5, 0, 0, 3, 4, 0],
            [0, 0, 0, 3, 0, 0, 2, 0, 0],
            [0, 8, 9, 1, 0, 5, 0, 0, 2],
            [2, 0, 7, 6, 0, 0, 0, 5, 0],
            [5, 0, 0, 0, 4, 0, 0, 6, 7]
        ]
    }
]

module.exports = puzzles;