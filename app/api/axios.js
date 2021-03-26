/* eslint-disable class-methods-use-this */
import axios from 'axios';

class Axios {
  constructor() {
    return axios.create({
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export default Axios;
