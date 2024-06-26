export default [
  {
    rules: {
      'semi': ['error', 'never'],
      'prefer-const': [
        'warn',
        {
          'destructuring': 'any',
          'ignoreReadBeforeAssign': false
        }
      ],
      'getter-return': ['error'],
      'no-async-promise-executor': ['warn'],
      'no-cond-assign': ['warn', 'except-parens'],
      'no-dupe-keys': ['error'],
      'no-empty': ['warn'],
      'no-ex-assign': ['error'],
      'no-extra-boolean-cast': [
        'error',
        {
          'enforceForLogicalOperands': true
        }
      ],
      'no-extra-parens': ['warn', 'all'],
      'no-func-assign': ['error'],
      'no-import-assign': ['error'],
      'no-inner-declarations': ['error', 'both'],
      'no-obj-calls': ['error'],
      'no-promise-executor-return': ['error'],
      'no-sparse-arrays': ['error'],
      'no-template-curly-in-string': ['error'],
      'no-unreachable': ['error'],
      'no-unreachable-loop': ['error'],
      'no-unsafe-optional-chaining': ['error'],
      'require-atomic-updates': ['error'],
      'use-isnan': ['error'],
      'block-scoped-var': ['error'],
      'consistent-return': ['error'],
      'default-param-last': ['warn'],
      'no-alert': ['error'],
      'no-caller': ['error'],
      'no-constructor-return': ['error'],
      'no-global-assign': ['error'],
      'no-lone-blocks': ['warn'],
      'no-multi-spaces': ['warn'],
      'no-new': ['warn'],
      'no-param-reassign': ['error'],
      'no-proto': ['warn'],
      'no-redeclare': ['error'],
      'no-return-assign': ['error'],
      'no-return-await': ['warn'],
      'no-self-assign': ['error'],
      'no-sequences': ['warn'],
      'no-useless-catch': ['warn'],
      'no-useless-return': ['error'],
      'no-void': ['error'],
      'no-with': ['error'],
      'no-undef': ['off'],
      'quotes':['error', 'single'],
    },
  }
]