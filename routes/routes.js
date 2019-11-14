const express = require('express');
const router = express.Router();

//const helloWorldController = require('../controller/helloWorldControler');
const watsonVisualRecongnitionController = require('../controllers/watsonVisualRecognitionController');
const watsonDiscoveryController = require('../controllers/watsonDiscoveryController');

//router.get('/helloworld', helloWorldController.helloWord);
router.post('/classify/image', watsonVisualRecongnitionController.classifyImage);
router.post('/search/discovery', watsonDiscoveryController.query);

router.post('/test/webhook/assistant',(req,res) =>{
    console.log(req.body);
    res.send({response: "hola webhook"});
});

module.exports = router;