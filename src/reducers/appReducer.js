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
    default:
      return state
  }
}
export default AppReducer
