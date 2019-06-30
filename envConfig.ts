export const config = () => {
  return {
    dbUser: process.env.DB_USER || 'domino',
    dbPassword: process.env.DB_PASSWORD || '0eyC9nIxJmMkQIyD',
    dbUri: process.env.DB_URI || 'mongodb+srv://domino:0eyC9nIxJmMkQIyD@decart-accounting-kqmbh.mongodb.net/decart-accounting',
  };
};
