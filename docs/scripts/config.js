export default {
    // Token Implicit Grant Client ID
    clientID: window.GCClientId,

    redirectUri: 'https://localhost/',

    genesysCloud: {
        // Genesys Cloud region
        // eg. 'mypurecloud.ie', 'euw2.pure.cloud', etc...
        region: window.GCEnvironment
    },

    translateServiceURI: 'https://localhost/translate'
} 
