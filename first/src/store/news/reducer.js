import { REQUEST_STATUS } from "../../utils";
import {
  REQUEST_NEWS_FAILURE,
  REQUEST_NEWS_LOADING,
  REQUEST_NEWS_SUCCESS,
} from "./actions";

const initialState = {
  newsList: [],
  request: {
    stAtus: REQUEST_STATUS.IDLE,
    error: "",
  },
};

export const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_NEWS_LOADING:
      return {
        ...state,
        request: {
          ...state.request,
          status: REQUEST_STATUS.LOADING,
        },
      };
    case REQUEST_NEWS_SUCCESS:
      return {
        ...state,
        newsList: payload,
        request: {
          error: "",
          ...state.request,
          status: REQUEST_STATUS.SUCCESS,
        },
      };
    case REQUEST_NEWS_FAILURE:
      return {
        ...state,
        news: payload,
        request: {
          error: payload,
          ...state.request,
          status: REQUEST_STATUS.FAILURE,
        },
      };
    default:
      return state;
  }
};
