import axios from 'axios';

export default function Get() {
  return axios.get('https://opentdb.com/api.php?amount=10');
}
