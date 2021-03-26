/* eslint-disable import/prefer-default-export */
import constanst from '../constants';

const {
  SET_REPOSITORYNAME,
} = constanst;

export const setRepositoryName = (payload) => ({
  type: SET_REPOSITORYNAME,
  payload,
});
