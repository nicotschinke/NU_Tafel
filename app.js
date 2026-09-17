// Warten, bis die Seite und die NU_positions.js geladen sind
window.onload = function() {
    // Prüfen, ob die Positionen und das Sprite-Sheet verfügbar sind
    if (!window.elements || !window.spriteSheet) {
        document.getElementById('error').textContent = "Fehler: Positionen oder Sprite-Sheet nicht geladen!";
        document.getElementById('error').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
        return;
    }

    // Canvas und Kontext holen
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Ladehinweis ausblenden
    document.getElementById('loading').style.display = 'none';

    // Sprite-Sheet laden
    const spriteSheet = new Image();
    spriteSheet.src = window.spriteSheet.image; // z. B. "NU_atlas_1.webp"

    // Fehlerbehandlung für das Sprite-Sheet
    spriteSheet.onerror = function() {
        document.getElementById('error').textContent = "Fehler: Sprite-Sheet konnte nicht geladen werden!";
        document.getElementById('error').style.display = 'block';
    };

    // Wenn das Sprite-Sheet geladen ist, zeichnen
    spriteSheet.onload = function() {
        drawAll(ctx, spriteSheet);
    };

    // Funktion zum Zeichnen aller Elemente
    function drawAll(ctx, spriteSheet) {
        // Canvas leeren
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Alle Elemente durchgehen und zeichnen
        for (const name in window.elements) {
            const elem = window.elements[name];

            // Prüfen, ob das Element sichtbar ist (falls 'visible' definiert ist)
            if (elem.visible === false) continue;

            // Frame-Daten aus dem Sprite-Sheet holen
            const frame = window.spriteSheet.frames[elem.frame];

            // Element zeichnen
            ctx.drawImage(
                spriteSheet,
                frame[0], frame[1], frame[2], frame[3], // Quelle: [sx, sy, width, height]
                elem.x, elem.y, elem.width, elem.height    // Ziel: [x, y, width, height]
            );
        }
    }

    // Klick-Handler für interaktive Elemente
    canvas.addEventListener('click', function(e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Prüfen, ob auf ein Element geklickt wurde
        for (const name in window.elements) {
            const elem = window.elements[name];

            // Prüfen, ob das Element sichtbar ist
            if (elem.visible === false) continue;

            // Prüfen, ob der Klick innerhalb des Elements liegt
            if (x >= elem.x && x <= elem.x + elem.width &&
                y >= elem.y && y <= elem.y + elem.height) {
                console.log(`Geklickt auf: ${name}`);
                // Hier können Sie Ihre Logik für Interaktionen einfügen
                // Beispiel: toggleVisibility(name);
                break;
            }
        }
    });

    // Beispiel-Funktion zum Umschalten der Sichtbarkeit (kann später angepasst werden)
    function toggleVisibility(name) {
        const elem = window.elements[name];
        if (elem.visible === undefined) {
            elem.visible = true; // Standardmäßig sichtbar
        }
        elem.visible = !elem.visible; // Sichtbarkeit umschalten
        drawAll(ctx, spriteSheet); // Neu zeichnen
    }
};