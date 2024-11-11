//load navbar to the page. Is called upon through onload of <body> in index.html
function loadPage(){
    loadNavbar();
    pageSwitch();
}
function loadNavbar(){
    $(function(){
        $("#navDiv").load("modules/navbar.html");
    });
}
function pageSwitch(page){
    switch(page){
        case "home":
            $(function(){
                $("#contentDiv").load("modules/pages/changelog.html");
            });
            break;
        case "install":
            $(function(){
                $("#contentDiv").load("modules/forms/form_install.html");
            });
            break;
        case "repair":
            $(function(){
                $("#contentDiv").load("modules/forms/form_repair.html");
            });
            break;
        case "unhappy":
            $(function(){
                $("#contentDiv").load("modules/forms/form_unhappyDrop.html");
            });
            break;
        case "rfogInstall":
            $(function(){
                $("#contentDiv").load("modules/forms/form_rfogInstall.html");
            });
            break;
        case "ManCFN":
            $(function(){
                $("#contentDiv").load("modules/forms/form_managedCFN.html");
            });
            break;
        case "psvKA":
            $(function(){
                $("#contentDiv").load("modules/forms/form_psvKA.html");
            });
            break;
        case "projGsx":
            $(function(){
                $("#contentDiv").load("modules/forms/form_projGsx.html");
            });
            break;
        case "extra":
            $(function(){
                $("#contentDiv").load("modules/pages/extra.html");
            });
            break;
        case "ipCalc":
            $(function(){
                $("#contentDiv").load("modules/pages/ipCalc.html");
            });
            break;
        case "projSwap":
        default:
            $(function(){
                $("#contentDiv").load("modules/pages/changelog.html");
            });
            break;
    }
}