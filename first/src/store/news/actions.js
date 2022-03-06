import { API } from "../../utils";

export const REQUEST_NEWS_LOADING = "NEWS::REQUEST_LOADING";
export const REQUEST_NEWS_FAILURE = "NEWS::REQUEST_FAILURE";
export const REQUEST_NEWS_SUCCESS = "NEWS::REQUEST_SUCCESS";

export const getNewsLoading = () => ({
  type: REQUEST_NEWS_LOADING,
});

export const getNewsFailure = (err) => ({
  type: REQUEST_NEWS_FAILURE,
  payload: err,
});

export const getNewsSuccess = (news) => ({
  type: REQUEST_NEWS_SUCCESS,
  payload: news,
});

export const getNews = () => async (dispatch) => {
  dispatch(getNewsLoading());
  try {
    const response = await fetch(
      // `${API.url}?access_key=${API.access_key}&categories=${API.categories}&languages=${API.languages}&limit=${API.limit}`
      API.url
    );

    if (!response.ok) {
      throw new Error("Page not found");
    }
    const result = await response.json();

    dispatch(getNewsSuccess(result.data));
  } catch (err) {
    dispatch(getNewsFailure(err.text));
    console.warn(err);
  }
};
