export const environment = {
  production: true,
  get URI_API(): string { return 'https://gateway.marvel.com:443/v1/public'; },
  get PUBLIC_KEY(): string { return 'YOUR_API_KEY'; },
  get PRIVATE_KEY(): string { return 'YOUR_PRIVATE_API_KEY'; }
};
