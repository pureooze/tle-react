export const openAppDialog = () => {
  return {
    type: 'OPEN_APP_DIALOG',
    payload: {
      appDialogOpen: true
    }
  }
}

export const closeAppDialog = () => {
  return {
    type: 'CLOSE_APP_DIALOG',
    payload: {
      appDialogOpen: false
    }
  }
}

export const loadAddRoomDialog = () => {
  return {
    type: 'LOAD_ADD_ROOM_DIALOG',
    payload: {
      appDialogType: 'ADD_ROOM'
    }
  }
}

export const addNewRoom = (newRoom) => {
  return {
    type: 'ADD_NEW_ROOM',
    payload: {
      newRoom: newRoom
    }
  }
}
