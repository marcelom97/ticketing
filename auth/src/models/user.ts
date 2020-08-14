import mongoose from 'mongoose';
import { Password } from '../services/password';

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

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

// An interface that describes the properties
// that aer erquired to create a new User
interface UserAttrs {
  email: string;
  password: string;
}

// An interface that describes the properties
// that  User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties
// that  User Document has
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

// Function to create a new User
// because typecript and mongoose don't cooperate
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

const user = User.build({
  email: 'test@test.com',
  password: '123456'
});

export { User };
