import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_FILMS } from "../../graphql/queries";

export const useMovieList = () => {
  const { loading, error, data } = useQuery(GET_ALL_FILMS);

  return {
    data: data?.allFilms?.films,
    loading,
    error,
  };
};
