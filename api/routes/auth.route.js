// import express from 'express';
// import { google, signin, signup } from '../controllers/auth.controller.js';

// const router = express.Router();


// router.post('/signup', signup);
// router.post('/signin', signin);
// router.post('/google', google)

// export default router;
// routes/auth.route.js
import express from 'express';
import { verifyGoogleToken }  from '../google.Auth.js';

const router = express.Router();

router.post('/google/login', async (req, res) => {
  const { idToken } = req.body;

  try {
    const userData = await verifyGoogleToken(idToken);
    // Handle user data (e.g., create or find user in DB, generate JWT)
    res.status(200).json({ message: 'User authenticated', userData });
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
});

export default router;
