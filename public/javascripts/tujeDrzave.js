


function onC(prehodne,polprehodne){
    var options = document.getElementById("selectDrzavaID");
    var id  = (options.selectedIndex !== -1) ? options[options.selectedIndex].id : null;
    var index = parseInt(id.replace("drzava_",""));
    if(prehodne.includes(index)){
        displayText(0)
    }
    else if (polprehodne.includes(index)){
        displayText(1)
    }else{
        displayText(2)

    }
}

function displayText(textCode){

    if(textCode === 0) {
        $("#displayPrehodnost").html("<a href='https://www.gov.si/teme/koronavirus-sars-cov-2/prehajanje-meja/' id=\"prehodJeMogoc\" class=\"btn btn-light col-4 \">Prehod je mogoč!</a>");
        $("#displayPrehodnostDetail").html("<p>Za vstop v Slovenijo iz te države ni omejitev! <br> <b>Srečno pot!</b></p>");

    }else if (textCode === 1)
        $( "#displayPrehodnost" ).html("<a href='https://www.gov.si/teme/koronavirus-sars-cov-2/prehajanje-meja/' id=\"prehodDelnoMogoc\" class=\"btn btn-light col-4 \">Prehod delno mogoč!</a>");
    else if(textCode ===2) {
        $("#displayPrehodnost").html("<a href='https://www.gov.si/teme/koronavirus-sars-cov-2/prehajanje-meja/' id=\"prehodNiMogoc\" class=\"btn btn-light col-4 \">Prehod ni mogoč!</a>");
        $("#displayPrehodnostDetail").html(" <p>    Pogoji za vstop:    <br>\n" +
            "                <b>10-dni karantene</b>\n" +
            "            </p>");

    }
}

/*
    jQuery('.dropdown-menu a').on('click', function () {
        var id = $(this).attr('id');
        executeAction(id);
    });

    executeAction = function (id) {
        console.log("id: " + id)
        switch (id) {

            case "deletelist":

                break;
        }
    }

 */
