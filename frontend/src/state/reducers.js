export const types = {
  UPDATE_USER: "UPDATE_USER"
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.UPDATE_USER:
      return {
        ...state,
        user: action.payload
      };
  }
};

export default reducer;
