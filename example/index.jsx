const React = require('react');
const ReactDOM = require('react-dom');
const { AppContainer } = require('react-hot-loader');

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('hub-content'),
  );
}

render(require('./src/Parley'));

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./src/Parley', () => render(require('./src/Parley'))); // eslint-disable-line global-require
}
