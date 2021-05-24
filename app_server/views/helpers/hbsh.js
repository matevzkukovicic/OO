const hbs = require('hbs');

hbs.registerHelper('colorRegions', (regions) => {
    let jvslo=document.getElementById("jugovzhodna_slovenija")
    console.log(jvslo)
    if(regions.jugovzhodna.skupina=="4 - crna"){

    }
});

hbs.registerHelper('percentColor', (percent) => {
    if(percent >0)
        return '#E66C58'
    else
        return '#AFEFD8'
});