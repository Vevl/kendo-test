module.exports = {
  name: 'test',
  exposes: {
    './Module': 'apps/test/src/app/remote-entry/entry.module.ts',
  },
  additionalShared: [
    '@angular/animations'
  ],
};
