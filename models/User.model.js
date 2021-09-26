const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  email: {
    type: String,
    // unique: true -> Ideally, should be unique, but its up to you
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ['admin', 'user', 'agent'],
    default: 'user',
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  properties: [{
      type: Schema.Types.ObjectId, ref: 'Property'
  }],
},
{
    timestamps: true
}
);

const User = model("User", userSchema);

module.exports = User;
