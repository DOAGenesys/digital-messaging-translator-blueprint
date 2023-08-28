export default {
    // Token Implicit Grant Client ID
    clientID: process.env.GC_CLIENT_ID,

    redirectUri: 'https://localhost/',

    genesysCloud: {
        // Genesys Cloud region
        // eg. 'mypurecloud.ie', 'euw2.pure.cloud', etc...
        region: process.env.GC_ENVIRONMENT
    },

    translateServiceURI: 'https://localhost/translate'
} 
