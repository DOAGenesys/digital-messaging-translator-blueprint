require('dotenv').config();

export default function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    const config = {
        clientID: process.env.CLIENT_ID || '',
        redirectUri: process.env.REDIRECT_URI || '',
        genesysCloud: {
            region: process.env.GENESYS_CLOUD_REGION || ''
        }
    };

    res.status(200).json(config);
}
