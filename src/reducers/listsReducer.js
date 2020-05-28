import { ADD_LIST } from '../actions/listsActions';
import { DRAG_CARD } from '../actions/cardsActions';

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
    case DRAG_CARD:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
      } = action.payload;
      const newState = [...state];

      //in the same list
      if (droppableIdStart === droppableIdEnd) {
        console.log(state);
        console.log(droppableIdStart);
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
    default:
      return state;
  }
};
