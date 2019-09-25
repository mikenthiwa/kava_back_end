import express from 'express';
import { Authentication } from './authController';

const router = express.Router();

router.post(
  '/register',
  Authentication.register
);

router.post(
  '/login',
  Authentication.login
)

export default router;
