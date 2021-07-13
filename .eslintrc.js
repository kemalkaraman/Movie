module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['sort-exports'],
  rules: {
    'sort-exports/sort-exports': ['error', {sortDir: 'asc', ignoreCase: true}],
  },
};
