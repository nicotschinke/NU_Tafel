
// =============================================
// ADOBE ANIMATE AUTOMATISCH GENERIERTER CODE
// (Dieser Teil bleibt unverändert!)
// =============================================

// =============================================
// IHR OPTIMIERTER CODE (ab hier)
// =============================================

// ========== 1. Throttle-Funktion für Performance ==========
function throttle(func, limit) {
    var lastFunc;
    var lastRan;
    return function() {
        var context = this;
        var args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// ========== 2. Hauptfunktion (wird von index.html aufgerufen) ==========
function initNUCode() {
    // root = exportRoot (wird von index.html gesetzt)
    var root = window.root;
    if (!root) {
        setTimeout(initNUCode, 50);
        return;
    }

    // ========== Stage-Optimierungen ==========
    if (window.stage) {
        window.stage.enableDOMEvents = false;
        window.stage.autoClear = false;
    }
    if (createjs.Touch) createjs.Touch.enable(window.stage);
    if (createjs.Ticker) createjs.Ticker.framerate = 60;

    // ========== Caching für statische Grafiken ==========
    if (root.HG) {
        if (root.HG.HG_weiß) root.HG.HG_weiß.cache(0, 0, root.HG.HG_weiß.width, root.HG.HG_weiß.height);
        if (root.HG.HG_blau) root.HG.HG_blau.cache(0, 0, root.HG.HG_blau.width, root.HG.HG_blau.height);
    }
    if (root.sym_Bereich) {
        if (root.sym_Bereich.b_l_b) root.sym_Bereich.b_l_b.cache(0, 0, root.sym_Bereich.b_l_b.width, root.sym_Bereich.b_l_b.height);
        if (root.sym_Bereich.b_l_w) root.sym_Bereich.b_l_w.cache(0, 0, root.sym_Bereich.b_l_w.width, root.sym_Bereich.b_l_w.height);
        if (root.sym_Bereich.b_r_b) root.sym_Bereich.b_r_b.cache(0, 0, root.sym_Bereich.b_r_b.width, root.sym_Bereich.b_r_b.height);
        if (root.sym_Bereich.b_r_w) root.sym_Bereich.b_r_w.cache(0, 0, root.sym_Bereich.b_r_w.width, root.sym_Bereich.b_r_w.height);
    }
