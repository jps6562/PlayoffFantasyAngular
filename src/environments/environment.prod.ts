export const environment = {
  production: true,
  apiBaseUrl: 'playofffantasy-api-hzawdkg6c7acgcg9.centralus-01.azurewebsites.net/api',
  auth0: {
    domain: 'dev-x7ylktswpnvh1233.us.auth0.com',
    clientId: 'z3Bm23FJuaf5B7vGBH6qBBVJPZv9zC4P',
    authorizationParams: {
      redirect_uri: typeof window !== 'undefined' ? window.location.origin : ''
    }
  }
};
