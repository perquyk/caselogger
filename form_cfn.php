

<form id="CFNForm">
    <h1>CFN</h1>
    <hr class="mb-1">
    <!-- ROW 1 -->
    <div class="row">
        <h4 class="mt-3">Klant info</h4>
        <!-- WOLI-nummer -->
        <div class="col mb-3">
            <div class="input-group mt-3">
                <span class="input-group-text">WOLI</span>
                <input type="text" id="woli" name="woli" class="form-control" required>
            </div>
        </div>
    </div>
    <!-- ROW 2 -->
    <div class="row">
        <!-- Adres -->
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Adres</span>
                <input type="text" id="adres" name="adres" class="form-control" required>
            </div>
        </div>
    </div>
    <hr class="mb-4">
    <!-- ROW 3 -->
    <div class="row">
       <h4>Situatie</h4>
        <!-- Omschrijving taak -->
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Omschrijving</span>
                <textarea id="todo" name="todo" rows="3" class="form-control" required></textarea>
            </div>
        </div>
    </div>

    <!-- Row 4 -->
    <div class="row">
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Main</span>
                <select id="main" name="main" class="form-select" onchange="dynamicProfiles()">
                    <option value="" selected>geen</option>
                    <option value="TLN-Coax">Coax - Telenet</option>
                    <option value="VDSL">VDSL</option>
                    <option value="VOO-Coax">Coax - VOO</option>
                    <option value="GPON">GPON</option>
                    <option value="4G extern">4G met ext. antenne</option>
                    <option value="4G ZTE">4G met ZTE</option>
                    <option value="5G">5G</option>
                </select>
            </div>
        </div>
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Profiel</span>
                <select id="profiel" name="profiel" class="form-select">
                    <!-- dynamicly filled in through dynamicProfiles() -->
                </select>
            </div>
        </div>
        <div class="col mb-3">
        <div class="input-group">
                <span class="input-group-text">Backup</span>
                <select id="backup" name="backup" class="form-select">
                    <option value="Geen" selected>geen</option>
                    <option value="5G">5G Backup</option>
                    <option value="4G externe">Externe 4G Backup</option>
                    <option value="ZTE">4G met ZTE modem</option>
                    <option value="VDSL">VDSL</option>
                </select>
            </div>
        </div>
    </div>
    
    
    <!-- Row 5 -->
    <div class="row">
        <!-- CATSAP -->
        <div class="col mb-3">
            <div class="input-group">
                <label class="input-group-text">CATSAP</label>
                <select id="testen_catsap" name="testen_catsap" class="form-select">
                    <option value="" disabled selected>Select CATSAP</option>
                    <option value="1">1 - Active Cable Customer</option>
                    <option value="2">2 - Former Cable Customer</option>
                    <option value="3">3 - No Drop (Cable in street)</option>
                    <option value="4">4 - No Service</option>
                    <option value="5">5 - Rijgnet</option>
                    <option value="6">6 - Dropcable finished (Ready for connection)</option>
                    <option value="7">7 - Dropcable Placed (Not ready for connection)</option>
                </select>
            </div>
        </div>    
        <!-- Filter -->
        <div class="col mb-3">
            <div class="input-group">
                <label class="input-group-text">Filter</label>
                <select id="testen_filterstatus" name="testen_filterstatus" class="form-select">
                    <option value="" disabled selected>Select FILTER-STATUS</option>
                    <option value="No Filter">No Filter</option>
                    <option value="Anti-dief">Anti-dief</option>
                    <option value="TOF-ITC">TOF-ITC</option>
                    <option value="TOF 5-117">TOF 5-117</option>
                    <option value="HP47">HP47</option>
                    <option value="HP86">HP86</option>
                    <option value="HP110">HP110</option>
                    <option value="RPA12">RPA12</option>
                </select>
            </div>
        </div>
            <!-- Streetping -->
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Streetping</span>
                <input type="text" id="testen_streetping" name="testen_streetping" class="form-control">
            </div>
        </div>
    </div>
    <hr class="mb-4">
     <!-- Row 6 -->
    <div class="row">   
        <h4 class="mb-3">Uitvoering</h4>
        <!-- Acties -->
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Acties</span>
                <textarea id="acties" name="acties" rows="3" required class="form-control"></textarea>
            </div>
        </div>
    </div>
    <hr class="mb-4">
    <!-- Row 7 --> 
    <div class="row">
        <h4 class="mb-3">Finishing up</h4>
        <!-- Materiaal -->
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Materiaal</span>
                <textarea id="materiaal" name="materiaal" rows="3" class="form-control" required></textarea>
            </div>
        </div>
    </div>
    <!-- ROW 8 -->
    <div class="row">
        <!-- resultaat -->
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Resultaat</span>
                <textarea id="resultaat" name="resultaat" rows="2" class="form-control" required></textarea>
            </div>
        </div>
        <!-- modemtest -->
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Modemtest</span>
                <textarea type="text" id="modemtest" name="modemtest" class="form-control" required></textarea>
            </div>    
       </div>
    </div>
    <!-- ROW 9 -->

    <!-- Buttons -->
    <div class="mt-4 text-center">
    <button type="button" class="btn btn-primary btn-lg me-2" onclick="installToTXT()"><i class="bi bi-file-earmark-arrow-down"></i> Download .txt-file</button>
    <button type="button" class="btn btn-primary btn-lg ms-2" id="copyBtn" onclick="installToClipboard()"><i class="bi bi-copy"></i> Copy to Clipboard</button>
    </div>
</form>

<script>
    //cfn specific script
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
        var main = document.getElementById('main');
        var select = document.getElementById('profiel');
        console.log(main.value);
        switch(main.value){
            case 'TLN-Coax':
                var output = `
                    <option value="" selected disabled>Selecteer profiel</option>
                    <option value="${profile.tln1000}">${profile.tln1000}</option>
                    <option value="${profile.tln750}">${profile.tln750}</option>
                    <option value="${profile.tln500}">${profile.tln500}</option>
                    <option value="${profile.tln240}">${profile.tln240}</option>
                `
                break;
            case 'VDSL':
                var output = `
                    <option value="${profile.vdsl}">${profile.vdsl}</option>
                `
                break;
            case 'VOO-Coax':
                var output = `
                    <option value="" selected disabled>Selecteer profiel</option>
                    <option value="${profile.voo400}">${profile.voo400}</option>
                    <option value="${profile.voo200}">${profile.voo200}</option>
                    <option value="${profile.voo150}">${profile.voo150}</option>
                    `
                break;
            case 'GPON':
                var output = `
                    <option value="${profile.gpon}">${profile.gpon}</option>
                `
                break;
            case '4G extern':
            case '4G ZTE':
            case '5G':
                var output = `
                    <option value="" selected disabled>Selecteer profiel</option>
                    <option value="${profile.mobXL}">${profile.mobXL}</option>
                    <option value="${profile.mobL}">${profile.mobL}</option>
                    <option value="${profile.mobM}">${profile.mobM}</option>
                    <option value="${profile.mobS}">${profile.mobS}</option>
                    `
        }
        select.innerHTML = output;
    }
    function dynamicTests(){
        
    }
</script>