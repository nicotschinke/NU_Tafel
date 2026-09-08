// Warten, bis CreateJS und Adobe Animate geladen sind
window.addEventListener('load', function() {
  // Funktion, um Touch-Events zu allen Buttons hinzuzufügen
  function addTouchToButton(button) {
    if (!button) return;

    // Touch-Events hinzufügen (parallel zu mousedown/pressup/click)
    button.addEventListener('touchstart', function(e) {
      e.preventDefault(); // Verhindert Doppelauslösung von Mouse- und Touch-Events
      // Simuliere mousedown
      var mousedownEvent = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      button.dispatchEvent(mousedownEvent);
    });

    button.addEventListener('touchend', function(e) {
      e.preventDefault(); // Verhindert Doppelauslösung
      // Simuliere pressup
      var pressupEvent = new MouseEvent('pressup', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      button.dispatchEvent(pressupEvent);

      // Simuliere click (falls nötig)
      var clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      button.dispatchEvent(clickEvent);
    });
  }

  // Liste aller Buttons, die in Ihrem Code vorkommen
  var buttons = [
    'btn_HG', 'btn_B_l', 'btn_B_r',
    'fi_1', 'fi_2', 'fi_3',
    'NUS', 'l_l1', 'l_l2', 'l_l3', 'l_n', 'l_f',
    'r_l1', 'r_l2', 'r_l3', 'r_n', 'r_f'
  ];

  // Füge Touch-Events zu allen Buttons hinzu
  buttons.forEach(function(name) {
    var button = window[name] || (window.icon_B_l && window.icon_B_l[name]) || (window.icon_B_r && window.icon_B_r[name]);
    if (button) {
      addTouchToButton(button);
    }
  });
});
