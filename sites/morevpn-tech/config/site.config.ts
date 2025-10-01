export const config = {
  id: 'morevpn-tech',
  name: 'MoreVPN',
  domain: 'morevpn.tech',
  defaultLocale: 'ru',
  locales: ['ru', 'en'],

  features: {
    auth: true,
    subscription: true,
    payment: ['stripe', 'cryptomus'],
    blog: true,
    analytics: {
      gtm: 'GTM-XXXXX',
      yandex: '12345678',
    },
  },

  businessType: 'vpn-subscription',

  api: {
    baseUrl: 'https://api.morevpn.tech',
    timeout: 10000,
  },
};


