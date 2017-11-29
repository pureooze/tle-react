export const openDrawer = () => {
  return {
    type: 'OPEN_DRAWER',
    payload: {
      drawerOpen: true
    }
  }
}

export const closeDrawer = () => {
  return {
    type: 'CLOSE_DRAWER',
    payload: {
      drawerOpen: false
    }
  }
}
