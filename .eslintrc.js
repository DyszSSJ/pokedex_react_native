module.exports = {
  root: true,
  extends: '@react-native',

  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'eslint-disable-next-line react/react-in-jsx-scope': 'off',
  },
};
