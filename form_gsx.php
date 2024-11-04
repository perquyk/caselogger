<form id="gsxForm">
    <h1> Project GSX Migratie</h1>
    <br>
    <!--row 1: Woli-nummer -->
    <div class="row">   
        <div class="col md-3">
            <label for="woli">WOLI-nr:</label>
            <input type="text" id="woli" name="woli" class="form-control" required>
        </div>
    </div>

    <!--row2-->
    <div class="row">
        <div class="col md-3">
            <label for="adres">Adres:</label>
            <input type="text" id="adres" name="adres" class="form-control" required>
        </div>
    </div>

    <!--row3-->
    <div class="row mt-5">
        <div class="col md-3">
            <label for="iad-style"> Installatietype: </label>
            <select id="iad-style" name="iad-style" class="form-control">
                <option value="" disabled selected>SIP / ISDN /-BA /-PRA </option>
                <option value="SIP">SIP</option>
                <option value="ISDN2">ISDN</option>
                <option value="ISDN4">ISDN-BA</option>
                <option value="PRA">ISDN-PRA</option>
            </select>
        </div>
        <div class="col md-3">
            <label for="oldiad-type">Type Oude Setup:</label>
            <select id="oldiad-type" name="oldiad-type" class="form-control">
                <option value="" disabled selected>oneAccess / Audiocodes</option>
                <option value="oneAccess">oneAccess</option>
                <option value="audioCodes">AudioCodes</option>
            </select>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col md-3">
            <label for="hfc"> Modem HFC-MAC:</label>
            <input type="text" id="hfc" name="hfc" class="form-control" required>
        </div>
        <div class="col md-3">
            <label for="voip">IAD VOIP-MAC:</label>
            <input type="text" id="voip" name="voip" class="form-control" required>
        </div>
    </div>  
    <div class="row mt-5">
        <div class="col md-3">
            <label for="testcalls1">Testcalls Argus/Softphone</label>
            <select id="testcalls1" name="testcalls1" class="form-control">
                <option value="" disabled selected>OK / NOK</option>
                <option value="OK">OK</option>
                <option vlaue="NOK">NOK</option>
            </select>
        </div>
        <div class="col md-3">
            <label for="testcalls2">Testcalls PABX</label>
            <select id="testcalls2" name="testcalls2" class="form-control">
                <option value="" disabled selected>OK / NOK</option>
                <option value="OK">OK</option>
                <option vlaue="NOK">NOK</option>
            </select>
        </div>
    </div>  
    <div class="row mt-5">
        <div class="col md-3">
            <label for="remarks">Issues/Remarks?:</label>
            <textarea id="remarks" name="remarks" class="form-control"></textarea>
        </div>
    </div>
    <div class="row">
        <div class="col md-3">
            <label for="resultaat">Resultaat:</label>
            <textarea id="resultaat" name="resultaat" class="form-control"></textarea>
        </div>
        <div class="col md-3">
            <label for="modemtest">Modem Test:</label>
            <textarea id="modemtest" name="modemtest" class="form-control"></textarea>
        </div>

    </div>
    <div class="mt-4 text-center">
        <button type="button" class="btn btn-primary btn-lg me-2" onclick="gsxToTXT()"><i class="bi bi-file-earmark-arrow-down"></i> Download .txt-file</button>
        <button type="button" class="btn btn-primary btn-lg ms-2" id="copyBtn" onclick="gsxToClipboard()"><i class="bi bi-copy"></i> Copy to Clipboard</button>
    </div>
</form>