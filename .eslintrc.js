module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended', '@vue/prettier', 'plugin:vue/recommended'],
  plugins: ['vue', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        useTabs: false,
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        semi: false,
        arrowParens: 'always'
      }
    ],
    // NOTE: _Vue 是 vue 注冊方法的用法，state 是 vuex 改變 state 資料的方法
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['_Vue', 'state', 'item'] }]
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017
  }
}
