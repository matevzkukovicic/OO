const axios = require('axios').create({
  baseURL: "https://api.sledilnik.org/api/",
  timeout: 5000
});

const index = async(req, res) => {
    let fs = require('fs');
    let svgTemplate = fs.readFileSync('./public/images/slovenia.svg', 'utf8');
    
    let selectedRegion = req.params.region; 

    if(selectedRegion && selectedRegion !== "favicon.ico") {
    let covidStats; 
    
    const resp = await axios.get('regions');

    let numOfData = Object.keys(resp.data).length;
    let regionStats = resp.data[numOfData-1]; // we try to get region data from today if Slednik has been updated already and if not, we get yesterday's region data
    
    if(!regionStats.mb) {
      covidStats = resp.data[numOfData-2];
    } else {
      covidStats = regionStats; 
    }

    /* REGION STATS 
      mb: PODRAVSKA 
      nm: JUGOVZHODNA
      kp: OBALNO-KRAŠKA
      ce: SAVINJSKA
      kr: GORENJSKA
      kk: POSAVSKA
      sg: KOROŠKA
      ng: GORIŠKA
      lj: OSREDNJESLOVENSKA
      po: PRIMORSKO-NOTRANJSKA
      ms: POMURSKA
      za: ZASAVSKA
    */ 
  
    let regionKey; 
    switch(selectedRegion) {
      case("podravska"): 
        regionKey = covidStats.regions.mb; 
      case("jugovzhodna"): 
        regionKey = covidStats.regions.nm;   
      case("obalno-kraska"):
        regionKey = covidStats.regions.kp;
        console.log(regionKey);
        console.log(covidStats.regions.kp);
      case("savinjska"): 
        regionKey = covidStats.regions.ce; 
      case("gorenjska"): 
        regionKey = covidStats.regions.kr; 
      case("posavska"): 
        regionKey = covidStats.regions.kk; 
      case("koroska"): 
        regionKey = covidStats.regions.sg;
      case("goriska"): 
        regionKey = covidStats.regions.ng; 
      case("osrednjeslovenska"): 
        regionKey = covidStats.regions.lj; 
      case("notranjsko-kraska"): 
        regionKey = covidStats.regions.po;  
      case("pomurska"): 
        regionKey = covidStats.regions.ms; 
      case("zasavska"): 
        regionKey = covidStats.regions.za; 
          
    }

    console.log(regionKey);

    let activeCases = regionKey.activeCases; 
    let confirmedToDate = regionKey.confirmedToDate; 
    let deceasedToDate = regionKey.deceasedToDate;
    res.render('home', { title: 'PandaMia', map: svgTemplate, regionName: selectedRegion, activeCases:activeCases, confirmedToDate:confirmedToDate, deceasedToDate:deceasedToDate});
  } else {
    res.render('home', { title: 'PandaMia', map: svgTemplate});
    
  }
};

module.exports = {
    index
};