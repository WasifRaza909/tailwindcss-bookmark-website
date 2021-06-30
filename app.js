const arrowIcon = document.querySelectorAll('.arrow-icon');

arrowIcon.forEach((icon) =>
  icon.addEventListener('click', () => {
    const paragraph =
      icon.parentElement.parentElement.getElementsByTagName('p')[0];

    paragraph.classList.toggle('hidden');
    if (icon.classList.contains('fa-chevron-up')) {
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
      icon.style.color = '#000000';
      return;
    } else {
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
      icon.style.color = '#fa5757';
      return;
    }
  })
);

// Navbar
const hamburgerIcon = document.getElementsByClassName('hamburger-icon')[0];
const navMenu = document.getElementsByClassName('nav-menu')[0];

hamburgerIcon.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  if (hamburgerIcon.classList.contains('fa-bars')) {
    hamburgerIcon.classList.remove('fa-bars');
    hamburgerIcon.classList.add('fa-times');
  } else {
    hamburgerIcon.classList.add('fa-bars');
    hamburgerIcon.classList.remove('fa-times');
  }
});
