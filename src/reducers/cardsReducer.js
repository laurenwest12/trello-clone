import { ADD_CARD } from '../actions/cardsActions';

const initialState = [
  {
    id: 0,
    text: 'This is an example of a card',
    listId: 0,
  },
  {
    id: 1,
    text: 'This is an example of a card',
    listId: 0,
  },
  {
    id: 2,
    text: 'This is an example of a card',
    listId: 0,
  },
  {
    id: 3,
    text: 'This is an example of a card',
    listId: 1,
  },
  {
    id: 4,
    text: 'This is an example of a card',
    listId: 1,
  },
];

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.card];
    default:
      return state;
  }
};
