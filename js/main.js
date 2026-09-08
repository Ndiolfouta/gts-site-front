// ============================================================
// GTS-S.A. — JS front-end (version sans backend)
// Le formulaire de contact est validé et "envoyé" en simulation.
// Quand le backend PHP sera rebranché, remplacer la fonction
// simulateSend() par un vrai fetch('send-message.php', ...)
// (voir commentaire dans la fonction plus bas).
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  // --- Menu mobile ---
  var header = document.getElementById('site-header');
  var toggle = document.getElementById('menuToggle');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      header.classList.toggle('open');
    });
  }

  // --- Formulaire de contact ---
  var form = document.getElementById('contactForm');
  if (!form) return;

  var submitBtn = document.getElementById('submitBtn');
  var formMsg = document.getElementById('formMsg');

  function setFieldError(fieldName, hasError) {
    var field = form.querySelector('[data-field="' + fieldName + '"]');
    if (field) field.classList.toggle('field-error', hasError);
  }

  function validate(data) {
    var valid = true;

    if (!data.name.trim()) {
      setFieldError('name', true);
      valid = false;
    } else {
      setFieldError('name', false);
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email.trim())) {
      setFieldError('email', true);
      valid = false;
    } else {
      setFieldError('email', false);
    }

    if (!data.message.trim()) {
      setFieldError('message', true);
      valid = false;
    } else {
      setFieldError('message', false);
    }

    return valid;
  }

  // Simulation d'envoi (pas de serveur pour l'instant).
  // À remplacer plus tard par un vrai appel fetch() vers send-message.php.
  function simulateSend(data) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve({ success: true, message: 'Merci ' + data.name + ', votre message a bien été pris en compte.' });
      }, 700);
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      website: form.website.value // honeypot anti-spam, prêt pour le backend
    };

    formMsg.className = 'form-msg';
    formMsg.textContent = '';

    if (!validate(data)) {
      formMsg.className = 'form-msg error';
      formMsg.textContent = 'Merci de corriger les champs indiqués ci-dessus.';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours…';

    simulateSend(data)
      .then(function (result) {
        if (result.success) {
          formMsg.className = 'form-msg success';
          formMsg.textContent = result.message;
          form.reset();
        } else {
          formMsg.className = 'form-msg error';
          formMsg.textContent = result.message || "Une erreur s'est produite. Merci de réessayer.";
        }
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Envoyer le message';
      });
  });
});
