export type UserProfile = {
  steamid: string;
  // ユーザーの公開設定
  // 1-プロファイルは表示されません（プライベート、フレンドのみなど）、3-プロファイルは「パブリック」であり、データは表示されます
  communityvisibilitystate: number;
  // 表示名
  personaname: "aian";
  profileurl: "https://steamcommunity.com/id/aian5/";
  // アバター画像
  avatar: "https://avatars.akamai.steamstatic.com/9e90569cd34de98dbd5a880e368d43d1b175cd5a.jpg";
  avatarmedium: "https://avatars.akamai.steamstatic.com/9e90569cd34de98dbd5a880e368d43d1b175cd5a_medium.jpg";
  avatarfull: "https://avatars.akamai.steamstatic.com/9e90569cd34de98dbd5a880e368d43d1b175cd5a_full.jpg";
  lastlogoff: 1658106995;
  // 0 - Offline, 1 - Online, 2 - Busy, 3 - Away, 4 - Snooze, 5 - looking to trade, 6 - looking to play
  personastate: 1;
  // プレイヤーの「本名」（設定されている場合）
  realname: "aian";
  primaryclanid: "103582791430370964";
  // 登録日
  timecreated: 1303957046;
  personastateflags: 0;
  loccountrycode: "JP";
  locstatecode: "40";
};
