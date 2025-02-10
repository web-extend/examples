import './site-one.css';

console.log('three');

export const config = {
  matches: ['https://www.baidu.com/'],
  world: "MAIN"
};

// support hmr in dev mode
if (module.hot) {
  module.hot.accept();
}
