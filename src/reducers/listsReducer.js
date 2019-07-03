const initialState = [
    {
        title: "First board",
        id: 0,
        cards: [
            {
                id: 0,
                text: "first card on first board"
            },
            {
                id: 1,
                text: "second card on first board"
            }
        ]
    },
    {
        title: "Second board",
        id: 1,
        cards: [
            {
                id: 0,
                text: "first card on second board"
            },
            {
                id: 1,
                text: "second card on second board"
            },
            {
                id: 2,
                text: "third card on second board"
            }
        ]
    }
];

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default listsReducer;