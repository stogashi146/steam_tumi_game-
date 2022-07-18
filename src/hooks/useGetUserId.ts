import axios from "axios";
import { useCallback, useState } from "react";
import { UserId } from "../types/api/userId";

export const useGetUserId = () => {
  const [loading, setLoading] = useState(false);
  const [userId, setuserId] = useState();

  const getUserId = useCallback(() => {
    axios
      .get<UserId>(
        "https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=BA4AB9079710241FA1EB1D631E767A87&vanityurl=aian5"
      )
      .then((res) => {
        res.data;
      })
      .catch(() => {});
  }, []);
  return { getUserId, userId, loading };
};
