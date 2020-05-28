export const ADD_CARD = 'ADD_CARD';
export const DRAG_CARD = 'DRAG_CARD';

export const addCard = (card) => ({
  type: ADD_CARD,
  card,
});

export const sortCard = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexEnd,
  droppableIndexStart,
  draggableId
) => ({
  type: DRAG_CARD,
  payload: {
    droppableIdStart,
    droppableIdEnd,
    droppableIndexEnd,
    droppableIndexStart,
    draggableId,
  },
});
