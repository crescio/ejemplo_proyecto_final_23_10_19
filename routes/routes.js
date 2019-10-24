const express = require('express');
const router = express.Router();

router.get('/', (Request, Response) => {
    Response.send("Hello World !!!");
})

module.exports = router;