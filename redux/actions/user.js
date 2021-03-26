/* eslint-disable import/prefer-default-export */
import constanst from '../constants';

const {
  SET_USERNAME,
} = constanst;

export const setUsername = (payload) => ({
  type: SET_USERNAME,
  payload,
});
