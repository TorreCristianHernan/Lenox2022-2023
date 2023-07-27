const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions:{
  charts: true,
  reportPageTitle: "custom-title",
  embeddedScreenchots: false,
  inlineAssets: true,
  saveAllAttempts: false,
},
  e2e: {
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });
      on("task", {
        lighthouse: lighthouse(),
      });
      // implement node event listeners here
        allureWriter(on, config);
    return config
    },
    defaultCommandTimeout: 10000,
    watchForFileChanges:false,
    "baseUrl":"http://localhost:7756/lenox",
  },  
});
