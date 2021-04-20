import * as EC from '../../src';

const selector = '#elements button';

describe('Logical', () => {
  beforeEach(async () => await browser.url('/add_remove_elements/'));

  describe('AND', () => {
    it('should verify method returns true when 1 function returns true and 2 function returns true', async () => {
      const shouldReturnTrue = EC.invisibilityOf(selector);
      const shouldReturnTrueToo = EC.textToBePresentInElement('button', 'Add');
  
      expect(await EC.and(shouldReturnTrue, shouldReturnTrueToo)()).toBe(true);
    });

    it('should verify method returns false when 1 function returns false and 2 function returns true', async () => {
      const shouldReturnFalse = EC.visibilityOf(selector);
      const shouldReturnTrue = EC.textToBePresentInElement('button', 'Add');
  
      expect(await EC.and(shouldReturnFalse, shouldReturnTrue)()).toBe(false);
    });

    it('should verify method returns false when 1 function returns false and 2 function returns false', async () => {
      const shouldReturnFalse = EC.visibilityOf(selector);
      const shouldReturnFalseToo = EC.textToBePresentInElement('button', 'Delete');
  
      expect(await EC.and(shouldReturnFalse, shouldReturnFalseToo)()).toBe(false);
    });
  });

  describe('OR', () => {
    it('should verify method returns true when 1 function returns false and 2 function returns true', async () => {
      const shouldReturnFalse = EC.visibilityOf(selector);
      const shouldReturnTrue = EC.textToBePresentInElement('button', 'Add');
  
      expect(await EC.or(shouldReturnFalse, shouldReturnTrue)()).toBe(true);
    });

    it('should verify method returns false when 1 function returns false and 2 function returns false', async () => {
      const shouldReturnFalse = EC.visibilityOf(selector);
      const shouldReturnFalseToo = EC.textToBePresentInElement('button', 'Delete');
  
      expect(await EC.or(shouldReturnFalse, shouldReturnFalseToo)()).toBe(false);
    });
  });

  describe('NOT', () => {
    it('should verify method returns true when function returns false', async () => {
      const shouldReturnFalse = EC.visibilityOf(selector);
  
      expect(await EC.not(shouldReturnFalse)()).toBe(true);
    });
  
    it('should verify method returns false when function returns false', async () => {
      const shouldReturnTrue = EC.invisibilityOf(selector);

      expect(await EC.not(shouldReturnTrue)()).toBe(false);
    });
  });

  describe('AND & NOT', () => {
    it('should verify method returns true', async () => {
      const shouldReturnTrue = EC.invisibilityOf(selector);
      const shouldReturnFalse = EC.visibilityOf(selector);
  
      expect(await EC.and(EC.not(shouldReturnFalse), shouldReturnTrue)()).toBe(true);
    });
  
    it('should verify method returns false', async () => {
      const shouldReturnTrue = EC.invisibilityOf(selector);
      const shouldReturnFalse = EC.visibilityOf(selector);
  
      expect(await EC.and(EC.not(shouldReturnTrue), shouldReturnFalse)()).toBe(false);
    });
  });

  describe('OR & NOT', () => {
    it('should verify method returns true', async () => {
      const shouldReturnTrue = EC.invisibilityOf(selector);
  
      expect(await EC.or(EC.not(shouldReturnTrue), shouldReturnTrue)()).toBe(true);
    });
  
    it('should verify method returns false', async () => {
      const shouldReturnTrue = EC.invisibilityOf(selector);
  
      expect(await EC.or(EC.not(shouldReturnTrue), EC.not(shouldReturnTrue))()).toBe(false);
    });
  });

});
