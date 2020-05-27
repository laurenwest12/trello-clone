const initialState = [
  {
    title: 'First Card',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'First card example',
      },
      {
        id: 1,
        text: 'Second card example, but a little bit longer to test length',
      },
    ],
  },
  {
    title: 'Second Card',
    id: 1,
    cards: [
      {
        id: 0,
        text: 'First card example',
      },
      {
        id: 1,
        text: 'Second card example, but a little bit longer to test length',
      },
      {
        id: 3,
        text: 'Thirs card example, but a little bit longer to test length',
      },
    ],
  },
];

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
