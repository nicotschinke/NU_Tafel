// Warten, bis die Seite vollständig geladen ist
window.addEventListener('load', function() {
  // Liste aller Button-IDs aus Ihrem Code
  var buttonIds = [
    'btn_HG', 'btn_B_l', 'btn_B_r',
    'fi_1', 'fi_2', 'fi_3',
    'NUS', 'l_l1', 'l_l2', 'l_l3', 'l_n', 'l_f',
    'r_l1', 'r_l2', 'r_l3', 'r_n', 'r_f'
  ];

  // Funktion, um Click-Events durch Touchend/Mouseup zu ersetzen
  function replaceClickWithFastEvents(elementId) {
    var element = document.getElementById(elementId);
    if (!element) return;

    // Speichern Sie die ursprüngliche Click-Funktion
    var originalClick = element.onclick;

    // Entfernen Sie den Click-Listener
    element.onclick = null;

    // Fügen Sie Touchend und Mouseup hinzu (für Touch- und Maus-Input)
    element.addEventListener('touchend', function(e) {
      e.preventDefault(); // Verhindert Scrollen
      if (originalClick) originalClick(e);
    });

    element.addEventListener('mouseup', function(e) {
      if (originalClick) originalClick(e);
    });
  }

  // Ersetzen Sie Click-Events für alle Buttons
  buttonIds.forEach(replaceClickWithFastEvents);

  // Falls Buttons in Containern sind (z. B. icon_B_l.btn_B_l)
  var containers = ['icon_B_l', 'icon_B_r', 'Bereich', 'RECOVER_WIEDERHERGESTELLT_NU'];
  containers.forEach(function(containerId) {
    var container = document.getElementById(containerId);
    if (container) {
      container.addEventListener('touchend', function(e) {
        e.preventDefault();
      });
      container.addEventListener('mouseup', function(e) {
        // Keine Aktion nötig, da Click-Events bereits ersetzt wurden
      });
    }
  });
});
