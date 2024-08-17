require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});


const userSchema=new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const Usermodel = mongoose.model('User', userSchema);

const createUser = async () => {
  const user = new Usermodel({ username:"HaMiit",
  password:"asdafdfasf",
  firstName:"Tyioper",
  lastName:"Umar"
   });
  await user.save();
  console.log('User saved:', user);
};

createUser();
module.exports = {
	Usermodel
};