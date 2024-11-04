

<form id="installForm">
    <h1>Install</h1>
    <hr class="mb-1">
    <!-- ROW 1 -->
    <div class="row">
        <h4 class="mt-3">Info klant</h4>
        <!-- Tasknummer -->
        <div class="col mb-3">
            <div class="input-group mt-3">
                <span class="input-group-text">Task</span>
                <input type="text" id="task" name="task" class="form-control"required>
            </div>
        </div>
        <!-- Klantnummer -->
        <div class="col mb-3">
            <div class="input-group mt-3">
                <span class="input-group-text">Klantnummer</span>
                <input type="text" id="klantnummer" name="klantnummer" class="form-control">
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
                <span class="input-group-text">Omschrijving taak</span>
                <textarea id="omschrijving" name="omschrijving" rows="3" class="form-control" required></textarea>
            </div>
        </div>

    </div>

    <!-- Row 4 -->
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
    <!-- Row 5 -->
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
    <!-- Row 6 --> 
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
    <!-- ROW 7 -->
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
    <!-- ROW 8 -->

    <!-- Buttons -->
    <div class="mt-4 text-center">
    <button type="button" class="btn btn-primary btn-lg me-2" onclick="installToTXT()"><i class="bi bi-file-earmark-arrow-down"></i> Download .txt-file</button>
    <button type="button" class="btn btn-primary btn-lg ms-2" id="copyBtn" onclick="installToClipboard()"><i class="bi bi-copy"></i> Copy to Clipboard</button>
    </div>
</form>