const axios = require('axios').create({
  baseURL: "https://api.sledilnik.org/api/",
  timeout: 5000
});
const jsdom = require("jsdom")
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


const loadingScreen = (req, res) => {
  res.render('loadingScreen', {layout: false});
};

const index = async(req, res) => {
    let fs = require('fs');
    getRegijeDataNew()
    res.render('home', { title: 'PandaMia', regions:regije});
    /*
    let selectedRegion = req.params.region; 
    if(selectedRegion && selectedRegion !== "favicon.ico") {
      
      const resp = await axios.get('regions');
      let numOfData = Object.keys(resp.data).length;
      let regionStats = resp.data[numOfData-1]; // we try to get region data from today if Slednik has been updated already and if not, we get yesterday's region data
      
      let covidStats; 
      if(!regionStats.mb) {
        covidStats = resp.data[numOfData-2];
      } else {
        covidStats = regionStats; 
      }*/

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
    /*
      let regionKey; 
      let region; 
      if(selectedRegion === "podravska") {
        regionKey = covidStats.regions.mb; 
        region = regije.podravska;
      } else if(selectedRegion === "jugovzhodna") {
        regionKey = covidStats.regions.nm;   
        region = regije.jugovzhodna;
      } else if(selectedRegion === "obalno-kraska") {
        regionKey = covidStats.regions.kp;
        region = regije.obalno_kraska;
      } else if(selectedRegion === "savinjska") {
        regionKey = covidStats.regions.ce; 
        region = regije.savinjska;
      } else if(selectedRegion === "gorenjska") {
        regionKey = covidStats.regions.kr; 
        region = regije.gorenjska;
      } else if(selectedRegion === "spodnjeposavska") {
        regionKey = covidStats.regions.kk; 
        region = regije.posavska;
      } else if(selectedRegion === "koroska") {
        regionKey = covidStats.regions.sg;
        region = regije.koroska;
      } else if(selectedRegion === "goriska") {
        regionKey = covidStats.regions.ng; 
        region = regije.goriska;
      } else if(selectedRegion === "osrednjeslovenska") {
        regionKey = covidStats.regions.lj;
        region = regije.osrednjeslovenska;
      } else if(selectedRegion === "notranjsko-kraska") {
        regionKey = covidStats.regions.po;  
        region = regije.primorsko_notranjska;
      } else if(selectedRegion === "pomurska") {
        regionKey = covidStats.regions.ms; 
        region = regije.pomurska;
      } else if(selectedRegion === "zasavska") {
        regionKey = covidStats.regions.za; 
        region = regije.zasavska;
      }

      region.activeCases = regionKey.activeCases; 
      region.confirmedToDate = regionKey.confirmedToDate; 
      region.deceasedToDate = regionKey.deceasedToDate;

      console.log(region);
      res.render('home', { title: 'PandaMia', region:region});
    } else {
      res.render('home', { title: 'PandaMia', region:region});
    }*/
};

function getRegijeDataNew() {
    var url = "https://api.sledilnik.org/api/regions"
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            const arr = JSON.parse(this.responseText)
            //jugovzhodna
            let sum = 0
            for(let i=arr.length-1; i>arr.length-8; i--){
                sum = sum + (arr[i].regions.nm.confirmedToDate - arr[i-1].regions.nm.confirmedToDate)
            }
            regije.jugovzhodna = {
                ime:"Jugovzhodna Slovenija",
                skupina: getRegijaSkupina(sum/7, 144688),
                soleInFakultete:"Izvaja se pouk na osnovnih in srednjih šolah. Izvaja se pouk na fakultetah.",
                omejitevGibanja: "Ni omejitev gibanja.",
                omejitveZbiranja: "Dovoljeno zbiranje do 10 oseb.",
                strezbaHraneInPijace: "Odprte so terase in vrtovi, notranjost gostinskih lokalov za prebolevnike, cepljene ali testirane. Nastanitveni obrati do 50% zasedenosti. "
            }
            //podravska
            sum = 0
            for(let i=arr.length-1; i>arr.length-8; i--){
                sum = sum + (arr[i].regions.mb.confirmedToDate - arr[i-1].regions.mb.confirmedToDate)
            }
            regije.podravska = {
                ime:"Podravska regija",
                skupina: getRegijaSkupina(sum/7, 324875),
                soleInFakultete:"Izvaja se pouk na osnovnih in srednjih šolah. Izvaja se pouk na fakultetah.",
                omejitevGibanja: "Ni omejitev gibanja.",
                omejitveZbiranja: "Dovoljeno zbiranje do 10 oseb.",
                strezbaHraneInPijace: "Odprte so terase in vrtovi, notranjost gostinskih lokalov za prebolevnike, cepljene ali testirane. Nastanitveni obrati do 50% zasedenosti. "
            }
            //obalnokraska
            sum = 0
            for(let i=arr.length-1; i>arr.length-8; i--){
                sum = sum + (arr[i].regions.kp.confirmedToDate - arr[i-1].regions.kp.confirmedToDate)
            }
            regije.obalno_kraska = {
                ime:"Obalno-Kraška regija",
                skupina: getRegijaSkupina(sum/7, 115613),
                soleInFakultete:"Izvaja se pouk na osnovnih in srednjih šolah. Izvaja se pouk na fakultetah.",
                omejitevGibanja: "Ni omejitev gibanja.",
                omejitveZbiranja: "Dovoljeno zbiranje do 10 oseb.",
                strezbaHraneInPijace: "Odprte so terase in vrtovi, notranjost gostinskih lokalov za prebolevnike, cepljene ali testirane. Nastanitveni obrati do 50% zasedenosti. "
            }
            //savinjska
            sum = 0
            for(let i=arr.length-1; i>arr.length-8; i--){
                sum = sum + (arr[i].regions.ce.confirmedToDate - arr[i-1].regions.ce.confirmedToDate)
            }
            regije.savinjska = {
                ime:"Savinjska regija",
                skupina: getRegijaSkupina(sum/7,257425),
                soleInFakultete:"Izvaja se pouk na osnovnih in srednjih šolah. Izvaja se pouk na fakultetah.",
                omejitevGibanja: "Ni omejitev gibanja.",
                omejitveZbiranja: "Dovoljeno zbiranje do 10 oseb.",
                strezbaHraneInPijace: "Odprte so terase in vrtovi, notranjost gostinskih lokalov za prebolevnike, cepljene ali testirane. Nastanitveni obrati do 50% zasedenosti. "
            }
            //gorenjska
            sum = 0
            for(let i=arr.length-1; i>arr.length-8; i--){
                sum = sum + (arr[i].regions.kr.confirmedToDate - arr[i-1].regions.kr.confirmedToDate)
            }
            regije.gorenjska = {
                ime:"Gorenjska regija",
                skupina: getRegijaSkupina(sum/7,205717),
                soleInFakultete:"Izvaja se pouk na osnovnih in srednjih šolah. Izvaja se pouk na fakultetah.",
                omejitevGibanja: "Ni omejitev gibanja.",
                omejitveZbiranja: "Dovoljeno zbiranje do 10 oseb.",
                strezbaHraneInPijace: "Odprte so terase in vrtovi, notranjost gostinskih lokalov za prebolevnike, cepljene ali testirane. Nastanitveni obrati do 50% zasedenosti. "
            }
            //posavska
            sum = 0
            for(let i=arr.length-1; i>arr.length-8; i--){
                sum = sum + (arr[i].regions.kk.confirmedToDate - arr[i-1].regions.kk.confirmedToDate)
            }
            regije.posavska = {
                ime:"Posavska regija",
                skupina: getRegijaSkupina(sum/7,75807),
                soleInFakultete:"Izvaja se pouk na osnovnih in srednjih šolah. Izvaja se pouk na fakultetah.",
                omejitevGibanja: "Ni omejitev gibanja.",
                omejitveZbiranja: "Dovoljeno zbiranje do 10 oseb.",
                strezbaHraneInPijace: "Odprte so terase in vrtovi, notranjost gostinskih lokalov za prebolevnike, cepljene ali testirane. Nastanitveni obrati do 50% zasedenosti. "
            }
            //koroska
            sum = 0
            for(let i=arr.length-1; i>arr.length-8; i--){
                sum = sum + (arr[i].regions.sg.confirmedToDate - arr[i-1].regions.sg.confirmedToDate)
            }
            regije.koroska = {
                ime:"Koroška regija",
                skupina: getRegijaSkupina(sum/7,70683),
                soleInFakultete:"Izvaja se pouk na osnovnih in srednjih šolah. Izvaja se pouk na fakultetah.",
                omejitevGibanja: "Ni omejitev gibanja.",
                omejitveZbiranja: "Dovoljeno zbiranje do 10 oseb.",
                strezbaHraneInPijace: "Odprte so terase in vrtovi, notranjost gostinskih lokalov za prebolevnike, cepljene ali testirane. Nastanitveni obrati do 50% zasedenosti. "
            }
            //goriska
            sum = 0
            for(let i=arr.length-1; i>arr.length-8; i--){
                sum = sum + (arr[i].regions.ng.confirmedToDate - arr[i-1].regions.ng.confirmedToDate)
            }
            regije.goriska = {
                ime:"Goriška regija",
                skupina: getRegijaSkupina(sum/7,118008),
                soleInFakultete:"Izvaja se pouk na osnovnih in srednjih šolah. Izvaja se pouk na fakultetah.",
                omejitevGibanja: "Ni omejitev gibanja.",
                omejitveZbiranja: "Dovoljeno zbiranje do 10 oseb.",
                strezbaHraneInPijace: "Odprte so terase in vrtovi, notranjost gostinskih lokalov za prebolevnike, cepljene ali testirane. Nastanitveni obrati do 50% zasedenosti. "
            }
            //osrednjeslovenska
            sum = 0
            for(let i=arr.length-1; i>arr.length-8; i--){
                sum = sum + (arr[i].regions.lj.confirmedToDate - arr[i-1].regions.lj.confirmedToDate)
            }
            regije.osrednjeslovenska = {
                ime:"Osrednjeslovenska regija",
                skupina: getRegijaSkupina(sum/7,552221),
                soleInFakultete:"Izvaja se pouk na osnovnih in srednjih šolah. Izvaja se pouk na fakultetah.",
                omejitevGibanja: "Ni omejitev gibanja.",
                omejitveZbiranja: "Dovoljeno zbiranje do 10 oseb.",
                strezbaHraneInPijace: "Odprte so terase in vrtovi, notranjost gostinskih lokalov za prebolevnike, cepljene ali testirane. Nastanitveni obrati do 50% zasedenosti. "
            }
            //pomurska
            sum = 0
            for(let i=arr.length-1; i>arr.length-8; i--){
                sum = sum + (arr[i].regions.ms.confirmedToDate - arr[i-1].regions.ms.confirmedToDate)
            }
            regije.pomurska = {
                ime:"Pomurska regija",
                skupina: getRegijaSkupina(sum/7,114396),
                soleInFakultete:"Izvaja se pouk na osnovnih in srednjih šolah. Izvaja se pouk na fakultetah.",
                omejitevGibanja: "Ni omejitev gibanja.",
                omejitveZbiranja: "Dovoljeno zbiranje do 10 oseb.",
                strezbaHraneInPijace: "Odprte so terase in vrtovi, notranjost gostinskih lokalov za prebolevnike, cepljene ali testirane. Nastanitveni obrati do 50% zasedenosti. "
            }
            //zasavska
            sum = 0
            for(let i=arr.length-1; i>arr.length-8; i--){
                sum = sum + (arr[i].regions.za.confirmedToDate - arr[i-1].regions.za.confirmedToDate)
            }
            regije.zasavska = {
                ime:"Zasavska regija",
                skupina: getRegijaSkupina(sum/7,57059),
                soleInFakultete:"Izvaja se pouk na osnovnih in srednjih šolah. Izvaja se pouk na fakultetah.",
                omejitevGibanja: "Ni omejitev gibanja.",
                omejitveZbiranja: "Dovoljeno zbiranje do 10 oseb.",
                strezbaHraneInPijace: "Odprte so terase in vrtovi, notranjost gostinskih lokalov za prebolevnike, cepljene ali testirane. Nastanitveni obrati do 50% zasedenosti. "
            }
            //primorsko-notranjska
            sum = 0
            for(let i=arr.length-1; i>arr.length-8; i--){
                sum = sum + (arr[i].regions.po.confirmedToDate - arr[i-1].regions.po.confirmedToDate)
            }
            regije.primorsko_notranjska = {
                ime:"Primorsko-Notranjska regija",
                skupina: getRegijaSkupina(sum/7,52818),
                soleInFakultete:"Izvaja se pouk na osnovnih in srednjih šolah. Izvaja se pouk na fakultetah.",
                omejitevGibanja: "Ni omejitev gibanja.",
                omejitveZbiranja: "Dovoljeno zbiranje do 10 oseb.",
                strezbaHraneInPijace: "Odprte so terase in vrtovi, notranjost gostinskih lokalov za prebolevnike, cepljene ali testirane. Nastanitveni obrati do 50% zasedenosti. "
            }
        }
    }
    xmlhttp.open("GET", url, false)
    xmlhttp.send()
}

function getRegijaSkupina(povprecje, prebivalstvo) {
    let primeriNa100K = povprecje * (100000/prebivalstvo)
    if(primeriNa100K>64.3){
        return "1 - črna"
    }else if(primeriNa100K>47.6){
        return "2 - rdeča"
    }else if(primeriNa100K>28.6){
        return "3 - oranžna"
    }else if(primeriNa100K>14.3){
        return "4 - rumena"
    }else
        return "5 - zelena"
}

function getRegijeData() {
    var url = "https://www.gov.si/zbirke/seznami/ukrepi-za-zajezitev-sirjenja-covid-19-po-regijah/"
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            const arr = new jsdom.JSDOM(this.responseText)            
            //console.log(arr.window.document.querySelector("table").tBodies[0].rows[0].cells[4].children[0].children[0].innerHTML.trim().replace("<br>",""))
            regije.gorenjska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[0].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[0].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[0].cells[2].children[0].children[0].innerHTML.trim().replace("\n", " "),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[0].cells[3].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[0].cells[4].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[0].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " ")
            }
            //console.log(regije.gorenjska.ime, "\n", regije.gorenjska.skupina, "\n", regije.gorenjska.soleInFakultete, "\n", regije.gorenjska.omejitevGibanja, "\n", regije.gorenjska.omejitveZbiranja, "\n", regije.gorenjska.strezbaHraneInPijace)
            regije.goriska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[1].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[1].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[1].cells[2].children[0].children[0].innerHTML.trim().replace("\n", " "),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[1].cells[3].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[1].cells[4].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[1].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " ")
            }

            //console.log(regije.goriska.ime, "\n", regije.goriska.skupina, "\n", regije.goriska.soleInFakultete, "\n", regije.goriska.omejitevGibanja, "\n", regije.goriska.omejitveZbiranja, "\n", regije.goriska.strezbaHraneInPijace)
            regije.jugovzhodna = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[2].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[2].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[2].cells[2].children[0].children[0].innerHTML.trim().replace("\n", " "),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[2].cells[3].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[2].cells[4].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[2].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " ")
            }

            regije.koroska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[3].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[3].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[3].cells[2].children[0].children[0].innerHTML.trim().replace("\n", " "),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[3].cells[3].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[3].cells[4].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[3].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " ")
            }

            regije.obalno_kraska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[4].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[4].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[4].cells[2].children[0].children[0].innerHTML.trim().replace("\n", " "),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[4].cells[3].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[4].cells[4].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[4].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " ")
            }

            regije.osrednjeslovenska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[5].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[5].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[5].cells[2].children[0].children[0].innerHTML.trim().replace("\n", " "),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[5].cells[3].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[5].cells[4].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[5].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " ")
            }

            regije.podravska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[6].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[6].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[6].cells[2].children[0].children[0].innerHTML.trim().replace("\n", " "),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[6].cells[3].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[6].cells[4].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[6].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " ")
            }

            regije.pomurska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[7].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[7].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[7].cells[2].children[0].children[0].innerHTML.trim().replace("\n", " "),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[7].cells[3].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[7].cells[4].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[7].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " ")
            }

            regije.posavska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[8].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[8].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[8].cells[2].children[0].children[0].innerHTML.trim().replace("\n", " "),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[8].cells[3].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[8].cells[4].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[8].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " ")
            }

            regije.primorsko_notranjska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[9].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[9].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[9].cells[2].children[0].children[0].innerHTML.trim().replace("\n", " "),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[9].cells[3].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[9].cells[4].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[9].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " ")
            }

            regije.savinjska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[10].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[10].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[10].cells[2].children[0].children[0].innerHTML.trim().replace("\n", " "),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[10].cells[3].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[10].cells[4].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[10].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " ")
            }

            regije.zasavska = {
                ime:arr.window.document.querySelector("table").tBodies[0].rows[11].cells[0].children[0].children[0].innerHTML.trim(),
                skupina: arr.window.document.querySelector("table").tBodies[0].rows[11].cells[1].children[0].innerHTML.trim(),
                soleInFakultete:arr.window.document.querySelector("table").tBodies[0].rows[11].cells[2].children[0].children[0].innerHTML.trim().replace("\n", " "),
                omejitevGibanja: arr.window.document.querySelector("table").tBodies[0].rows[11].cells[3].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                omejitveZbiranja: arr.window.document.querySelector("table").tBodies[0].rows[11].cells[4].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " "),
                strezbaHraneInPijace: arr.window.document.querySelector("table").tBodies[0].rows[11].cells[5].children[0].children[0].innerHTML.trim().replace("<br>","").replace("\n", " ")
            }
        }
        /*
        for(let i in regije){
            console.log(`${i}: ${regije[i].ime}`)
        }
        console.log("idegas")*/
    }
    xmlhttp.open("GET", url, false)
    xmlhttp.send()
    //console.log(regije.zasavska.ime)

}

class regija {
  constructor(ime,skupina, soleInFakultete, omejitevGibanja, omejitveZbiranja,strezbaHraneInPijace, activeCases, confirmedToDate, deceasedToDate) {
    this.ime = ime
    this.skupina = skupina
    this.soleInFakultete = soleInFakultete
    this.omejitevGibanja = omejitevGibanja
    this.omejitveZbiranja = omejitveZbiranja
    this.strezbaHraneInPijace = strezbaHraneInPijace
    this.activeCases = activeCases; 
    this.confirmedToDate = confirmedToDate; 
    this.deceasedToDate = deceasedToDate;
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
var noviceText = [{
    datum: "",
    href: "",
    naslov: ""
    },
    {
    datum: "",
    href: "",
    naslov: ""
    },{
    datum: "",
    href: "",
    naslov: ""
    }]



//region drzave

//nalaganje staticnih podatkov
const drzave= require('../models/staticData/CountriesOfEurope.json');


const eu = async(req, res) => {
    res.render('drzave', { page: "Prehodi",title: 'Prehodi',drzave: drzave.Drzave, prehodneDrzave: drzave.prehodneIndex,polprehodneDrzave: drzave.polprehodneIndex });

};
//endregion


const statistika = async(req, res) => {
    const resp = await axios.get('stats');
    let numOfData = Object.keys(resp.data).length;
    let regionStats = resp.data[numOfData-1]; // we try to get region data from today if Slednik has been updated already and if not, we get yesterday's region data
      
    let covidStats = resp.data[resp.data.length-2];
    console.log("STATS: ", covidStats);
    res.render('statistika', {statistics:{  
            yesterdayTests:covidStats.performedTests, 
            yesterdayPositiveTests:covidStats.positiveTests,
            overallTests:covidStats.performedTestsToDate, 
            overallPositive:covidStats.positiveTestsToDate,
            activeCases:covidStats.cases.active,
            inHospital:covidStats.statePerTreatment.inHospital,
            ICU:covidStats.statePerTreatment.inICU,
            deceased:covidStats.statePerTreatment.deceased,
        }});
};

const simptomi = (req, res) => {
    res.render('simptomi');
};

const zdravljenje = (req, res) => {
    res.render('zdravljenje');
};

const semafor = (req, res) => {
    res.render('semafor', {layout: false})
};

const preprecevanje = (req, res) => {
    res.render('preprecevanje')
};

const novice = (req, res) => {
    var url = "https://www.gov.si/teme/koronavirus-sars-cov-2/"
        var xmlhttp = new XMLHttpRequest()
        xmlhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                const arr = new jsdom.JSDOM(this.responseText)
                console.log(arr.window.document.querySelectorAll("ul").item(5).children[1].children[1].children[0].href)
                noviceText[0].datum=arr.window.document.querySelectorAll("ul").item(5).children[0].children[0].children[0].innerHTML
                noviceText[0].naslov=arr.window.document.querySelectorAll("ul").item(5).children[0].children[1].children[0].innerHTML
                noviceText[0].href=arr.window.document.querySelectorAll("ul").item(5).children[0].children[1].children[0].href
                noviceText[1].datum=arr.window.document.querySelectorAll("ul").item(5).children[1].children[0].children[0].innerHTML
                noviceText[1].naslov=arr.window.document.querySelectorAll("ul").item(5).children[1].children[1].children[0].innerHTML
                noviceText[1].href=arr.window.document.querySelectorAll("ul").item(5).children[1].children[1].children[0].href
                noviceText[2].datum=arr.window.document.querySelectorAll("ul").item(5).children[2].children[0].children[0].innerHTML
                noviceText[2].naslov=arr.window.document.querySelectorAll("ul").item(5).children[2].children[1].children[0].innerHTML
                noviceText[2].href=arr.window.document.querySelectorAll("ul").item(5).children[2].children[1].children[0].href
            }
        }
        xmlhttp.open("GET", url, false)
        xmlhttp.send()
    res.render('novice', {noviceText: noviceText})
};

const crna = (req, res) => {
    res.render('crna', {layout: false})
}

const rdeca = (req, res) => {
    res.render('rdeca', {layout: false})
}

const oranzna = (req, res) => {
    res.render('oranzna', {layout: false})
}

const rumena = (req, res) => {
    res.render('rumena', {layout: false})
}

const zelena = (req, res) => {
    res.render('zelena', {layout: false})
}

module.exports = {
  index, loadingScreen, semafor, eu, statistika, simptomi, zdravljenje, preprecevanje, novice,
    crna, rdeca, oranzna, rumena, zelena
};
