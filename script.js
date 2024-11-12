// script.js
function setTodayDate() {
    console.log("Setting today's date.");
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}
function trimWoli(){
    let woli = document.getElementById('woli').value;
    return woli.split(" ").join("");
}

//function that generates the output for the install form
function generateInstallCaselog() {
    const formData = {
        datum: setTodayDate(),
        taaktype: 'Install',
        task: document.getElementById('task').value,
        klantnummer: document.getElementById('klantnummer').value,
        adres: document.getElementById('adres').value,
        omschrijving: document.getElementById('omschrijving').value,
        testen_catsap: document.getElementById('testen_catsap').value,
        testen_filterstatus: document.getElementById('testen_filterstatus').value,
        testen_streetping: document.getElementById('testen_streetping').value,
        acties: document.getElementById('acties').value,
        materiaal: document.getElementById('materiaal').value,
        resultaat: document.getElementById('resultaat').value,
        modemtest: document.getElementById('modemtest').value
    };

    // Generate the output text
    return `
Datum: ${formData.datum}
Taaktype: ${formData.taaktype}
Task: ${formData.task}
Klantnr: ${formData.klantnummer}
Adres: ${formData.adres}
____________________________________________________________

Omschrijving taak: 
${formData.omschrijving}

Testen bij aankomst:
-CATSAP: ${formData.testen_catsap}
-FILTER-STATUS: ${formData.testen_filterstatus}
-STREETPING: ${formData.testen_streetping}

Acties: 
${formData.acties}

Materiaal: 
${formData.materiaal}

Resultaat: 
${formData.resultaat}

Modemtest: 
${formData.modemtest}
    `;
}
function installToTXT() {
    let outputText = generateInstallCaselog();
    let date = setTodayDate();
    let klantnummer = document.getElementById('klantnummer').value;
    let filename = date+'_'+klantnummer+'_'+"install";
    // Create a .txt file download
    const blob = new Blob([outputText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename+'.txt';
    link.click();
}
function installToClipboard() {
    let outputText = generateInstallCaselog();
    navigator.clipboard.writeText(outputText).then(() => {
        console.log('Form data copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });

}

//function that generates the output for the repair form
function generateRepairCaselog(){
    const formData = {
        datum: setTodayDate(),
        taaktype: 'Repair',
        task: document.getElementById('task').value,
        klantnummer: document.getElementById('klantnummer').value,
        adres: document.getElementById('adres').value,
        omschrijving: document.getElementById('situatie').value,
        testen: document.getElementById('testen').value,
        acties: document.getElementById('acties').value,
        materiaal: document.getElementById('materiaal').value,
        resultaat: document.getElementById('resultaat').value,
        modemtest: document.getElementById('modemtest').value
    };

    // Generate the output text
    return `
Datum: ${formData.datum}
Taaktype: ${formData.taaktype}
Task: ${formData.task}
Klantnr: ${formData.klantnummer}
Adres: ${formData.adres}
____________________________________________________________

Situatie: 
${formData.omschrijving}

Testen:
${formData.testen}

Acties: 
${formData.acties}

Materiaal: 
${formData.materiaal}

Resultaat: 
${formData.resultaat}

Modemtest: 
${formData.modemtest}
    `;
}
function repairToTXT() {
    let outputText = generateRepairCaselog();
    let date = setTodayDate();
    let klantnummer = document.getElementById('klantnummer').value;
    let filename = date+'_'+klantnummer+'_'+"repair";
    // Create a .txt file download
    const blob = new Blob([outputText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename+'.txt';
    link.click();
}
function repairToClipboard() {
    let outputText = generateRepairCaselog();
    navigator.clipboard.writeText(outputText).then(() => {
        console.log('Form data copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });

}

//function that generated the output for the RFOG Install Form
function generateRfogInstallCaselog() {
    const formData = {
        datum: setTodayDate(),
        taaktype: 'RFOG Install',
        task: document.getElementById('task').value,
        klantnummer: document.getElementById('klantnummer').value,
        adres: document.getElementById('adres').value,
        omschrijving: document.getElementById('omschrijving').value,
        acties: document.getElementById('acties').value,
        materiaal: document.getElementById('materiaal').value,
        resultaat: document.getElementById('resultaat').value,
        modemtest: document.getElementById('modemtest').value,
        patchlength: document.getElementById('patchlength').value,
        MDRpos: document.getElementById('MDRpos').value,
        LCpos: document.getElementById('LCpos').value
    };

    // Generate the output text
    return `
Datum: ${formData.datum}
Taaktype: ${formData.taaktype}
Task: ${formData.task}
Klantnr: ${formData.klantnummer}
Adres: ${formData.adres}
____________________________________________________________

Omschrijving taak: 
${formData.omschrijving}

Acties: 
${formData.acties}

Materiaal: 
${formData.materiaal}

Resultaat: 
${formData.resultaat}

Patch informatie:
-patchsnoer lengte: ${formData.patchlength}
-patchpositie: ${formData.MDRpos} - ${formData.LCpos}

Modemtest: 
${formData.modemtest}
    `;
}
function rfogInstallToTXT() {
    let outputText = generateRfogInstallCaselog();
    let date = setTodayDate();
    let klantnummer = document.getElementById('klantnummer').value;
    let filename = date+'_'+klantnummer+'_'+"RFOGinstall";
    // Create a .txt file download
    const blob = new Blob([outputText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename+'.txt';
    link.click();
}
function rfogInstallToClipboard() {
    let outputText = generateRfogInstallCaselog();
    navigator.clipboard.writeText(outputText).then(() => {
        console.log('Form data copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });

}

//function that generates output for unhappy drop cases
function generateProjectUnhappyDropCaselog() {
    const formData = {
        datum: setTodayDate(),
        taaktype: 'Project Unhappy Dropcable',
        task: document.getElementById('task').value,
        klantnummer: document.getElementById('klantnummer').value,
        adres: document.getElementById('adres').value,
        pnmBefore: document.getElementById('pnmBefore').value,
        CMsnoer: document.getElementById('CMsnoer').value,
        connOK: document.getElementById('connOK').value,
        CMreplace: document.getElementById('CMreplace').value,
        TDRdone: document.getElementById('TDRdone').value,
        tapNiuLength: document.getElementById('tapNiuLength').value,
        tapNiuEvents: document.getElementById('tapNiuEvents').value,
        vp: document.getElementById('vp').value,
        niuTapLength: document.getElementById('niuTapLength').value,
        niuTapEvents: document.getElementById('niuTapEvents').value,
        conTap: document.getElementById('conTap').value,
        conNIU: document.getElementById('conNIU').value,
        connExt: document.getElementById('connExt').value,
        dropreplace: document.getElementById('dropreplace').value,
        replHP: document.getElementById('replHP').value,
        ingress: document.getElementById('ingress').value,
        pnmAfter: document.getElementById('pnmAfter').value,
        resultaat: document.getElementById('resultaat').value
        
    };

    // Generate the output text
    return `
Datum: ${formData.datum}
Taaktype: ${formData.taaktype}
Task: ${formData.task}
Klantnr: ${formData.klantnummer}
Adres: ${formData.adres}

____________________________________________________________
PNM Bij aankomst:
${formData.pnmBefore}

Tijdens interventie:
Sleutelvast: ${formData.CMsnoer}
Connectoren: ${formData.connOK}
Coax-snoer vervangen: ${formData.CMreplace}

TDR-meting drop: 
Meting uitgevoerd: ${formData.TDRdone}
Vp: ${formData.vp}
Lengte/events TAP > NIU: ${formData.tapNiuLength} meter / events: ${formData.tapNiuEvents} 
Lengte/events NIU > TAP: ${formData.niuTapLength} meter / events: ${formData.niuTapEvents} 

Acties drop:
F-conn TAP vervangen:  ${formData.conTap}
F-conn NIU vervangen:  ${formData.conNIU}
Verlengstuk vervangen:  ${formData.connExt}
Drop vervangen: ${formData.dropreplace}
HP47 filter vervangen: ${formData.replHP}
Ingress nadien gemeten: ${formData.ingress}

PNM Bij vertrek:
${formData.pnmAfter}

Resultaat:
${formData.resultaat}
    `;
}
function projectUnhappyDropToTXT() {
    let outputText = generateProjectUnhappyDropCaselog();
    let date = setTodayDate();
    let klantnummer = document.getElementById('klantnummer').value;
    let filename = date+'_'+klantnummer+'_'+"Proj_UnhappyDrop";
    // Create a .txt file download
    const blob = new Blob([outputText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename+'.txt';
    link.click();
}
function projectUnhappyDropToClipboard() {
    let outputText = generateProjectUnhappyDropCaselog();
    navigator.clipboard.writeText(outputText).then(() => {
        console.log('Form data copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });

}

//GSX migratie functies
function generateGsxCaselog() {
    const formData = {
        datum: setTodayDate(),
        taaktype: 'GSX Migration',
        woli: document.getElementById('woli').value,
        adres: document.getElementById('adres').value,
        iadStyle: document.getElementById('iad-style').value,
        oldIADType: document.getElementById('oldiad-type').value,
        hfc: document.getElementById('hfc').value,
        voip: document.getElementById('voip').value,
        testcalls1: document.getElementById('testcalls1').value,
        testcalls2: document.getElementById('testcalls2').value,
        remarks: document.getElementById('remarks').value,
        resultaat: document.getElementById('resultaat').value,
        modemtest: document.getElementById('modemtest').value
    };

    // Generate the output text
    return `
Datum: ${formData.datum}
Taaktype: ${formData.taaktype}
WOLI: ${formData.woli}
Adres: ${formData.adres}
____________________________________________________________
Omschrijving Taak:
Project GSX Migratie ${formData.iadStyle}
- Aanwezige IAD-type: ${formData.oldIADType}

Testen:
Testcalls Argus/Phonerlite: ${formData.testcalls1}
Testcalls PABX: ${formData.testcalls2}

Issues/Remarks:
${formData.remarks}

Materiaal:
1x Marakele - ${formData.hfc}
1x Audiocode ${formData.iadStyle} - ${formData.voip}

Resultaat:
${formData.resultaat}

Modemtest:
${formData.modemtest}

    `;
}
function gsxToTXT() {
    let outputText = generateGsxCaselog();
    let date = setTodayDate();
    let klantnummer = trimWoli();
    let filename = date+'_'+klantnummer+'_'+"GSX";
    // Create a .txt file download
    const blob = new Blob([outputText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename+'.txt';
    link.click();
}
function gsxToClipboard() {
    let outputText = generateGsxCaselog();
    navigator.clipboard.writeText(outputText).then(() => {
        console.log('Form data copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });

}

//psv KA functies
function generatePsvKaCaselog(){
    const formData = {
        datum: setTodayDate(),
        taaktype: 'PSV KA',
        woli: document.getElementById('woli').value,
        adres: document.getElementById('adres').value,
        remarks: document.getElementById('remarks').value,
        resultaat: document.getElementById('resultaat').value,
        materiaal: document.getElementById('materiaal').value

    };

    // Generate the output text
    return `
Datum: ${formData.datum}
Taaktype: ${formData.taaktype}
WOLI: ${formData.woli}
Adres: ${formData.adres}
____________________________________________________________
Omschrijving Taak:
Uitvoeren PSV KA voor ${formData.adres}
    
Issues/Remarks:
${formData.remarks}

Nodige Materialen voor Build:
${formData.materiaal}

Resultaat:
${formData.resultaat}

    `;
}
function psvkaToTXT(){
    let outputText = generatePsvKaCaselog();
    let date = setTodayDate();
    let klantnummer = trimWoli();
    let filename = date+'_'+klantnummer+'_'+"PSV-KA";
    // Create a .txt file download
    const blob = new Blob([outputText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename+'.txt';
    link.click();
}
function psvkaToClipboard(){
    let outputText = generatePsvKaCaselog();
    navigator.clipboard.writeText(outputText).then(() => {
        console.log('Form data copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

//CFN
function generateCFNCaselog(){
    const formData = {
        //non-dynamic vars
        datum: setTodayDate(),
        taaktype: 'WOLI Build - Managed CFN',
        woli: document.getElementById('woli').value,
        adres: document.getElementById('adres').value,
        main: document.getElementById('main').value,
        profiel: document.getElementById('profiel').value,
        backup: document.getElementById('backup').value,
        catsap: document.getElementById('testen_catsap').value,
        filter: document.getElementById('testen_filterstatus').value,
        streetping: document.getElementById('testen_streetping').value,
        acties: document.getElementById('acties').value,
        materiaal: document.getElementById('materiaal').value,
        resultaat: document.getElementById('resultaat').value,
        modemtest: document.getElementById('modemtest').value,
        //dynamic vars
        dynaSouth: dynaSouth(),
        dynaMateriaal: dynaMat(),
        dynaTests: dynaTest()
    }
    return `Datum: ${formData.datum}
Taaktype: ${formData.taaktype}
WOLI: ${formData.woli}
Adres: ${formData.adres}
____________________________________________________________
Omschrijving Taak:
Installatie Managed CFN${formData.dynaSouth} ${formData.profiel}
- Main: ${formData.main}
- Backup: ${formData.backup}
- Catsap-status bij aankomst: ${formData.catsap}
- filter-status bij aankomst: ${formData.filter}

Testen:
${formData.dynaTests}

Acties:
${formData.acties}

Materiaal:
${formData.dynaMateriaal}

Extra materiaal:
${formData.materiaal}

Resultaat:
${formData.resultaat}

Modemtest:
${formData.modemtest}
`
}
function cfnToTXT(){
    let outputText = generateCFNCaselog();
    let date = setTodayDate();
    let klantnummer = trimWoli();
    let filename = date+'_'+klantnummer+'_'+"CFN";
    // Create a .txt file download
    const blob = new Blob([outputText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename+'.txt';
    link.click();
}
function cfnToClipboard(){
    let outputText = generateCFNCaselog();
    navigator.clipboard.writeText(outputText).then(() => {
        console.log('Form data copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
//functions that add value to dynamic vars in CFN caselog
function dynaMat(){
    let output = "";
    const router = document.getElementById('router').value;
    const modem = document.getElementById('modemtype').value;
    const niu = document.getElementById('niu').value;
    const mac = document.getElementById('mac').value;
    switch(router){
        case "HPE MSR2003":
            output += "- 1x HPE MSR2003";
            output += `
`;
            break;
        case "HPE MSR3012":
            output += "- 1x HPE MSR3012";
            output += `
`;
            break;
        case "HPE MSR958x":
            output += "- 1x HPE MSR958x";
            output += `
`;
            break;
        case "TMC-R3305(L)":
            output += "- 1x HPE TMC-R3305(L)";
            output += `
`;
            break;
    }
    switch(modem){
        case "D3.1ERT":
            output += "- 1x CBN CV8560E (Marakele) - " + mac;
            output += `
`;
            break;
        case "AMOD3":
            output += "- 1x Technicolor TG546Bv A-MOD 3 - " + mac;
            output += `
`;
            break;
        case "AMOD4":
            output += "- 1x Sagemcom CS50001 A-MOD 4 - " + mac;
            output += `
`;
            break;
        case "ZTE":
            output += "- 1x ZTE MF281 LTE modem - " + mac;
            output += `
`;
            break;
        case "Nokia-5G":
            output += "- 1x Nokia 5G26-A - " + mac;
            output += `
`;
            break;
    }
    switch(niu){
        case "Onveranderd":
            break;
        case "85MHz 2-Data Mampaey":
            output += "- 1x Mampaey – NIU-85/105 – Versterker – Garage NIU 85MHz upstream – 2CM + lifeline";
            break;
        case "65MHz 4-Data":
            output += "- 1x DINH - NIU-65/88 - Versterker - 4CM NIU 65 MHz upstream";
            break;
        case "85MHz 4-Data":
            output += "- 1x Teleste – NIU-85/105 – Versterker – 4CM NIU 85MHz upstream";
            break;
    }
    return output;
}
function dynaTest(){
    let output = "";
    const testData = {
        mainSpeedDown: document.getElementById('mainSpeedDown'),
        mainSpeedUp: document.getElementById('mainSpeedUp'),
        mainRsrp: document.getElementById('mainRsrp'),
        mainBand: document.getElementById('mainBand'),
        backupSpeedDown: document.getElementById('backupSpeedDown'),
        backupSpeedUp: document.getElementById('backupSpeedUp'),
        backupRsrp: document.getElementById('backupRsrp'),
        backupBand: document.getElementById('backupBand'),
        failOver: document.getElementById('failOver')
    }
    const main = document.getElementById('main').value;
    const backup = document.getElementById('backup').value;
    switch(main){
        case 'Geen':
            break;
            //coax lines
        case 'TLN-Coax':
        case 'VOO-Coax':
            output += `
Main:
Speedtest: DOWN: ${testData.mainSpeedDown.value} Mbps/ UP: ${testData.mainSpeedUp.value} Mbps
`
            break;
            //pxm lines
        case 'VDSL':
        case 'GPON':
            output += `
Main:
Speedtest: DOWN: ${testData.mainSpeedDown.value} Mbps/ UP: ${testData.mainSpeedUp.value} Mbps
`
            break;

            //mobiles
        case '4G extern':
        case '4G ZTE':
        case '5G':
            output += `
Main:
Speedtest: DOWN: ${testData.mainSpeedDown.value} Mbps/ UP: ${testData.mainSpeedUp.value} Mbps
Signaal: ${testData.mainRsrp.value}b${testData.mainBand.value}
`
            break;
    }
    switch(backup){
        case 'Geen':
            break;
        //pxm lines
        case 'VDSL':
        case 'GPON':
            output += `
Backup:
Speedtest: DOWN: ${testData.backupSpeedDown.value} Mbps/ UP: ${testData.backupSpeedUp.value} Mbps
Failover test: ${testData.failOver.value}
`
            break;

        //mobiles
        case '4G extern':
        case '4G ZTE':
        case '5G':
            output += `
Backup:
Speedtest: DOWN: ${testData.backupSpeedDown.value} Mbps/ UP: ${testData.backupSpeedUp.value} Mbps
Signaal: ${testData.backupRsrp.value}b${testData.backupBand.value}

Failover test: ${testData.failOver.value}
`
            break;
    }
    return output;
}
function dynaSouth(){
    let output = "";
    const south = document.getElementById('main').value;
    if(south !== "VOO-Coax"){output = ""}
    else{
        output += "-South";
    }
    return output;
}
