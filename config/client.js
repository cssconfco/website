export const config = {
  isProduction: process.env.NODE_ENV === 'production',
  googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  clientUrl: process.env.CLIENT_URL,
  apiUrl: process.env.API_URL,
  ePaycoValidateUrl: process.env.EPAYCO_VALIDATE_URL,
  ePaycoPublicKey: process.env.EPAYCO_PUBLIC_KEY,
  ePaycoTest: process.env.EPAYCO_ENV === 'development'
}
