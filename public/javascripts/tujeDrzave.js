


function onC(prehodne){
    var options = document.getElementById("selectDrzavaID");
    var id  = (options.selectedIndex !== -1) ? options[options.selectedIndex].id : null;
    var index = parseInt(id.replace("drzava_",""));
    if(prehodne.includes(index))
       displayText(true)
    else
        displayText(false)
}

function displayText(bool){
    if(bool)
        $( "#displayPrehodnost" ).html("<p id=\"prehodJeMogoc\" class=\"btn btn-light col-4 \">Prehod je mogoč!</p>");
    else
        $( "#displayPrehodnost" ).html("<p id=\"prehodNiMogoc\" class=\"btn btn-light col-4 \">Prehod ni mogoč!</p>");

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
