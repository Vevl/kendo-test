module.exports = {
  name: 'host',
  remotes: ['test'],
  additionalShared: [
    '@angular/animations'
  ],
  shared: (libraryName, libraryOptions) => {
    if (['@angular/localize'].includes(libraryName)) {
      return {
        ...libraryOptions,
        eager: true,
      };
    }
  }
};
