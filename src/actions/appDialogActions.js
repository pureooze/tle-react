export const openAppDialog = () => {
  return {
    type: 'OPEN_APP_DIALOG',
    payload: {
      appDialogOpen: true
    }
  };
};

export const closeAppDialog = () => {
  return {
    type: 'CLOSE_APP_DIALOG',
    payload: {
      appDialogOpen: false
    }
  };
};

export const loadAddRoomDialog = () => {
  return {
    type: 'LOAD_ADD_ROOM_DIALOG',
    payload: {
      appDialogType: 'ADD_ROOM'
    }
  };
};

export const loadEditRoomDialog = () => {
  return {
    type: 'LOAD_EDIT_ROOM_DIALOG',
    payload: {
      appDialogType: 'EDIT_ROOM'
    }
  };
};

export const roomSelectionChange = selectedRoom => {
  return {
    type: 'ROOM_SELECTION_CHANGE',
    payload: {
      selectedRoom: selectedRoom
    }
  };
};

export const addNewRoom = (roomId, addRoomForm) => {
  return {
    type: 'ADD_NEW_ROOM',
    payload: {
      newRoom: {
        id: roomId,
        name: addRoomForm.name,
        description: addRoomForm.description
      }
    }
  };
};

export const editRooms = rooms => {
  return {
    type: 'EDIT_ROOMS',
    payload: {
      rooms: rooms
    }
  };
};

export const updateAddRoomForm = (value, field) => {
  switch (field) {
    case 'NAME':
      return {
        type: 'UPDATE_ADD_ROOM_FORM_NAME',
        payload: {
          name: value
        }
      };
    case 'DESC':
      return {
        type: 'UPDATE_ADD_ROOM_FORM_DESC',
        payload: {
          description: value
        }
      };
    default:
      return {
        type: 'UPDATE_ADD_ROOM_FORM_NAME',
        payload: {
          name: value
        }
      };
  }
};

export const updateEditRoomForm = (value, field) => {
  switch (field) {
    case 'NAME':
      return {
        type: 'UPDATE_EDIT_ROOM_FORM_NAME',
        payload: {
          name: value
        }
      };
    case 'DESC':
      return {
        type: 'UPDATE_EDIT_ROOM_FORM_DESC',
        payload: {
          description: value
        }
      };
    default:
      return {
        type: 'UPDATE_EDIT_ROOM_FORM_NAME',
        payload: {
          name: value
        }
      };
  }
};
