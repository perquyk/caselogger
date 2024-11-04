
<form id="repairForm">
    <h1>Repair</h1>
    <hr>
    <!-- Row 1 -->
    <div class="row">
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Task</span>
                <input type="text" id="task" name="task" class="form-control" required>
            </div>
        </div>
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Klantnummer</span>
                <input type="text" id="klantnummer" name="klantnummer" class="form-control" required>
            </div>
        </div>
    </div>
    <!-- Row 2 -->
    <div class="row">
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Adres</span>
                <input type="text" id="adres" name="adres" class="form-control" required>
            </div>
        </div>
    </div>
    <!-- Row 3 -->
    <hr>
    <div class="row">
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Situatie</span>
                <textarea id="situatie" name="situatie" rows="3" class="form-control" required></textarea>
            </div>
        </div>
    </div>
    <!-- Row 4 -->
    <hr>
    <div class="row">
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Testen</span>
                <textarea id="testen" name="name" rows="3" class="form-control" required></textarea>
            </div>
        </div>
    </div>
    <!-- Row 5 -->
     <hr>
    <div class="row">            
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Acties</span>
                <textarea id="acties" name="acties" rows="3" class="form-control" required></textarea>
            </div>
        </div>
    </div>    
    <!-- Row 6 -->
     <hr>
    <div class="row">
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Materiaal</span>
                <textarea id="materiaal" name="materiaal" rows="3" class="form-control" required></textarea>
            </div>
        </div>
    </div>
    <!-- Row 7 -->
    <div class="row">
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Resultaat</span>
                <textarea id="resultaat" name="resultaat" rows="2" class="form-control" required></textarea>
            </div>
        </div>
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Modemtest</span>
                <textarea type="text" id="modemtest" rows="2" name="modemtest" class="form-control" required></textarea>
            </div>
        </div>
    </div>
    <!-- Row 8 -->
    <div class="mt-4 text-center">
        <button type="button" class="btn btn-primary btn-lg me-2" onclick="repairToTXT()"><i class="bi bi-file-earmark-arrow-down"></i> Download .txt-file</button>
        <button type="button" class="btn btn-primary btn-lg ms-2" id="copyBtn" onclick="repairToClipboard()"><i class="bi bi-copy"></i> Copy to Clipboard</button>
    </div>
</form>