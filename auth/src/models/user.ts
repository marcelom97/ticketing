import mongoose from 'mongoose';

// An interface that describes the properties
// that aer erquired to create a new User
interface UserAttrs {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

// Function to create a new User
// because typecript and mongoose don't cooperate
const buildUser = (attrs: UserAttrs) => {
  return new User(attrs);
};

// new User({
//   email: 'test@test.com',
//   password: '123456'
// });

export { User };
