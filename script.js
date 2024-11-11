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
        todo: document.getElementById('todo').value,
        main: document.getElementById('main').value,
        profiel: document.getElementById('profiel').value,
        backup: document.getElementById('backup').value,
        catsap: document.getElementById('testen_catsap').value,
        filter: document.getElementById('testen_filter').value,
        streetping: document.getElementById('testen_streetping').value,
        acties: document.getElementById('testen_acties').value,
        router: document.getElementById('router').value,
        niu: document.getElementById('niu').value,
        modemtype: document.getElementById('modemtype').value,
        mac: document.getElementById('mac').value,
        materiaal: document.getElementById('materiaal').value,
        resultaat: document.getElementById('resultaat').value,
        modemtest: document.getElementById('modemtest').value,
        //dynamische vars
        mainSpeedDown: document.getElementById('mainSpeedDown'),
        mainSpeedUp: document.getElementById('mainSpeedUp'),
        backupSpeedDown: document.getElementById('backupSpeedDown'),
        backupSpeedUp: document.getElementById('backupSpeedUp'),
        failOver: document.getElementById('failOver'),
        backupRsrp: document.getElementById('backupRsrp'),
        backupBand: document.getElementById('backupBand'),
        mainRsrp: document.getElementById('mainRsrp'),
        mainBand: document.getElementById('mainBand'),
        mobileTests: "",
        backupTests: "",
        mainTests: "",
        south: ""
    }
    return `
    Datum: ${formData.datum}
    Taaktype: ${formData.taaktype}
    WOLI: ${formData.woli}
    Adres: ${formData.adres}
    ____________________________________________________________
    Omschrijving Taak:
    Installatie Managed CFN${FormData.south} ${formData.profiel}
    - Main: ${formData.main}
    - Backup: ${formData.backup}
    - Catsap-status bij aankomst: ${formData.catsap}
    - filter-status bij aankomst: ${formData.filter}
    
    Testen:
    ${formData.mainTests}
    ${formData.backupTests}
    ${formData.mobileTests}
    
    Acties:
    ${formData.acties}
    
    Materiaal:
    ${formData.modemtype}
    ${formData.router}
    ${formData.niu}
    
    Extra materiaal:
    ${formData.materiaal}
    
    Resultaat:
    ${formData.resultaat}
    
    Modemtest:
    ${formData.modemtest}
    `
}
function cfnToTXT(){

}
function cfnToClipboard(){
    
}

