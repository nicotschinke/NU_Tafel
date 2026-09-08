// Warten, bis die Seite vollständig geladen ist
window.addEventListener('load', function() {
  // Liste aller bekannten Button-IDs aus Ihrem Code
  var buttonIds = [
    'btn_HG', 'btn_B_l', 'btn_B_r',
    'fi_1', 'fi_2', 'fi_3',
    'NUS', 'l_l1', 'l_l2', 'l_l3', 'l_n', 'l_f',
    'r_l1', 'r_l2', 'r_l3', 'r_n', 'r_f'
  ];

  // Füge touch-action: manipulation zu allen Buttons hinzu
  buttonIds.forEach(function(id) {
    var element = document.getElementById(id);
    if (element) {
      element.style.touchAction = 'manipulation';
    }

    // Falls die Buttons in MovieClips sind (z. B. icon_B_l.btn_B_l)
    var movieClipElement = document.querySelector('#' + id + ', .' + id);
    if (movieClipElement) {
      movieClipElement.style.touchAction = 'manipulation';
    }
  });

  // Falls Buttons in Containern sind (z. B. icon_B_l)
  var containers = ['icon_B_l', 'icon_B_r'];
  containers.forEach(function(containerId) {
    var container = document.getElementById(containerId);
    if (container) {
      container.style.touchAction = 'manipulation';
    }
  });
});
