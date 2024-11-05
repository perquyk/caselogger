// script.js
function setTodayDate() {
    console.log("Setting today's date.");
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd}`; // Format: YYYY-MM-DD
    return formattedDate;
}
function trimWoli(){
    let woli = document.getElementById('woli').value;
    let woliNew = woli.split(" ").join("");
    return woliNew; 
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
    const outputText = `
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
return outputText;
}

function installToTXT() {
    var outputText = generateInstallCaselog();
    var date = setTodayDate();
    var klantnummer = document.getElementById('klantnummer').value;
    var filename = date+'_'+klantnummer+'_'+"install";
    // Create a .txt file download
    const blob = new Blob([outputText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename+'.txt';
    link.click();
}
function installToClipboard() {
    var outputText = generateInstallCaselog();
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
    const outputText = `
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
return outputText;
}

function repairToTXT() {
    var outputText = generateRepairCaselog();
    var date = setTodayDate();
    var klantnummer = document.getElementById('klantnummer').value;
    var filename = date+'_'+klantnummer+'_'+"repair";
    // Create a .txt file download
    const blob = new Blob([outputText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename+'.txt';
    link.click();
}
function repairToClipboard() {
    var outputText = generateRepairCaselog();
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
    const outputText = `
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
return outputText;
}
function rfogInstallToTXT() {
    var outputText = generateRfogInstallCaselog();
    var date = setTodayDate();
    var klantnummer = document.getElementById('klantnummer').value;
    var filename = date+'_'+klantnummer+'_'+"RFOGinstall";
    // Create a .txt file download
    const blob = new Blob([outputText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename+'.txt';
    link.click();
}
function rfogInstallToClipboard() {
    var outputText = generateRfogInstallCaselog();
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
    const outputText = `
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
return outputText;
}
function projectUnhappyDropToTXT() {
    var outputText = generateProjectUnhappyDropCaselog();
    var date = setTodayDate();
    var klantnummer = document.getElementById('klantnummer').value;
    var filename = date+'_'+klantnummer+'_'+"Proj_UnhappyDrop";
    // Create a .txt file download
    const blob = new Blob([outputText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename+'.txt';
    link.click();
}
function projectUnhappyDropToClipboard() {
    var outputText = generateProjectUnhappyDropCaselog();
    navigator.clipboard.writeText(outputText).then(() => {
        console.log('Form data copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });

}

//GSX migraite functies
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
    const outputText = `
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
return outputText;
}
function gsxToTXT() {
    var outputText = generateGsxCaselog();
    var date = setTodayDate();
    var klantnummer = trimWoli();
    var filename = date+'_'+klantnummer+'_'+"GSX";
    // Create a .txt file download
    const blob = new Blob([outputText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename+'.txt';
    link.click();
}
function gsxToClipboard() {
    var outputText = generateGsxCaselog();
    navigator.clipboard.writeText(outputText).then(() => {
        console.log('Form data copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });

}
