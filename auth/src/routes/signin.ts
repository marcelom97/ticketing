import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Sign In'
  });
});

export { router as signinRouter };
