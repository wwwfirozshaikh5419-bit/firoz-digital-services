const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});
navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

// SETUP: Replace YOUR_WHATSAPP_NUMBER with digits only, including India country code.
// Example format (do not copy as a real number): 91XXXXXXXXXX
const whatsappNumber = '918459264797';
const whatsappLink = document.querySelector('#whatsapp-link');
if (/^\d{10,15}$/.test(whatsappNumber)) {
  whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Namaste, mujhe digital service ke baare mein baat karni hai.')}`;
  whatsappLink.removeAttribute('aria-disabled');
  whatsappLink.classList.remove('disabled');
  document.querySelector('.contact-box b').textContent = 'WhatsApp पर बात करें';
  document.querySelector('.contact-box p').lastChild.textContent = ' अपनी जरूरत और reference भेजें।';
}
