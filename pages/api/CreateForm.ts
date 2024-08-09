// pages/api/createForm.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { CreateForm } from '../../actions/form';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // try {
        //     const formData = req.body;
        //     const formId = await CreateForm(formData);
        //     res.status(200).json({ formId });
        // } catch (error) {
        //     console.error(error);
        //     //res.status(500).json({ error: error.message });
        // }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
