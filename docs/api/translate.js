const { Translate } = require('@aws-sdk/client-translate');
require('dotenv').config();

const translateService = new Translate({ 
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(); 
    }

    const body = req.body;
    const params = {
        Text: body.raw_text,
        SourceLanguageCode: body.source_language,
        TargetLanguageCode: body.target_language
    };

    try {
        const data = await translateService.translateText(params);
        let statusCode = data['$metadata'].httpStatusCode;
        let translatedText = data.TranslatedText;

        res.status(statusCode).json({ 
            source_language: data.SourceLanguageCode,
            translated_text: translatedText
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Translation error.' });
    }
}
