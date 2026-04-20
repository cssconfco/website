export const config = {
  isProduction: process.env.NODE_ENV === 'production',
  clientUrl: process.env.CLIENT_URL,
  apiUrl: process.env.API_URL
}
