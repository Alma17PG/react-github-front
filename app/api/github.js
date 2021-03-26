/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/';

export const getUsers = async ({ searchText, page, rowsPerPage }) => {
  try {
    const url = `${BASE_URL}users?q=${searchText}&page=${page}&per_page=${rowsPerPage}`;
    const { data } = await axios.get(url);
    return { ...data };
  } catch (error) {
    return null;
  }
};

export const getGeneralInfo = async ({ url }) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return null;
  }
};

export const getRepositories = async ({ searchText, page, rowsPerPage }) => {
  try {
    const url = `${BASE_URL}repositories?q=${searchText}&page=${page}&per_page=${rowsPerPage}`;
    const { data } = await axios.get(url);
    return { ...data };
  } catch (error) {
    return null;
  }
};
