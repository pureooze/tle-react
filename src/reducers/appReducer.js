const AppReducer = (state = [], action) => {
  switch (action.type) {
    case 'OPEN_DRAWER':
      return {
        ...state,
        drawerOpen: action.payload.drawerOpen
      }
    case 'CLOSE_DRAWER':
      return {
        ...state,
        drawerOpen: action.payload.drawerOpen
      }
    case 'OPEN_APP_DIALOG':
      return {
        ...state,
        appDialogOpen: action.payload.appDialogOpen
      }
    case 'CLOSE_APP_DIALOG':
      return {
        ...state,
        appDialogOpen: action.payload.appDialogOpen
      }
    case 'LOAD_ADD_ROOM_DIALOG':
      return {
        ...state,
        appDialogType: action.payload.appDialogType
      }
    default:
      return state
  }
}
export default AppReducer