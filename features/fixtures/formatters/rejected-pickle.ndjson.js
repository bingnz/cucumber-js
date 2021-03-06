module.exports = [
  {
    type: 'source',
    uri: 'features/a.feature',
    data: 'Feature: a feature\n  Scenario: a scenario\n    Given a step',
    media: { encoding: 'utf-8', type: 'text/x.cucumber.gherkin+plain' },
  },
  {
    type: 'gherkin-document',
    uri: 'features/a.feature',
    document: {
      type: 'GherkinDocument',
      feature: {
        type: 'Feature',
        tags: [],
        location: { line: 1, column: 1 },
        language: 'en',
        keyword: 'Feature',
        name: 'a feature',
        children: [
          {
            type: 'Scenario',
            tags: [],
            location: { line: 2, column: 3 },
            keyword: 'Scenario',
            name: 'a scenario',
            steps: [
              {
                type: 'Step',
                location: { line: 3, column: 5 },
                keyword: 'Given ',
                text: 'a step',
              },
            ],
          },
        ],
      },
      comments: [],
    },
  },
  {
    type: 'pickle',
    uri: 'features/a.feature',
    pickle: {
      tags: [],
      name: 'a scenario',
      language: 'en',
      locations: [{ line: 2, column: 3 }],
      steps: [
        { text: 'a step', arguments: [], locations: [{ line: 3, column: 11 }] },
      ],
    },
  },
  {
    type: 'pickle-rejected',
    pickle: {
      tags: [],
      name: 'a scenario',
      language: 'en',
      locations: [{ line: 2, column: 3 }],
      steps: [
        { text: 'a step', arguments: [], locations: [{ line: 3, column: 11 }] },
      ],
    },
    uri: 'features/a.feature',
  },
  { type: 'test-run-started' },
  { type: 'test-run-finished', result: { duration: 0, success: true } },
]
