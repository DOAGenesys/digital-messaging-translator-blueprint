require('dotenv').config();

export default function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    const config = {
        clientID: process.env.GC_CLIENT_ID || '',
        redirectUri: process.env.GC_REDIRECT_URI || '',
        genesysCloud: {
            region: process.env.GC_REGION || ''
        }
    };

    res.status(200).json(config);
}
