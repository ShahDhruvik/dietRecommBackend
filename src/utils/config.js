import dotenv from 'dotenv';

dotenv.config();

export const { MONGO_URL, PORT, SALT_ROUNDS, PRIVATE_KEY } = process.env;
