const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// Connect to MongoDB
 // Connect to the database
mongoose.connect('mongodb+srv://hira:HT1234@cluster0.pox2wdn.mongodb.net/Blog?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connected!');
});

// Define user schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Register endpoint
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create and sign a JWT token
    const token = jwt.sign({ userId: user._id }, 'your-secret-key');

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Profile update endpoint
app.put('/profile', async (req, res) => {
  const { token } = req.headers;
  const { email } = req.body;

  try {
    // Verify the JWT token
    const decodedToken = jwt.verify(token, 'your-secret-key');

    // Find the user by their ID from the token
    const user = await User.findById(decodedToken.userId);
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Update the user's email
    user.email = email;
    await user.save();

    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server listening on port 5000!');
});