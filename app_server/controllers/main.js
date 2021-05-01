const axios = require('axios').create({
  baseURL: "https://api.sledilnik.org/api/",
  timeout: 5000
});

const index = async(req, res) => {
    let fs = require('fs');
    let svgTemplate = fs.readFileSync('./public/images/temp.svg', 'utf8');
    
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
    console.log("PODATKI:", covidStats.regions);
    console.log("SELECTED REGION: ", selectedRegion);
    if(selectedRegion === "podravska") {
      regionKey = covidStats.regions.mb; 
    } else if(selectedRegion === "jugovzhodna") {
      regionKey = covidStats.regions.nm;   
    } else if(selectedRegion === "obalno-kraska") {
      regionKey = covidStats.regions.kp;
    } else if(selectedRegion === "savinjska") {
      regionKey = covidStats.regions.ce; 
    } else if(selectedRegion === "gorenjska") {
      regionKey = covidStats.regions.kr; 
    } else if(selectedRegion === "spodnjeposavska") {
      regionKey = covidStats.regions.kk; 
    } else if(selectedRegion === "koroska") {
      regionKey = covidStats.regions.sg;
    } else if(selectedRegion === "goriska") {
      regionKey = covidStats.regions.ng; 
    } else if(selectedRegion === "osrednjeslovenska") {
      regionKey = covidStats.regions.lj;
    } else if(selectedRegion === "notranjsko-kraska") {
      regionKey = covidStats.regions.po;  
    } else if(selectedRegion === "pomurska") {
        console.log("koji kurac");
        regionKey = covidStats.regions.ms; 
      } else if(selectedRegion === "zasavska") {
        console.log("a tuki tud al kaj");
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