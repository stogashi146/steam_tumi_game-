import axios from "axios";
import { useCallback, useState } from "react";

export const useGetGames = () => {
  const [loading, setLoading] = useState();
  const [games, setGames] = useState();

  const getGames = useCallback(() => {
    axios
      .get("")
      .then(() => {})
      .catch(() => {});
  }, []);
  return { getGames };
};
