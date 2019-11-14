const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const discovery = new DiscoveryV1({
    version: '2019-04-30',
    authenticator: new IamAuthenticator({
        apikey: '5ooUHogDLHWlOTRuXL66jAeJCgfx8xhyw-2IWyjXjK7L',
    }),
    url: 'https://gateway.watsonplatform.net/discovery/api',
});
let query = async (req, res) => {
    if (req.body.text) {
        const queryParams = {
            environmentId: '5bd97842-e48b-4fa9-a7e1-19732859b927',
            collectionId: '69924818-4d02-4870-85dc-b9a1a4ab7484',
            naturalLanguageQuery: req.body.text
        };
        try {
            let responseDiscovery = await discovery.query(queryParams);
            console.log(responseDiscovery);
            res.send(responseDiscovery.result);
        } catch (error) {
            console.log(`Error: ${error}`);
            res.send(error);
        }
    }
    else {
        res.status(400).send({ error: true, message: `Propiedad 'text' no encontrada.` });
    }
}
module.exports = {
    query
}