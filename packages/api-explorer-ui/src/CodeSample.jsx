const React = require('react');
const PropTypes = require('prop-types');
const extensions = require('../../readme-oas-extensions');
const Oas = require('./lib/Oas');

const { Operation } = Oas;

const generateCodeSnippets = require('./lib/generate-code-snippets');

function CodeSample({ oas, setLanguage, operation, formData }) {
  return (
    <div className="code-sample tabber-parent">
      {(() => {
        if (oas[extensions.SAMPLES_ENABLED]) {
          return (
            <ul className="code-sample-tabs">
              {
                // TODO add `is-lang-${lang}` class, to body?
                oas[extensions.SAMPLES_LANGUAGES].map(lang =>
                  (
                    <li key={lang}>
                      <a
                        role="link"
                        href="#"
                        className={`hub-lang-switch-${lang}`}
                        onClick={(e) => { e.preventDefault(); setLanguage(lang); }}
                      >{lang}</a>
                    </li>
                  ),
                )
              }
            </ul>
          );
        }

        return <div className="hub-no-code">No code samples available</div>;
      })()}

      {(() => {
        if (!oas[extensions.SAMPLES_ENABLED]) return null;

        const snippets = generateCodeSnippets(oas, operation, formData, oas[extensions.SAMPLES_LANGUAGES]);

        return (
          <div className="hub-code-auto">
            {
              Object.keys(snippets).map(lang => (
                <pre
                  key={lang}
                  className={`tomorrow-night hub-lang hub-lang-${lang}`}
                  dangerouslySetInnerHTML={{ __html: snippets[lang] }}
                />
              ))
            }
          </div>
        );
      })()}

    </div>
  );
}

CodeSample.propTypes = {
  oas: PropTypes.instanceOf(Oas).isRequired,
  setLanguage: PropTypes.func.isRequired,
  operation: PropTypes.instanceOf(Operation).isRequired,
  formData: PropTypes.shape({}).isRequired,
};

module.exports = CodeSample;