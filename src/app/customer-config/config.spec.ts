import load from './loader/config.loader';

const testParams = [
  'gugus',
  'alpha',
  'beta',
  'gamma',
  'default',
];

testParams.forEach(p => {
  (identifier => {
    describe('default config', () => {
      const config = load(identifier);

      it('identifier should be present', () => {
        expect(config.identifier).toBeTruthy();
      });

      it('settings should be present', () => {
        expect(Object.keys(config.settings).length).toBe(2);
      });

      it('icons should be present', () => {
        expect(Object.keys(config.icons).length).toBe(3);
      });

      it('renderer should be present', () => {
        expect(Object.keys(config.renderer).length).toBe(2);
      });

      it('forms should be present', () => {
        expect(Object.keys(config.forms).length).toBe(1);
      });
    });

  })(p);
});



