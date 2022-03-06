export const AUTHORS = {
  human: "Me",
  bot: "Bot",
};

export const API = {
  // No HTTPS access to API on Free plan :-(
  // url: "http://api.mediastack.com/v1/news",
  url: "https://gist.githubusercontent.com/abaibik/6f37d5dded55ad460764a6d4a48c309a/raw/545e1e9ffb92e5a9757c68224b539a87b1684831/api.mediastack.com_v1_news",
  access_key: "6aab9adf374bd460bb005334cadcacb5",
  categories: "health",
  languages: "en",
  limit: 7,
};

export const REQUEST_STATUS = {
  IDLE: 0,
  PENDING: 1,
  SUCCESS: 2,
  FAILURE: 3,
};
