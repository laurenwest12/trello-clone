import { ADD_CARD } from '../actions/cardsActions';

const initialState = [
  {
    id: '7b892e66-a07a-11ea-bb37-0242ac130002',
    text: 'This is an example of a card',
    listId: '95e8d4c8-a07a-11ea-bb37-0242ac130002',
  },
  {
    id: '8283893c-a07a-11ea-bb37-0242ac130002',
    text: 'This is an example of a card',
    listId: '95e8d4c8-a07a-11ea-bb37-0242ac130002',
  },
  {
    id: '8572a8ee-a07a-11ea-bb37-0242ac130002',
    text: 'This is an example of a card',
    listId: '95e8d4c8-a07a-11ea-bb37-0242ac130002',
  },
  {
    id: '8968bc72-a07a-11ea-bb37-0242ac130002',
    text: 'This is an example of a card',
    listId: '9a5c5bf6-a07a-11ea-bb37-0242ac130002',
  },
  {
    id: '8d0c9aa6-a07a-11ea-bb37-0242ac130002',
    text: 'This is an example of a card',
    listId: '9a5c5bf6-a07a-11ea-bb37-0242ac130002',
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
