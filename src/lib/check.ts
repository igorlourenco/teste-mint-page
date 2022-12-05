import axios from "axios";

export const userOwnsGame = async (steamId: string) => {
  const { data } = await axios.get(
    "https://api.steampowered.com/ISteamUser/CheckAppOwnership/v2/",
    {
      params: {
        steamid: steamId,
        appid: 1340160,
        key: "D451E874EB19CBB5220F7D3485003C02",
      },
    }
  );
  return data?.appownership?.ownsapp;
};
