export const environment = {
  production: true,
  apiBaseUrl: 'playofffantasy-api-hzawdkg6c7acgcg9.centralus-01.azurewebsites.net/api',
  auth0: {
    domain: 'your-tenant.auth0.com',
    clientId: 'your-client-id',
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  }
};
