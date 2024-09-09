export const oktaConfig = {
  clientId: "...",
  issuer: "https://dev-<8-digits id>.okta.com/oauth2/default",
  redirectUri: "https://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
