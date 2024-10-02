const express= require('express');

const router = express.Router();
const readhandlar = require("../controllers/readhandlar");


router.get('/read',readhandlar);

module.exports = router;