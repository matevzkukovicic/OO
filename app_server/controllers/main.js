const axios = require('axios').create({
  baseURL: "https://api.sledilnik.org/api/",
  timeout: 5000
});
const jsdom = require("jsdom")
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const index = async(req, res) => {
    let fs = require('fs');
    let svgTemplate = fs.readFileSync('./public/images/temp.svg', 'utf8');
    getRegijeData()
    
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


function getRegijeData() {
    var url = "https://www.gov.si/zbirke/seznami/ukrepi-za-zajezitev-sirjenja-covid-19-po-regijah/"
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            const arr = new jsdom.JSDOM(this.responseText)
            console.log("halo?!?!?")
            //console.log(arr.window.document.querySelector("table").tBodies[0].rows[0].cells[4].children[0].children[0].innerHTML.trim().replace("<br>",""))
            regije.gorenjska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[0].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[0].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[0].cells[2].children[0].children[0].innerHTML.trim(),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[0].cells[3].children[0].children[0].innerHTML.trim().replace("<br>",""),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[0].cells[4].children[0].children[0].innerHTML.trim().replace("<br>",""),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[0].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","")
            }
            //console.log(regije.gorenjska.ime, "\n", regije.gorenjska.skupina, "\n", regije.gorenjska.soleInFakultete, "\n", regije.gorenjska.omejitevGibanja, "\n", regije.gorenjska.omejitveZbiranja, "\n", regije.gorenjska.strezbaHraneInPijace)
            regije.goriska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[1].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[1].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[1].cells[2].children[0].children[0].innerHTML.trim(),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[1].cells[3].children[0].children[0].innerHTML.trim().replace("<br>",""),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[1].cells[4].children[0].children[0].innerHTML.trim().replace("<br>",""),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[1].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","")
            }
            //console.log(regije.goriska.ime, "\n", regije.goriska.skupina, "\n", regije.goriska.soleInFakultete, "\n", regije.goriska.omejitevGibanja, "\n", regije.goriska.omejitveZbiranja, "\n", regije.goriska.strezbaHraneInPijace)
            regije.jugovzhodna = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[2].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[2].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[2].cells[2].children[0].children[0].innerHTML.trim(),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[2].cells[3].children[0].children[0].innerHTML.trim().replace("<br>",""),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[2].cells[4].children[0].children[0].innerHTML.trim().replace("<br>",""),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[2].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","")
            }

            regije.koroska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[3].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[3].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[3].cells[2].children[0].children[0].innerHTML.trim(),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[3].cells[3].children[0].children[0].innerHTML.trim().replace("<br>",""),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[3].cells[4].children[0].children[0].innerHTML.trim().replace("<br>",""),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[3].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","")
            }

            regije.obalno_kraska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[4].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[4].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[4].cells[2].children[0].children[0].innerHTML.trim(),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[4].cells[3].children[0].children[0].innerHTML.trim().replace("<br>",""),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[4].cells[4].children[0].children[0].innerHTML.trim().replace("<br>",""),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[4].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","")
            }

            regije.osrednjeslovenska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[5].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[5].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[5].cells[2].children[0].children[0].innerHTML.trim(),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[5].cells[3].children[0].children[0].innerHTML.trim().replace("<br>",""),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[5].cells[4].children[0].children[0].innerHTML.trim().replace("<br>",""),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[5].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","")
            }

            regije.podravska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[6].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[6].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[6].cells[2].children[0].children[0].innerHTML.trim(),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[6].cells[3].children[0].children[0].innerHTML.trim().replace("<br>",""),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[6].cells[4].children[0].children[0].innerHTML.trim().replace("<br>",""),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[6].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","")
            }

            regije.pomurska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[7].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[7].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[7].cells[2].children[0].children[0].innerHTML.trim(),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[7].cells[3].children[0].children[0].innerHTML.trim().replace("<br>",""),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[7].cells[4].children[0].children[0].innerHTML.trim().replace("<br>",""),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[7].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","")
            }

            regije.posavska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[8].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[8].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[8].cells[2].children[0].children[0].innerHTML.trim(),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[8].cells[3].children[0].children[0].innerHTML.trim().replace("<br>",""),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[8].cells[4].children[0].children[0].innerHTML.trim().replace("<br>",""),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[8].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","")
            }

            regije.primorsko_notranjska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[9].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[9].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[9].cells[2].children[0].children[0].innerHTML.trim(),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[9].cells[3].children[0].children[0].innerHTML.trim().replace("<br>",""),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[9].cells[4].children[0].children[0].innerHTML.trim().replace("<br>",""),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[9].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","")
            }

            regije.savinjska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[10].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[10].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[10].cells[2].children[0].children[0].innerHTML.trim(),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[10].cells[3].children[0].children[0].innerHTML.trim().replace("<br>",""),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[10].cells[4].children[0].children[0].innerHTML.trim().replace("<br>",""),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[10].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","")
            }

            regije.zasavska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[11].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[11].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[11].cells[2].children[0].children[0].innerHTML.trim(),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[11].cells[3].children[0].children[0].innerHTML.trim().replace("<br>",""),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[11].cells[4].children[0].children[0].innerHTML.trim().replace("<br>",""),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[11].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","")
            }
        }
        /*
        for(let i in regije){
            console.log(`${i}: ${regije[i].ime}`)
        }
        console.log("idegas")*/
    }
    xmlhttp.open("GET", url, true)
    xmlhttp.send()
    //console.log(regije.zasavska.ime)

}

class regija {
    constructor(ime,skupina, soleInFakultete, omejitevGibanja, omejitveZbiranja,strezbaHraneInPijace) {
        this.ime = ime
        this.skupina = skupina
        this.soleInFakultete = soleInFakultete
        this.omejitevGibanja = omejitevGibanja
        this.omejitveZbiranja = omejitveZbiranja
        this.strezbaHraneInPijace = strezbaHraneInPijace
    }
}
var regije = {
    gorenjska: new regija(),
    goriska: new regija(),
    jugovzhodna: new regija(),
    koroska: new regija(),
    obalno_kraska: new regija(),
    osrednjeslovenska: new regija(),
    podravska: new regija(),
    pomurska: new regija(),
    posavska: new regija(),
    primorsko_notranjska: new regija(),
    savinjska: new regija(),
    zasavska: new regija()
}

module.exports = {
    index
};
