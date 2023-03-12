import bcrypt from 'bcrypt';

const comparePassword = async (pass, hashedPass) => {
  try {
    if (pass && hashedPass) {
      const compare = await bcrypt.compare(pass, hashedPass);
      return compare;
    }
  } catch (error) {
    return null;
  }
};

export default comparePassword;
