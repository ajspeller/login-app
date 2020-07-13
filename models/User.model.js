const mongoose = require('mongoose');
const { Schema } = mongoose;

const minlength = [
  3,
  'The value of path `{PATH} (`{VALUE}`) must be ({minlength}) or more characters',
];

const UserSchema = new Schema({
  username: {
    type: String,
    minlength: minlength,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    // required: true,
  },
});

module.exports = mongoose.model('Users', UserSchema);
