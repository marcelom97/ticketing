import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Sign Out'
  });
});

export { router as signoutRouter };
