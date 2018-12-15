const initialState = {
  buttonShowHide: false
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Button_Show_Hide":
      return Object.assign({}, state, {
        buttonShowHide: (state.buttonShowHide = action.payload)
      });

    default:
      return state;
  }
};

export default authReducer;
