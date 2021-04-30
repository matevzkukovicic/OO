const index = (req, res) => {
    let fs = require('fs');
    let svgTemplate = fs.readFileSync('./public/images/slovenia.svg', 'utf8');
    
    let selectedRegion = req.params.region; 

    switch(selectedRegion) {
        case("obalno-kraska"): 
            console.log("KLIKNU SI NA OBALNO-KRAŠKO REGIJO");
    }

    res.render('home', { title: 'PandaMia', map: svgTemplate, regija: selectedRegion});
};

module.exports = {
    index
};