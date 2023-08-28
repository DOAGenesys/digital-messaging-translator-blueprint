//env vars
module.exports = (req, res) => {
    res.json({
        GCEnvironment: process.env.GC_ENVIRONMENT,
        GCClientId: process.env.GC_CLIENT_ID
    });
};
