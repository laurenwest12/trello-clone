const initialState = [
  {
    title: 'First Card',
    id: 0,
    // cards: [
    //   {
    //     id: 0,
    //     text: 'First card example',
    //   },
    //   {
    //     id: 1,
    //     text: 'Second card example, but a little bit longer to test length',
    //   },
    // ],
  },
  {
    title: 'Second Card',
    id: 1,
    // cards: [
    //   {
    //     id: 0,
    //     text: 'First card example',
    //   },
    //   {
    //     id: 1,
    //     text: 'Second card example, but a little bit longer to test length',
    //   },
    //   {
    //     id: 3,
    //     text: 'Thirs card example, but a little bit longer to test length',
    //   },
    // ],
  },
];

const ADD_LIST = 'ADD_LIST';

export const addList = (list) => ({
  type: ADD_LIST,
  list,
});

// export const addList = (list) => {
//   console.log(list);
// };

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.list];
    default:
      return state;
  }
};
