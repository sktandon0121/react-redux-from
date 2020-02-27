import * as actionsType from "./../actions/actionsType";

const initialState = {
  userData: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.CREATE_DATA:
      const userData = [...state.userData];
      userData.push({
        name: action.payload.name,
        email: action.payload.email
      });
      return {
        ...state,
        userData: userData
      };
    default:
      return state;
  }
};

export default rootReducer;
