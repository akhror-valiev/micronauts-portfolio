const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((navLink) => navLink.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
  navMenu.classList.remove('active');
}));

const projectData = [
  {
    id: 'p-1',
    img: {
      src: './images/Snapshoot Portfolio1.svg',
      alt: 'tonic project preview',
    },
    title: 'Tonic',
    type: ['CANOPY', 'Back End', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: [
      'HTML',
      'CSS',
      'Ruby and Rails',
      'Javascript',
      'github',
      'bootstrap',
    ],
  },
  {
    id: 'p-2',
    img: {
      src: './images/Snapshoot Portfolio2.svg',
      alt: 'Multi-Post Stories project preview',
    },
    title: 'Multi-Post Stories',
    type: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: [
      'HTML',
      'Ruby on Rails',
      'CSS',
      'Javascript',
      'github',
      'bootstrap',
    ],
  },
  {
    id: 'p-3',
    img: {
      src: './images/Snapshoot Portfolio3.svg',
      alt: 'Facebook 360 project preview',
    },
    title: 'Facebook 360',
    type: ['CANOPY', 'BACKEND DEV', '2015'],
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: [
      'HTML',
      'Ruby on Rails',
      'CSS',
      'Javascript',
      'github',
      'bootstrap',
    ],
  },
  {
    id: 'p-4',
    img: {
      src: './images/Snapshoot Portfolio4.svg',
      alt: 'Uber Navigation project preview',
    },
    title: 'Uber Navigation',
    type: ['UBER', 'Lead Developer', '2018'],
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: [
      'HTML',
      'Ruby on Rails',
      'CSS',
      'Javascript',
      'github',
      'bootstrap',
    ],
  },
];

const projectElement = document.querySelector('.preview-section');

function renderProjects() {
  projectData.forEach((data) => {
    projectElement.innerHTML += `
        
      <div class="preview-container" data-target="${data.id}">
      <i class="fa fa-close" style="font-size:24px"></i>
      <h2>${data.title}</h2> 
     
      
      <ul class="preview-stack-item">
        <li class="canopy">${data.type[0]}</li>
        <li>${data.type[1]}</li>
        <li>${data.type[2]}</li>
      </ul>
      <div class="preview-data">
        <img src="${data.img.src}" alt="${data.img.alt}" />
        <div class="preview-info">
          <p>
            ${data.description}
           
          </p>
          <div class="preview-secondary-info">
            <ul class="preview-detail">
              <li>${data.technologies[0]}</li>
              <li>${data.technologies[1]}</li>
              <li>${data.technologies[2]}</li>
              <li>${data.technologies[3]}</li>
              <li>${data.technologies[4]}</li>
              <li>${data.technologies[5]}</li>
            </ul>
            <hr>
            <div class="preview-button">
              <button href="">See Live</button>
              <button href="">See Source</button>
            </div>
          </div>
        </div>
      </div>
    </div>


        `;
  });
}

renderProjects();

const previewContainer = document.querySelector('.preview-section');
const previewBox = previewContainer.querySelectorAll('.preview-container');

document
  .querySelectorAll('.project-button')
  .forEach((project) => {
    project.onclick = () => {
      previewContainer.style.display = 'flex';

      const name = project.getAttribute('data-name');
      console.log(previewBox);

      previewBox.forEach((preview) => {
        const target = preview.getAttribute('data-target');

        if (name === target) {
          preview.classList.add('active');
        
        }
      });
    };
  });

previewBox.forEach((close) => {
  close.querySelector('.fa-close').onclick = () => {
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});
