import mongoose from 'mongoose';

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
