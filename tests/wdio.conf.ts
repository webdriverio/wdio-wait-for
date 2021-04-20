export const config: WebdriverIO.Config = {
  runner: 'local',

  specs: ['./tests/**/*.test.ts'],

  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 10,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: [
          '--headless',
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--enable-precise-memory-info',
          '--window-size=1280,900',
        ],
      },
    },
  ],

  logLevel: 'info',

  bail: 0,

  baseUrl: 'https://the-internet.herokuapp.com',

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ['chromedriver'],

  framework: 'jasmine',

  reporters: ['spec'],

  jasmineOpts: {
    defaultTimeoutInterval: 60000,
  },
};
