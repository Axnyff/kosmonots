'use strict';

let audios = {};
let last;
Array.from(document.getElementsByClassName('play')).forEach(el => {
  el.addEventListener('click', e => {
    const item = e.target.closest('.play');
    if (last) {
      last.pause();
      if (last.getAttribute('src') === item.dataset.play) {
        item.querySelector('.play-icon').classList.remove('hidden');
        item.querySelector('.spin').classList.add('hidden');
        item.querySelector('.cross').classList.add('hidden');
        last = undefined;
        return;
      }
    }

    Array.from(document.querySelectorAll('.spin,.cross')).forEach(el => {
      el.classList.add('hidden');
    });
    Array.from(document.querySelectorAll('.play-icon')).forEach(el => {
      el.classList.remove('hidden');
    });
    if (!audios[item.dataset.play]) {
      audios[item.dataset.play] = new Audio(item.dataset.play);
      item.querySelector('.spin').classList.remove('hidden');
      last = audios[item.dataset.play];
      last.addEventListener('loadeddata', () => {
        item.querySelector('.spin').classList.add('hidden');
        item.querySelector('.cross').classList.remove('hidden');
      });
    } else {
      item.querySelector('.cross').classList.remove('hidden');
    }
    last = audios[item.dataset.play];

    last.currentTime = 0;
    last.play();
    item.querySelector('.play-icon').classList.add('hidden');
  });
});

const mod = (n, mod) => ((n % mod) + mod) % mod;

let imageIndex = 0;
const images = [
  'images/Kosmonot-Assignat-02.jpg',
  'images/Kosmonot-JAMs-Millau-01.jpg',
  'images/Kosmonot-Auxerre.jpg',
  'images/Kosmonot-JAMs-Millau-02.jpg',
  'images/Kosmonot-Batimat-01.jpg',
  'images/Kosmonot-Manche-01.jpg',
  'images/Kosmonot-Concours-2015.jpg',
  'images/Kosmonot-Manche-02.jpg',
  'images/Kosmonot-Concours-2022.jpg',
  'images/Kosmonot-Montpellier-01.jpg',
  'images/Kosmonot-Ferme-du-bonheur-01.jpg',
  'images/Kosmonot-Montpellier-02.jpg',
  'images/Kosmonot-Ferme-du-bonheur-02.jpg',
  'images/Kosmonot-Montpellier-03.jpg',
  'images/Kosmonot-Gaspard-01.jpg',
  'images/Kosmonot-Montpellier-04.jpg',
  'images/Kosmonot-Genolhac-01.jpg',
  'images/Kosmonot-Montpellier-05.jpg',
  'images/Kosmonot-Groix-01.jpg',
  'images/Kosmonot-Montpellier-06.jpg',
  'images/Kosmonot-Harmony-cafe-01.jpg',
  'images/Kosmonot-Montpellier-07.jpg',
  'images/Kosmonot-Harmony-cafe-02.jpg',
  'images/Kosmonot-Outlaws-01.jpg',
  'images/Kosmonot-Harmony-cafe-03.jpg',
  'images/Kosmonot-Quai-seine.jpg',
  'images/Kosmonot-Assignat-01.jpg',
  'images/Kosmonot-Harmony-cafe-04.jpg',
];

document.querySelector('.display').addEventListener('click', () => {
  document.querySelector('.overlay').classList.remove('hidden');
  document.querySelector('.carrousel').classList.remove('hidden');
});

document.querySelector('.next').addEventListener('click', () => {
  imageIndex = mod(imageIndex + 1, images.length);
  document
    .querySelector('.carrousel .main')
    .setAttribute('src', images[imageIndex]);
});

document.querySelector('.main').addEventListener('click', () => {
  imageIndex = mod(imageIndex + 1, images.length);
  document
    .querySelector('.carrousel .main')
    .setAttribute('src', images[imageIndex]);
});

document.querySelector('.previous').addEventListener('click', () => {
  imageIndex = mod(imageIndex - 1, images.length);
  document
    .querySelector('.carrousel .main')
    .setAttribute('src', images[imageIndex]);
});

document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.overlay').classList.add('hidden');
  document.querySelector('.carrousel').classList.add('hidden');
});

document.querySelector('.overlay').addEventListener('click', () => {
  document.querySelector('.overlay').classList.add('hidden');
  document.querySelector('.carrousel').classList.add('hidden');
});

const videos = [
  [
    'https://www.youtube.com/embed/mqAgzUP7PZw?si=e3d_bcVpcj9FoGxB&autoplay=1',
    "“History Repeating“ au James Hetfeeld's Pub",
  ],

  [
    'https://www.youtube.com/embed/2YVtT28vhR0?si=ua8zwNuFV5EKvbwe&autoplay=1',
    '"Al Capone" au Festival des fanfares de Montpellier 2023',
  ],
  [
    'https://www.youtube.com/embed/HskCj-Z0CLY?si=tOV9BIOaKk0PcAo5&autoplay=1',

    '“Bad Guy“ au Festival des fanfares de Montpellier 2023',
  ],
  [
    'https://www.youtube.com/embed/uUdte_7NUCE?si=kld9m-OMqWXFb8PO&autoplay=1',

    "“Ya Sabes“ au café l'Assignat",
  ],
];

Array.from(document.getElementsByClassName('dot')).forEach(el => {
  el.addEventListener('click', e => {
    const [video, title] = videos[e.target.dataset.index];
    document.getElementById('video').setAttribute('src', video);
    document.getElementById('legend').innerText = title;
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
  });
});

document.addEventListener('scroll', () => {
  document.getElementById('zen').style.top = `calc(50% + ${
    -document.body.getBoundingClientRect().y / 8
  }px)`;
  document.getElementById('dab').style.top = `calc(50% + ${
    document.body.getBoundingClientRect().y / 5
  }px)`;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
