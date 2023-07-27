
describe('Lighthouse Audit', () => {
    it('should pass the Lighthouse audit', () => {
      cy.visit('');
      cy.lighthouse({
        accessibility: 50,
        "best-practices": 50,
        seo: 50,
        pwa: 0,
      });
      



    });
  });