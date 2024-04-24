import { subDays, addDays } from 'date-fns';
import { createResourceId } from '../utils/create-resource-id';
import { deepCopy } from '../utils/deep-copy';

// You'll see here that we start with a deep clone of the board.
// The reason for that is to create a db session wannabe strategy.
// If something fails, we do not affect the original data until everything worked as expected.

const now = new Date();

let board = {
  cards: [
    {
      id: '5e849c8708bd72683b454747',
      attachments: [],
      checklists: [
        {
          id: '5e84a8175c48d3f5b1d01972',
          name: 'Update overview page',
          checkItems: [
            {
              id: '5e85af37da584c5e4bd8a06c',
              name: 'Prepare sketch',
              state: 'complete'
            }
          ]
        }
      ],
      comments: [
        {
          id: '15e849c5a35d4dff4f88ebff6',
          cardId: '5e849c8708bd72683b454747',
          createdAt: subDays(now, 5).getTime(),
          memberId: '5e887ac47eed253091be10cb',
          message: 'This is a comment'
        }
      ],
      columnId: '5e849c39325dc5ef58e5a5db',
      cover: '/static/mock-images/kanban/media_1.jpg',
      description: 'Duis condimentum lacus finibus felis pellentesque, ac auctor nibh fermentum. Duis sed dui ante. Phasellus id eros tincidunt, dictum lorem vitae, pellentesque sem. Aenean eu enim sit amet mauris rhoncus mollis. Sed enim turpis, porta a felis et, luctus faucibus nisi. Phasellus et metus fermentum, ultrices arcu aliquam, facilisis justo. Cras nunc nunc, elementum sed euismod ut, maximus eget nibh. Phasellus condimentum lorem neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce sagittis pharetra eleifend. Suspendisse potenti.',
      due: addDays(now, 7).getTime(),
      isSubscribed: false,
      labels: ['Business', 'Design'],
      memberIds: ['5e86809283e28b96d2d38537'],
      name: 'Call with sales of HubSpot'
    },
    {
      id: '5e849c90fabe1f1f4b3557f6',
      attachments: [],
      checklists: [],
      columnId: '5e849c39325dc5ef58e5a5db',
      comments: [],
      cover: null,
      description: 'We are looking for vue experience and of course node js strong knowledge',
      due: addDays(now, 6).getTime(),
      isSubscribed: true,
      labels: [],
      memberIds: ['5e887b209c28ac3dd97f6db5', '5e887a62195cc5aef7e8ca5d'],
      name: 'Interview for the Asis. Sales Manager'
    },
    {
      id: '5e849c977ef6265938bfd90b',
      attachments: [],
      checklists: [],
      columnId: '5e849c39325dc5ef58e5a5db',
      comments: [],
      cover: null,
      description: 'We need to make it aggressive with pricing because it’s in their interest to acquire us',
      due: null,
      isSubscribed: false,
      labels: [],
      memberIds: [],
      name: 'Change the height of the top bar because it looks too chunky'
    },
    {
      id: '5e849c9e34ee93bc7255c599',
      attachments: [],
      checklists: [],
      columnId: '5e849c39325dc5ef58e5a5db',
      comments: [],
      cover: null,
      description: 'We need to make it aggressive with pricing because it’s in their interest to acquire us',
      due: null,
      isSubscribed: false,
      labels: [],
      memberIds: ['5e887ac47eed253091be10cb', '5e86809283e28b96d2d38537'],
      name: 'Integrate Stripe API'
    },
    {
      id: '5e849ca7d063dc3830d4b49c',
      attachments: [],
      checklists: [],
      columnId: '5e849c2b38d238c33e516755',
      comments: [],
      cover: null,
      description: 'We need to make it aggressive with pricing because it’s in their interest to acquire us',
      due: null,
      isSubscribed: true,
      labels: [],
      memberIds: ['5e887a62195cc5aef7e8ca5d'],
      name: 'Update the customer API for payments'
    },
    {
      id: '5e849cb5d0c6e8894451fdfa',
      attachments: [],
      checklists: [],
      columnId: '5e849c2b38d238c33e516755',
      comments: [],
      cover: null,
      description: 'We need to make it aggressive with pricing because it’s in their interest to acquire us',
      due: null,
      isSubscribed: true,
      labels: [],
      memberIds: [],
      name: 'Redesign the landing page'
    }
  ],
  columns: [
    {
      id: '5e849c39325dc5ef58e5a5db',
      cardIds: [
        '5e849c8708bd72683b454747',
        '5e849c90fabe1f1f4b3557f6',
        '5e849c977ef6265938bfd90b',
        '5e849c9e34ee93bc7255c599'
      ],
      name: 'Todo'
    },
    {
      id: '5e849c2b38d238c33e516755',
      cardIds: [
        '5e849ca7d063dc3830d4b49c',
        '5e849cb5d0c6e8894451fdfa'
      ],
      name: 'Progress'
    },
    {
      id: '5e849c2b38d238c33e5146755',
      name: 'Done',
      cardIds: []
    }
  ],
  members: [
    {
      id: '5e887a62195cc5aef7e8ca5d',
      avatar: '/static/mock-images/avatars/avatar-marcus_finn.png',
      name: 'Marcus Finn'
    },
    {
      id: '5e887ac47eed253091be10cb',
      avatar: '/static/mock-images/avatars/avatar-carson_darrin.png',
      name: 'Carson Darrin'
    },
    {
      id: '5e887b209c28ac3dd97f6db5',
      avatar: '/static/mock-images/avatars/avatar-fran_perez.png',
      name: 'Fran Perez'
    },
    {
      id: '5e887b7602bdbc4dbb234b27',
      avatar: '/static/mock-images/avatars/avatar-jie_yan_song.png',
      name: 'Jie Yan Song'
    },
    {
      id: '5e86809283e28b96d2d38537',
      avatar: '/static/mock-images/avatars/avatar-anika_visser.png',
      name: 'Anika Visser'
    }
  ]
};

class KanbanApi {
  getBoard() {
    return Promise.resolve(deepCopy(board));
  }

  createColumn({ name }) {
    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedBoard = deepCopy(board);

        // Create the new column
        const column = {
          id: createResourceId(),
          name,
          cardIds: []
        };

        clonedBoard.columns.push(column);

        // Save changes
        board = clonedBoard;

        resolve(deepCopy(column));
      } catch (err) {
        console.error('[Kanban Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  updateColumn({ columnId, update }) {
    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedBoard = deepCopy(board);

        // Find the column to clear
        const column = clonedBoard.columns.find((_column) => _column.id === columnId);

        // Update the column
        Object.assign(column, update);

        // Save changes
        board = clonedBoard;

        resolve(deepCopy(column));
      } catch (err) {
        console.error('[Kanban Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  clearColumn(columnId) {
    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedBoard = deepCopy(board);

        // Find the column to clear
        const column = clonedBoard.columns.find((_column) => _column.id === columnId);

        if (!column) {
          reject(new Error('Column not found'));
          return;
        }

        // Remove the cards with columnId reference
        clonedBoard.cards = clonedBoard.cards.filter((card) => card.columnId !== columnId);

        // Remove all cardIds from the column
        column.cardIds = [];

        // Save changes
        board = clonedBoard;

        resolve(true);
      } catch (err) {
        console.error('[Kanban Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  deleteColumn(columnId) {
    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedBoard = deepCopy(board);

        // Find the column to remove
        const column = clonedBoard.columns.find((_column) => _column.id === columnId);

        if (!column) {
          reject(new Error('Column not found'));
          return;
        }

        // Remove the cards with columnId reference
        clonedBoard.cards = clonedBoard.cards.filter((card) => card.columnId !== columnId);

        // Remove the column from the board
        clonedBoard.columns = clonedBoard.columns.filter((_column) => _column.id !== columnId);

        // Save changes
        board = clonedBoard;

        resolve(true);
      } catch (err) {
        console.error('[Kanban Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  createCard({ columnId, name }) {
    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedBoard = deepCopy(board);

        // Find the column where the new card will be added
        const column = clonedBoard.columns.find((_column) => _column.id === columnId);

        if (!column) {
          reject(new Error('Column not found'));
          return;
        }

        // Create the new card
        const card = {
          id: createResourceId(),
          attachments: [],
          checklists: [],
          columnId,
          comments: [],
          cover: null,
          description: null,
          due: null,
          isSubscribed: false,
          labels: [],
          memberIds: [],
          name
        };

        // Add the new card
        clonedBoard.cards.push(card);

        // Add the cardId reference to the column
        column.cardIds.push(card.id);

        // Save changes
        board = clonedBoard;

        resolve(deepCopy(card));
      } catch (err) {
        console.error('[Kanban Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  updateCard({ cardId, update }) {
    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedBoard = deepCopy(board);

        // Find the card that will be updated
        const card = clonedBoard.cards.find((_card) => _card.id === cardId);

        if (!card) {
          reject(new Error('Card not found'));
          return;
        }

        // Update the card
        Object.assign(card, update);

        // Save changes
        board = clonedBoard;

        resolve(deepCopy(card));
      } catch (err) {
        console.error('[Kanban Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  moveCard({ cardId, position, columnId }) {
    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedBoard = deepCopy(board);

        // Find the card that will be moved
        const card = clonedBoard.cards.find((_card) => _card.id === cardId);

        if (!card) {
          reject(new Error('Card not found'));
          return;
        }

        // Find the source column of the card
        const sourceList = clonedBoard.columns.find((column) => column.id === card.columnId);

        if (!sourceList) {
          reject(new Error('Column not found'));
          return;
        }

        // Remove the cardId reference from the source list
        sourceList.cardIds = sourceList.cardIds.filter((_cardId) => _cardId !== cardId);

        if (columnId) {
          // Find the destination column for the card
          const destinationList = clonedBoard.columns.find((column) => column.id === columnId);

          if (!destinationList) {
            reject(new Error('Column not found'));
            return;
          }

          // Add the cardId reference to the destination list
          destinationList.cardIds.splice(position, 0, card.id);

          // Store the new columnId reference
          card.columnId = destinationList.id;
        } else {
          // If columnId is not provided, it means that we move the card in the same list
          sourceList.cardIds.splice(position, 0, card.id);
        }

        // Save changes
        board = clonedBoard;

        resolve(true);
      } catch (err) {
        console.error('[Kanban Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  deleteCard(cardId) {
    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedBoard = deepCopy(board);

        // Find the card that will be removed
        const card = clonedBoard.cards.find((_card) => _card.id === cardId);

        if (!card) {
          reject(new Error('Card not found'));
          return;
        }

        // Remove the card from board
        clonedBoard.cards = clonedBoard.cards.filter((_card) => _card.id !== cardId);

        // Find the column using the columnId reference
        const column = clonedBoard.columns.find((_column) => _column.id === card.columnId);

        // If for some reason it does not exist, there's no problem. Maybe something broke before.
        if (column) {
          column.cardIds = column.cardIds.filter((_cardId) => _cardId !== cardId);
        }

        // Save changes
        board = clonedBoard;

        resolve(true);
      } catch (err) {
        console.error('[Kanban Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  addComment({ cardId, message }) {
    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedBoard = deepCopy(board);

        // Find the card where the comment will be added
        const card = clonedBoard.cards.find((_card) => _card.id === cardId);

        if (!card) {
          reject(new Error('Card not found'));
          return;
        }

        // Create the new comment
        // Important: On server get memberId from request identity (user)
        const comment = {
          id: createResourceId(),
          cardId,
          createdAt: now.getTime(),
          memberId: '5e86809283e28b96d2d38537',
          message
        };

        // Add the new comment to card
        card.comments.push(comment);

        // Save changes
        board = clonedBoard;

        resolve(deepCopy(comment));
      } catch (err) {
        console.error('[Kanban Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  addChecklist({ cardId, name }) {
    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedBoard = deepCopy(board);

        // Find the card where the checklist will be added
        const card = clonedBoard.cards.find((_card) => _card.id === cardId);

        if (!card) {
          reject(new Error('Card not found'));
          return;
        }

        // Create the new checklist
        const checklist = {
          id: createResourceId(),
          name,
          checkItems: []
        };

        // Add the new checklist to card
        card.checklists.push(checklist);

        // Save changes
        board = clonedBoard;

        resolve(deepCopy(checklist));
      } catch (err) {
        console.error('[Kanban Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  updateChecklist({ cardId, checklistId, update }) {
    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedBoard = deepCopy(board);

        // Find the card that contains the checklist that will be updated
        const card = clonedBoard.cards.find((_card) => _card.id === cardId);

        if (!card) {
          reject(new Error('Card not found'));
          return;
        }

        // Find the checklist that will be updated
        const checklist = card.checklists.find((_checklist) => _checklist.id === checklistId);

        if (!checklist) {
          reject(new Error('Checklist not found'));
          return;
        }

        // Update the checklist
        Object.assign(checklist, update);

        // Save changes
        board = clonedBoard;

        resolve(deepCopy(checklist));
      } catch (err) {
        console.error('[Kanban Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  deleteChecklist({ cardId, checklistId }) {
    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedBoard = deepCopy(board);

        // Find the card that contains the checklist that will be removed
        const card = clonedBoard.cards.find((_card) => _card.id === cardId);

        if (!card) {
          reject(new Error('Card not found'));
          return;
        }

        // Remove the checklist from the card
        card.checklists = card.checklists.filter((checklists) => checklists.id !== checklistId);

        // Save changes
        board = clonedBoard;

        resolve(true);
      } catch (err) {
        console.error('[Kanban Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  addCheckItem({ cardId, checklistId, name }) {
    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedBoard = deepCopy(board);

        // Find the card where the checklist will be added
        const card = clonedBoard.cards.find((_card) => _card.id === cardId);

        if (!card) {
          reject(new Error('Card not found'));
          return;
        }

        // Find the checklist where the check item will be added
        const checklist = card.checklists.find((_checklist) => _checklist.id === checklistId);

        if (!checklist) {
          reject(new Error('Checklist not found'));
          return;
        }

        // Create the new check item
        const checkItem = {
          id: createResourceId(),
          checklistId,
          name,
          state: 'incomplete'
        };

        // Add the check item to the checklist
        checklist.checkItems.push(checkItem);

        // Save changes
        board = clonedBoard;

        resolve(deepCopy(checkItem));
      } catch (err) {
        console.error('[Kanban Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  updateCheckItem({ cardId, checklistId, checkItemId, update }) {
    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedBoard = deepCopy(board);

        // Find the card where the checklist will be added
        const card = clonedBoard.cards.find((_card) => _card.id === cardId);

        if (!card) {
          reject(new Error('Card not found'));
          return;
        }

        // Find the checklist where the check item will be updated
        const checklist = card.checklists.find((_checklist) => _checklist.id === checklistId);

        if (!checklist) {
          reject(new Error('Checklist not found'));
          return;
        }

        // Find the checklist where the check item will be updated
        const checkItem = checklist.checkItems.find((_checkItem) => _checkItem.id === checkItemId);

        if (!checkItem) {
          reject(new Error('Check item not found'));
          return;
        }

        // Update the check item
        Object.assign(checkItem, update);

        // Save changes
        board = clonedBoard;

        resolve(deepCopy(checkItem));
      } catch (err) {
        console.error('[Kanban Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  deleteCheckItem({ cardId, checklistId, checkItemId }) {
    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedBoard = deepCopy(board);

        // Find the card that contains the checklist that contains the check item that will be removed
        const card = clonedBoard.cards.find((_card) => _card.id === cardId);

        if (!card) {
          reject(new Error('Card not found'));
          return;
        }

        // Find the checklist where the check item will be updated
        const checklist = card.checklists.find((_checklist) => _checklist.id === checklistId);

        if (!checklist) {
          reject(new Error('Checklist not found'));
          return;
        }

        // Remove the check item from the checklist
        checklist.checkItems =
          checklist.checkItems.filter((checkItem) => (checkItem.id !== checkItemId));

        // Save changes
        board = clonedBoard;

        resolve(true);
      } catch (err) {
        console.error('[Kanban Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }
}

export const kanbanApi = new KanbanApi();
