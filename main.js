// Correo donde llegan las consultas de marcas. Cámbialo por el tuyo.
var CONTACT_EMAIL = 'edolatorrea@gmail.com';

(function () {
  var link = document.getElementById('mail-link');
  if (link) {
    link.textContent = CONTACT_EMAIL;
    link.href = 'mailto:' + CONTACT_EMAIL;
  }

  var form = document.getElementById('brand-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var subject = 'Propuesta Maia Cruz — ' + (d.get('marca') || '');
    var body =
      'Nombre: ' + (d.get('nombre') || '') + '\n' +
      'Marca: ' + (d.get('marca') || '') + '\n' +
      'Correo: ' + (d.get('correo') || '') + '\n' +
      'Interés: ' + (d.get('formato') || '') + '\n\n' +
      (d.get('mensaje') || '');
    window.location.href = 'mailto:' + CONTACT_EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
    var hint = document.getElementById('form-hint');
    if (hint) hint.textContent = '¡Gracias! Si tu correo no se abrió, escríbenos a ' + CONTACT_EMAIL + '.';
  });
})();
