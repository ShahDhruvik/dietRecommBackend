import dotenv from 'dotenv';

dotenv.config();

export const { MONGO_URL, PORT, SALT_ROUNDS } = process.env;
