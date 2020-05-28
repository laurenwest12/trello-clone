import { ADD_LIST, ADD_CARD, DRAG_CARD } from '../actions/listsActions';

const initialState = [
  {
    title: 'First List',
    id: '95e8d4c8-a07a-11ea-bb37-0242ac130002',
    cards: [
      {
        id: '7b892e66-a07a-11ea-bb37-0242ac130002',
        text: 'This is an example of a card',
      },
      {
        id: '8283893c-a07a-11ea-bb37-0242ac130002',
        text: 'This is an example of a card',
      },
      {
        id: '8572a8ee-a07a-11ea-bb37-0242ac130002',
        text: 'This is an example of a card',
      },
    ],
  },
  {
    title: 'Second List',
    id: '9a5c5bf6-a07a-11ea-bb37-0242ac130002',
    cards: [
      {
        id: '8968bc72-a07a-11ea-bb37-0242ac130002',
        text: 'This is an example of a card',
        listId: '9a5c5bf6-a07a-11ea-bb37-0242ac130002',
      },
      {
        id: '8d0c9aa6-a07a-11ea-bb37-0242ac130002',
        text: 'This is an example of a card',
      },
    ],
  },
];

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.list];

    case ADD_CARD:
      const newState = [...state];
      const updatedCards = [
        ...newState.find((list) => list.id === action.card.listId).cards,
        action.card,
      ];

      const updatedList = (newState.find(
        (list) => list.id === action.card.listId
      ).cards = updatedCards);
      return newState;

    case DRAG_CARD:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
      } = action.payload;
      const draggedState = [...state];

      //Will be able to drop within the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = draggedState.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      if (droppableIdStart !== droppableIdEnd) {
        const listStart = draggedState.find(
          (list) => droppableIdStart === list.id
        );

        const card = listStart.cards.splice(droppableIndexStart, 1);

        const listEnd = draggedState.find((list) => droppableIdEnd === list.id);

        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return draggedState;
    default:
      return state;
  }
};
