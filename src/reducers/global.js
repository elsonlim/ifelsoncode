const initState = {
  isDarkMode: false,
}

export default (state = initState, action) => {
  switch(action.type) {
    case 'dark_mode':
      const newState = Object.assign({} , state);
      newState.isDarkMode = action.payload;
      return newState;
    default: 
      return state;
  }
};
