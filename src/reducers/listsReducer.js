import { ADD_LIST } from '../actions/listsActions';

const initialState = [
  {
    title: 'First List',
    id: 0,
  },
  {
    title: 'Second List',
    id: 1,
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
