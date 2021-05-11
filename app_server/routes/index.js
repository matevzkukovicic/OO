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
router.get('/eu', ctrlMain.eu);
router.get('/semafor', ctrlMain.semafor);
router.get('/statistika', ctrlMain.statistika);
router.get('/simptomi', ctrlMain.simptomi);
router.get('/zdravljenje', ctrlMain.zdravljenje);
router.get('/preprecevanje', ctrlMain.preprecevanje);
router.get('/novice', ctrlMain.novice);


module.exports = router;