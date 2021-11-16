import { TOGGLE_NAME_CHECKBOX } from "./actions";

const initialState = {
  showName: false,
  name: "Default",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAME_CHECKBOX:
      return {
        ...state,
        showName: !state.showName,
      };
    default:
      return state;
  }
};
