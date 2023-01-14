Prism.languages.juncture = Prism.languages.extend('markdown', {

  'tag': [
    {
      pattern: /\.ve-[a-zA-Z-]+/
    },
  ],
  'manifest-url': [
    {
      pattern: /\s+[a-z]+:[a-z0-9-\/\.]+/i,
      inside: {
        'url': /\s+[a-z]+:[a-z0-9-\/\.]+/i,
        'punctuation': /\s+/
      }
    },
  ],
  'position': [
    {
      pattern: /(full|left|right|sticky)/,
      alias: 'class-name'
    },
  ],
  'attribute': [
    {
      pattern: /\s+[a-z-]+/,
      inside: {
        'string': /[a-z-]+/i,
        'punctuation': /\s+/
      }
    },
  ]

});