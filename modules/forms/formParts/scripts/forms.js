function profileSelector(){
    let profiel = document.getElementById('profiel');
    profiel.innerHTML = "";
    let main = document.getElementById('main');
    switch(main.value){
        case "VDSL":
        case "GPON":
            profiel.innerHTML = `<option value="nvt" selected>NVT</option>`;
            break;
        case "TLN-Coax":
            profiel.innerHTML = `<option value="test" selected>test</option>`;
            break;
    }
}