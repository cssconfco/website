export const config = {
  isProduction: process.env.NODE_ENV === 'production',
  googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  clientUrl: process.env.CLIENT_URL,
  apiUrl: process.env.API_URL
}
