import React from "react";
import APIClient from "../services/api-client";
import { Movie } from "../entities/movie";
import { useQuery } from "@tanstack/react-query";

const useMovies = (url: string) => {
  const apiClient = new APIClient<Movie>(url);
  return useQuery({
    queryKey: ["movies", url],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useMovies;
