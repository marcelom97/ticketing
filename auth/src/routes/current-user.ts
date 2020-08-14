import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Hello there'
  });
});

export { router as currentUserRouter };
