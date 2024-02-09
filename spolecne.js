const hamburgerMenu = () => {
  const polozky = document.querySelector('#menu-polozky');
  polozky.classList.toggle('show');

  if (polozky.classList.contains('show')) {
    hamburgerMenu.innerHTML = '<i class="fas fa-xmark"></i>';
  } else {
    hamburgerMenu.innerHTML = '<i class="fas fa-bars"></i>';
  }
};

const menu = document
  .querySelector('#menu-tlacitko')
  .addEventListener('click', hamburgerMenu);
