import axios from "axios";

const instance = axios.create({
  baseURL : 'https://127.0.0.1:5001/clone-619c2/us-central1/api' // The API (Cloud Function URL)
});

export default instance;
