import { users as ActionTypes } from '$constants/action-types';
import makeNestedList from '$helpers/make-nested-list';

const initialState = {
  items: [],
  isFetching: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_SUCCESS: {
      return Object.assign({}, state, {
        ...state,
        items: makeNestedList(action.payload),
        flatItems: action.payload,
        isFetching: false,
      });
    }

    case ActionTypes.FETCH_FAILURE: {
      return Object.assign({}, state, {
        ...state,
        isFetching: false,
      });
    }

    case ActionTypes.COLLAPSE: {
      const newState = { ...state };
      const itemCollapsed = newState.flatItems[action.payload].collapsed;
      newState.flatItems[action.payload].collapsed = !itemCollapsed;
      return Object.assign({}, state, {
        ...newState,
        items: makeNestedList(newState.flatItems),
      });
    }

    case ActionTypes.REMOVE: {
      const newState = { ...state };
      newState.flatItems[action.payload].removed = true;
      return Object.assign({}, state, {
        ...newState,
        items: makeNestedList(newState.flatItems),
      });
    }

    default:
      return state;
  }
}


export default reducer;
