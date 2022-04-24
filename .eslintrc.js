//.eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended' // Make sure "prettier" is the last element in this list.
  ],

  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': [0], //	不强制要求命名使用多字
    'vue/no-multiple-template-root': 0, // 不要求用根标签
    'vue/component-definition-name-casing': ['error', 'kebab-case'] //	组件命名必须使用连字符连接的多字命名
  }
}
