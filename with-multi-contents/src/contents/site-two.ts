console.log('three1');

export const config = {
  matches: ['https://www.google.com/'],
};

// support hmr in dev mode
if (module.hot) {
  module.hot.accept();
}
