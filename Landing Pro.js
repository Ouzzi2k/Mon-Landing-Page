const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  const telephone = form.elements['telephone'].value.trim();
  const message = form.elements['message'].value.trim();

  if (!name) {
    alert('Veuillez entrer votre nom.');
    return;
  }

  if (!email) {
    alert('Veuillez entrer votre adresse e-mail.');
    return;
  }
  if (!telephone) {
    alert('Veuillez entrer votre adresse numéro de telephone.');
    return;
  }

  if (!message) {
    alert('Veuillez entrer un message.');
    return;
  }


  alert('Merci pour votre message G5Up vous remercie !');
  form.reset();
});