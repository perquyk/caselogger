
<form id="unhappyDropForm">
    <h1>Project Unhappy Dropcable</h1>
    <hr>
    <!-- Row 1: Task, Klantnummer -->
    <h4>Klant info</h4>
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
    <!-- Row 2: Adres -->
    <div class="row">
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">Adres</span>
                <input type="text" id="adres" name="adres" class="form-control" required>
            </div>
        </div>
    </div>
    <hr>
    <!-- Row 3:  PNM test before -->
    <h4>Bij Aankomst</h4>
    <div class="row">
        <div class="col mb-3">
            <div class="input-group">
                <span class="input-group-text">PNM</span>
                <textarea id="pnmBefore" name="pnmBefore" rows="3" class="form-control" required></textarea>
            </div>
        </div>
    </div>
    <hr>
    <!-- Row 4: Sleutelvast, Connector, Vervangen? -->
    <h4>Tijdens interventie</h4>
    <div class="row">
        <div class="col mb-3">
            <div class="input-group">
                <label class="input-group-text">CM-snoer sleutelvast?</label>
                <select id="CMsnoer" name="CMsnoer" class="form-select" required>
                    <option value="" disabled selected>Ja / Nee</option>
                    <option value="Ja">Ja</option>
                    <option value="Nee">Nee</option>
                </select>
            </div>  
        </div>
        <div class="col mb-3">
            <div class="input-group">
                <label class="input-group-text">Connectoren OK?</label>
                <select id="connOK" name="connOK" class="form-select" required>
                    <option value="" disabled selected>OK / Vervangen</option>
                    <option value="OK">OK</option>
                    <option value="NOK">Vervangen</option>
                </select>
            </div>
        </div>
        <div class="col mb-3">
            <div class="input-group">    
                <label class="input-group-text">CM-snoer vervangen?</label>
                <select id="CMreplace" name="CMreplace" class="form-select" required>
                    <option value="" disabled selected>Ja / Nee</option>
                    <option value="Ja">Ja</option>
                    <option value="Nee">Nee</option>
                </select>
            </div>
        </div>
    </div>
    <hr>
    <!-- Row 5: TDR-meting -->
    <h4> TDR-meting drop</h4>
    <div class="row">
        <div class="col mb-3">
            <div class="input-group">
                <label class="input-group-text">TDR-meting uitgevoerd?</label>
                <select id="TDRdone" name="TDRdone" class="form-select" required>
                    <option value="" disabled selected>Ja / Nee</option>
                    <option value="Ja">Ja</option>
                    <option value="Nee">Nee</option>
                </select>
            </div>
        </div>
        <div class="col mb-3">
            <div class="input-group">
                <label class="input-group-text">Tap > NIU Lengte</label>
                <input id="tapNiuLength" name="TapNiuLength" class="form-control" required>
                <label class="input-group-text">meter</label>
            </div>
        </div>
        <div class="col mb-3">
            <div class="input-group">
                <label class="input-group-text">Tap > NIU event?</label>
                <input id="tapNiuEvents" name="tapNiuEvents" class="form-control" required>
            </div>
        </div>
    </div>
    <!-- Row 6: Materiaal -->
    <div class="row">
        <div class="col mb-3">
            <div class="input-group">
                <label class="input-group-text">Vp</label>
                <select id="vp" name="vp" class="form-select" required>
                    <option value="" disabled selected>0.66 / 0.85</option>
                    <option value="0.66">0.66</option>
                    <option value="0.85">0.85</option>
                </select>
            </div>
        </div>
        <div class="col mb-3">
            <div class="input-group">
                <label class="input-group-text">NIU > Tap Lengte</label>
                <input id="niuTapLength" name="niuTapLength" class="form-control" required>
                <label class="input-group-text">meter</label>
            </div>
        </div>
        <div class="col mb-3">
            <div class="input-group">
                <label class="input-group-text">NIU > TAP event?</label>
                <input id="niuTapEvents" name="niuTapEvents" class="form-control" required>
            </div>
        </div>
    </div>
    <!-- Row 7-->
    <hr>
    <h4>Acties drop</h4>
    <div class="row">
        <div class="col mb-3">
            <div class="input-group">
                <label class="input-group-text">Connector Tap vervangen?</label>
                <select id="conTap" name="conTap" class="form-select" required>
                    <option value="" disabled selected>Ja / Nee</option>
                    <option value="Ja">Ja</option>
                    <option value="Nee">Nee</option>
                </select>
            </div>
        </div>
        <div class="col mb-3">
            <div class="input-group">
                <label class="input-group-text">Connector NIU vervangen?</label>
                <select id="conNIU" name="conNIU" class="form-select" required>
                    <option value="" disabled selected>Ja / Nee</option>
                    <option value="Ja">Ja</option>
                    <option value="Nee">Nee</option>
                </select>
            </div>
        </div>
        <div class="col mb-3">
            <div class="input-group">
                <label class="input-group-text">Verlengstuk vervangen?</label>
                <select id="connExt" name="connExt" class="form-select" required>
                    <option value="" disabled selected>Ja / Nee / Nvt</option>
                    <option value="Ja">Ja</option>
                    <option value="Nee">Nee</option>
                    <option value="NVT">Nvt</option>
                </select>
            </div>
        </div>  
    </div>
    <!-- Row 8 -->
    <div class="row">
        <div class="col mb-3">
            <div class="input-group">
                <label class="input-group-text">Drop vervangen?</label>
                <select id="dropreplace" name="dropreplace" class="form-select" required>
                    <option value="" disabled selected>Ja / Nee / Nvt</option>
                    <option value="Ja">Ja</option>
                    <option value="Nee">Nee</option>
                    <option value="NVT">Nvt</option>
                </select>
            </div>
        </div>
        <div class="col mb-3">
            <div class="input-group">
                <label class="input-group-text">HP47?</label>
                <select id="replHP" name="replHP" class="form-select" required>
                    <option value="" disabled selected>Niet aanwezig / Verwijderd </option>
                    <option value="Niet Aanwezig">Niet aanwezig</option>
                    <option value="Verwijderd">Verwijderd</option>
                </select>
            </div>
        </div>
        <div class="col mb-3">
            <div class="input-group">
                <label class="input-group-text">Ingress nadien gemeten?</label>
                <select id="ingress" name="ingress" class="form-control" required>
                    <option value="" disabled selected>Ja / Nee / Nvt</option>
                    <option value="Ja">Ja</option>
                    <option value="Nee">Nee</option>
                    <option value="NVT">Nvt</option>
                </select>
            </div>
        </div>
    </div>
    <!-- Row 9 -->
    <hr>
    <h4>Bij vertrek</h4>
    <div class="row">
        <div class="col mb-3">
            <div class="input-group">
                <label class="input-group-text">PNM bij vertrek</label>
                <textarea id="pnmAfter" name="pnmAfter" rows="3" class="form-control" required></textarea>
            </div>
        </div>
        <div class="col mb-3">
            <div class="input-group">
                <label class="input-group-text">Resultaat</label>
                <textarea id="resultaat" name="resultaat" class="form-control" rows="3" required></textarea>
            </div>
        </div>
    </div>
<!-- Buttons -->
    <div class="mt-4 text-center">
        <button type="button" class="btn btn-primary btn-lg me-2" onclick="projectUnhappyDropToTXT()"><i class="bi bi-file-earmark-arrow-down"></i> Download .txt-file</button>
        <button type="button" class="btn btn-primary btn-lg ms-2" id="copyBtn" onclick="projectUnhappyDropToClipboard()"><i class="bi bi-copy"></i> Copy to Clipboard</button>
    </div>
</form>