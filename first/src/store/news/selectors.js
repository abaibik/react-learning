import { REQUEST_STATUS } from "../../utils";

export const selectNewsList = (state) => state.news.newsList;
export const selectNewsLoading = (state) =>
  state.news.request.status === REQUEST_STATUS.PENDING;
export const selectNewsError = (state) => state.news.request.error;
