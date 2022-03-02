import { NextApiRequest, NextApiResponse } from 'next';

/**
 * API Handler for sign up
 * @param req request parameters
 * @param res response which returns token and email
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ token: '1234567890', email: 'piyush.kakadiya@primelab.io' });
};
