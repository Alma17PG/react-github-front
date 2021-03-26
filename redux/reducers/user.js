import constants from '../constants';

const {
  SET_USERNAME,
} = constants;

const defaultState = () => ({
  userName: '',
});

const reducer = (state = defaultState(), action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USERNAME:
      return { ...state, userName: payload };
    default:
      return state;
  }
};

export default reducer;
