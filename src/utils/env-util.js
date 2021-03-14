// eslint-disable-next-line import/prefer-default-export
export const getRootPath = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://whiner.github.io';
  }

  return 'http://localhost:8080';
};
