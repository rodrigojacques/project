
/* menu mobile */
let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navlist.classList.toggle('open')
}
/*header*/

window.addEventListener("scroll", function () {
  let header = document.querySelector('.header')
  header.classList.toggle('scroll', window.scrollY > 500)
})

/* scroll reveal*/

const sr = ScrollReveal({
  distance: '50px',
  duration: 2000,
  reset: false
})

sr.reveal('.title', { delay: 50, origin: 'top' })


sr.reveal(".delay-small", { delay: 200, origin: 'top' });
sr.reveal(".delay-small-interval", { interval: 200, origin: 'top' });
sr.reveal(".delay-medium", { delay: 300, origin: 'top' });
sr.reveal(".delay-large", { delay: 400, origin: 'top' });
sr.reveal(".delay-extra-big", { interval: 500, origin: 'top' });
sr.reveal(".card-delay", { interval: 400, origin: 'top' });

Window.sr = ScrollReveal({
  reset: false
})

/* toggle theme */

const botaoLight = document.getElementById('toggle-light');


if (localStorage.getItem('data-theme') == 'light') {
  botaoLight.checked = true;
}

botaoLight.addEventListener('change', () => {
  let theme = localStorage.getItem('data-theme');

  if (!botaoLight.checked) {
    changeThemeToDark()
  } else {
    changeThemeToLight()
  }
})










/* navlist selecionado*/


let list = document.querySelectorAll('.navlist li')
function active() {
  list.forEach((i) =>
    i.classList.remove('active'))
  this.classList.add('active')
}
list.forEach((i) =>
  i.addEventListener('click', active))




/* faq selecionado*/

let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('faq-icon');

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener('click', () => {
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      toggles[i].style.color = "#844bf0";
      icons[i].classList.remove('ri-add-line');
      icons[i].classList.add('ri-subtract-line');
    }
    else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#111130";
      icons[i].classList.remove('ri-subtract-line');
      icons[i].classList.add('ri-add-line');
    }

    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = "0px";
        toggles[j].style.color = "#111130";
        icons[j].classList.remove('ri-subtract-line');
        icons[j].classList.add('ri-add-line');
      }
    }
  });
}