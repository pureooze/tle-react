const AppReducer = (state = [], action) => {
  switch (action.type) {
    case 'OPEN_DRAWER':
      return {
        ...state,
        drawerOpen: action.payload.drawerOpen
      };
    case 'CLOSE_DRAWER':
      return {
        ...state,
        drawerOpen: action.payload.drawerOpen
      };
    case 'OPEN_APP_DIALOG':
      return {
        ...state,
        appDialogOpen: action.payload.appDialogOpen
      };
    case 'CLOSE_APP_DIALOG':
      return {
        ...state,
        appDialogOpen: action.payload.appDialogOpen
      };
    case 'LOAD_ADD_ROOM_DIALOG':
      return {
        ...state,
        appDialogType: action.payload.appDialogType
      };
    case 'LOAD_EDIT_ROOM_DIALOG':
      return {
        ...state,
        appDialogType: action.payload.appDialogType
      };
    case 'ADD_NEW_ROOM':
      return {
        ...state,
        rooms: [...state.rooms, action.payload.newRoom]
      };
    case 'EDIT_ROOMS':
      return {
        ...state,
        rooms: action.payload.rooms
      };
    case 'ROOM_SELECTION_CHANGE':
      return {
        ...state,
        editRoomForm: action.payload.selectedRoom
      };
    case 'UPDATE_ADD_ROOM_FORM_NAME':
      return {
        ...state,
        addRoomForm: {
          name: action.payload.name,
          description: state.addRoomForm.description
        }
      };
    case 'UPDATE_ADD_ROOM_FORM_DESC':
      return {
        ...state,
        addRoomForm: {
          name: state.addRoomForm.name,
          description: action.payload.description
        }
      };
    case 'UPDATE_EDIT_ROOM_FORM_NAME':
      return {
        ...state,
        editRoomForm: {
          id: state.editRoomForm.id,
          name: action.payload.name,
          description: state.editRoomForm.description
        }
      };
    case 'UPDATE_EDIT_ROOM_FORM_DESC':
      return {
        ...state,
        editRoomForm: {
          id: state.editRoomForm.id,
          name: state.editRoomForm.name,
          description: action.payload.description
        }
      };
    default:
      return state;
  }
};
export default AppReducer;
