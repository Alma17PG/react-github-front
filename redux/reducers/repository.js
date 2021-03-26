import constants from '../constants';

const {
  SET_REPOSITORYNAME,
} = constants;

const defaultState = () => ({
  repositoryName: '',
});

const reducer = (state = defaultState(), action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_REPOSITORYNAME:
      return { ...state, repositoryName: payload };
    default:
      return state;
  }
};

export default reducer;
