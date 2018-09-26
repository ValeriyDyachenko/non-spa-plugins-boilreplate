import stringfy from '../../helpers/stringfy';
import {fetch as fetchPolyfill} from 'whatwg-fetch';

const SHOW_LIST = 'SHOW_LIST';
const ON_CHANGE_INPUT = 'ON_CHANGE_INPUT';
const USER_CONFIRM_SUGGEST = 'USER_CONFIRM_SUGGEST';
const USER_SELECT_TOWN = 'USER_SELECT_TOWN';
const SUGGEST_HAS_ERRORED = 'SUGGEST_HAS_ERRORED';
const SUGGEST_IS_LOADING = 'SUGGEST_IS_LOADING';
const SUGGEST_FETCH_SUCCESS = 'SUGGEST_FETCH_SUCCESS';
const SET_DEFAULT_CITY = 'SET_DEFAULT_CITY';
const SET_URL_API = 'SET_URL_API';

export function showList(isVisible) {
  return {
    type: SHOW_LIST,
    isVisible,
  };
}

export function inputChanged(inputValue) {
  return {
    type: ON_CHANGE_INPUT,
    inputValue,
  };
}

export function changeConfirmSuggest(userConfirmStatus) {
  return {
    type: USER_CONFIRM_SUGGEST,
    userConfirmStatus,
  };
}

export function selectTown(selectedTown) {
  return {
    type: USER_SELECT_TOWN,
    selectedTown,
  };
}

export function suggestHasErrored(bool) {
  return {
    type: SUGGEST_HAS_ERRORED,
    hasErrored: bool,
  };
}

export function suggestIsLoading(bool) {
  return {
    type: SUGGEST_IS_LOADING,
    isLoading: bool,
  };
}

export function suggestFetchSuccess(suggests) {
  return {
    type: SUGGEST_FETCH_SUCCESS,
    suggest: suggests,
  };
}

export function setDefaultCity(suggestCity) {
  return {
    type: SET_DEFAULT_CITY,
    suggestCity,
  };
}

export function setApiUrl(apiUrl) {
  return {
    type: SET_URL_API,
    apiUrl,
  };
}

export function suggestFetchData(url, val) {
  return (dispatch) => {
    dispatch(suggestIsLoading(true));
    fetchPolyfill(
        url,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: stringfy({input: val}),
        },
    ).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(suggestIsLoading(false));
      return response;
    })
        .then((response) => response.json())
        .then((s) => dispatch(suggestFetchSuccess(s)))
        .catch(() => dispatch(suggestHasErrored(true)));
  };
}

export function handleSelectCity(url, town) {
  return (dispatch) => {
    fetchPolyfill(
        url,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: stringfy({town, setCookie: 'yes'}),
        },
    ).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(selectTown(town));
      return response;
    })
        .then((response) => response.json())
        .catch(() => console.error('error set cookie'));
  };
}

const initialState = {
  showList: false,
  inputValue: '',
  userConfirmStatus: undefined,
  selectedTown: '',
  suggest: [],
  isFetchSuggestError: false,
  isFetchSuggestLoading: false,
  suggestCity: '',
  apiUrl: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LIST: {
      const showList = !!action.isVisible;
      return {...state, showList};
    }
    case ON_CHANGE_INPUT: {
      const {inputValue} = action;
      return {...state, inputValue};
    }
    case USER_CONFIRM_SUGGEST: {
      const {userConfirmStatus} = action;
      return {...state, userConfirmStatus};
    }
    case USER_SELECT_TOWN: {
      const {selectedTown} = action;
      return {...state, selectedTown};
    }
    case SUGGEST_HAS_ERRORED: {
      const isFetchSuggestError = action.hasErrored;
      return {...state, isFetchSuggestError};
    }
    case SUGGEST_IS_LOADING: {
      const isFetchSuggestLoading = action.isLoading;
      return {...state, isFetchSuggestLoading};
    }
    case SUGGEST_FETCH_SUCCESS: {
      const {suggest} = action;
      return {...state, suggest};
    }
    case SET_DEFAULT_CITY: {
      const {suggestCity} = action;
      return {...state, suggestCity};
    }
    case SET_URL_API: {
      const {apiUrl} = action;
      return {...state, apiUrl};
    }
    default:
      return state;
  }
}
