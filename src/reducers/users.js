import { users as ActionTypes } from '$constants/action-types';
import makeNestedList from '$helpers/make-nested-list';

const initialState = {
  items: [],
  isFetching: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        items: makeNestedList(action.payload.reverse()),
        isFetching: false,
      });

    case ActionTypes.FETCH_FAILURE:
      return Object.assign({}, state, {
        ...state,
        isFetching: false,
      });

    default:
      return state;
  }
}


export default reducer;
