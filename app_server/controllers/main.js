var uporabnik = require("../models/uporabnik.json")
var objave = require("../Models/objave.json")
var slikeZivali = require("../Models/slikeZivali.json")


//ker mora bit uporabnik povezan z objavo, ga povezem tukaj (zaenkrat, to bo v bazi itak ze povezano)
uporabnik.objave = objave;
uporabnik.objave[0].slika = slikeZivali[0];
uporabnik.objave[1].slika = slikeZivali[1];


const index = (req, res) => {
    res.render('home', { title: 'PET BUDDY' });
};

const prijava = (req, res) => {
    res.render('profil', {
        title: 'PET BUDDY',
        customValue2: 'Jaz sem value od  customValue2',
        user: uporabnik
    });
};

module.exports = {
    index,
    prijava
};