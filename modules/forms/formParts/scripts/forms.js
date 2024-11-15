function dynamicProfiles(){
    const profile = {
        tln1000: '1G/75M',
        tln750: '750M/75M',
        tln500: '500M/50M',
        tln240: '240M/40M',
        voo400: '400M/20M',
        voo200: '200M/20M',
        voo150: '150M/10M',
        vdsl: 'VDSL',
        gpon: 'GPON',
        mobXL: '1G/75M',
        mobL: '500M/50M',
        mobM: '240M/40M',
        mobS: '90M/20M',
    }
    let main = document.getElementById('main');
    let select = document.getElementById('profiel');
    let output = "";
    console.log(main.value);
    switch(main.value){
        case 'TLN-Coax':
            output = `
                <option value="" selected disabled>Selecteer profiel</option>
                <option value="${profile.tln1000}">${profile.tln1000}</option>
                <option value="${profile.tln750}">${profile.tln750}</option>
                <option value="${profile.tln500}">${profile.tln500}</option>
                <option value="${profile.tln240}">${profile.tln240}</option>
            `
            break;
        case 'VDSL':
            output = `
                <option value="${profile.vdsl}">${profile.vdsl}</option>
            `
            break;
        case 'VOO-Coax':
            output = `
                <option value="" selected disabled>Selecteer profiel</option>
                <option value="${profile.voo400}">${profile.voo400}</option>
                <option value="${profile.voo200}">${profile.voo200}</option>
                <option value="${profile.voo150}">${profile.voo150}</option>
                `
            break;
        case 'GPON':
            output = `
                <option value="${profile.gpon}">${profile.gpon}</option>
            `
            break;
        case '4G extern':
        case '4G ZTE':
        case '5G':
            output = `
                <option value="" selected disabled>Selecteer profiel</option>
                <option value="${profile.mobXL}">${profile.mobXL}</option>
                <option value="${profile.mobL}">${profile.mobL}</option>
                <option value="${profile.mobM}">${profile.mobM}</option>
                <option value="${profile.mobS}">${profile.mobS}</option>
                `
    }
    select.innerHTML = output;
}