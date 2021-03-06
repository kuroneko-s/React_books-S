import { finishLoading, startLoading } from "../modules/loading";

export default function createRequestThunk(type, request) {
  // action type
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  // thunk function
  return (params) => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type));

    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      dispatch(startLoading(type));
      console.log(e);
      throw e;
    }
  };
}

// usecase createRequestThunk("GET_POST", api.getPost)
