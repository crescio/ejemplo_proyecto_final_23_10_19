const express = require('express');
const router = express.Router();

//const helloWorldController = require('../controller/helloWorldControler');
const watsonVisualRecongnitionController = require('../controllers/watsonVisualRecognitionController');
const watsonDiscoveryController = require('../controllers/watsonDiscoveryController');

//router.get('/helloworld', helloWorldController.helloWord);
router.post('/classify/image', watsonVisualRecongnitionController.classifyImage);
router.post('/search/discovery', watsonDiscoveryController.query);

router.post('/test/webhook/assistant',(req,res) =>{
    if(req.body.action === 'reservar_hotel'){
        let habitaciones = [11,23,54,32,26];
        res.send({
            success: true,
            mesage: 'habitacion reservada',
            date: req.body.date,
            habitacion: RadioNodeList(habitaciones)
        })
    }
    res.send({response: "hola webhook"});
});

module.exports = router;