import { ADD_LIST } from '../actions/listsActions';

const initialState = [
  {
    title: 'First List',
    id: '95e8d4c8-a07a-11ea-bb37-0242ac130002',
  },
  {
    title: 'Second List',
    id: '9a5c5bf6-a07a-11ea-bb37-0242ac130002',
  },
];

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
