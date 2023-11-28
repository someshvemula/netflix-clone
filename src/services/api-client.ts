import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  page: number;
  total_pages: number;
  total_results: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "cab4630aec2578cb97c8176e269db357",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
