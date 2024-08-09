// pages/api/getFormStats.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { GetFormStats } from '../../actions/form';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // if (req.method === 'GET') {
    //     try {
    //         const stats = await GetFormStats();
    //         res.status(200).json(stats);
    //     } catch (error) {
    //         res.status(500).json({ error: error.message });
    //     }
    // } else {
    //     res.setHeader('Allow', ['GET']);
    //     res.status(405).end(`Method ${req.method} Not Allowed`);
    // }
}
