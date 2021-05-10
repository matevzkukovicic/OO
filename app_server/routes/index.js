//nalozimo module, ki jih uporabljamo v tej skripti
//rabimo express knjiznico, iz katere tut nalozimo  Router to je nek class, ki ga samo modificiramo na nacin, ki ga vidmo spodaj.
//Vbistvu mu samo dodamo path kam naj kaze, ko se klice get, post, delete...
//

var express = require('express');
var router = express.Router();

//nalozimo kontorlerje
const ctrlMain = require('../controllers/main');



/* GET home page. */
router.get('/', ctrlMain.loadingScreen);
router.get('/map', ctrlMain.index);
router.get('/map/:region', ctrlMain.index);
router.get('/drzave', ctrlMain.countries);


module.exports = router;