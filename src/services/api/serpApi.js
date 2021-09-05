import axios from "axios";

export const serpApiKey = "1a2c2897384beb48f797335e73537f1f1fe37216c861b4c7a4e5f5d81176b424";

const serpApi = axios.create({
  baseURL: "https://serpapi.com/search.json"
});

export default serpApi;
