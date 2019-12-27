const React = require('react');
const PropTypes = require('prop-types');

const extensions = require('../../packages/oas-extensions/');

const withSpecFetching = require('./SpecFetcher');

const ApiExplorer = require('../../packages/api-explorer/src');
// const Logs = require('../../packages/api-logs/index');
const ApiList = require('./ApiList');

require('../../example/swagger-files/types.json');
require('../../example/swagger-files/response-schemas.json');

require('../../packages/api-logs/main.css');

// function Demo({ fetchSwagger, status, docs, oas, oauth }) {
function Demo({ status, docs, oas, oauth }) {
  return (
    <div>
      <ApiExplorer
        // Uncomment this in for column layout
        // appearance={{ referenceLayout: 'column' }}
        appearance={{ referenceLayout: 'row' }}
        // Uncomment this if you want to test enterprise-structured URLs
        // baseUrl={'/child/v1.0'}
        baseUrl="/"
        // To test the top level error boundary, uncomment this
        // docs={[null, null]}
        docs={docs}
        // We only really set this to `true` for testing sites for errors using puppeteer
        dontLazyLoad={false}
        flags={{ correctnewlines: false }}
        glossaryTerms={[]}
        Logs={undefined}
        oasFiles={{
          'api-setting': Object.assign(extensions.defaults, oas),
        }}
        oauth={oauth}
        suggestedEdits={false}
        variables={{
          // Uncomment this to test without logs
          user: {},
          // Uncomment this to test with logs
          // user: {
          //   keys: [
          //     { id: 'someid', name: 'project1', apiKey: '123' },
          //     { id: 'anotherid', name: 'project2', apiKey: '456' },
          //   ],
          // },
          // Uncomment this to test without keys array
          // user: { user: '123456', pass: 'abc', apiKey: '123456' },
          defaults: [],
        }}
      />
    </div>
  );
}

Demo.propTypes = {
  docs: PropTypes.arrayOf(PropTypes.shape).isRequired,
  oas: PropTypes.shape({}).isRequired,
  oauth: PropTypes.bool,
  status: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Demo.defaultProps = {
  oauth: false,
};

module.exports = withSpecFetching(Demo);
