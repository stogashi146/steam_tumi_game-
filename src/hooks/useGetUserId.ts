import axios from "axios";
import { useCallback, useState } from "react";
import { UserId } from "../types/api/userId";

export const useGetUserId = () => {
  const [loading, setLoading] = useState(false);
  const [customeId, setCustomId] = useState("");

  const getUserId = useCallback((name: string) => {
    const url = `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=XXX&vanityurl=${name}`;
    console.log(url);
    fetch(url, {
      mode: "cors"
    })
      .then((res) => {
        console.log(res);
        // setCustomId(res);
        console.log(customeId);
      })
      .catch(() => {
        console.log("エラー");
      });
  }, []);
  return { getUserId, customeId, loading };
};
