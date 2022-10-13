// const projectData = [
//   {
//     id: p - 1,
//     img: {
//       src: "./images/Snapshoot Portfolio1.svg",
//       alt: "tonic project preview",
//     },
//     title: "Tonic",
//     type: ["CANOPY", "Back End", "2015"],
//     description:
//       "A daily selection of privately personalized reads; no accounts or sign-ups required.",
//     technologies: ["HTML", "CSS", "Ruby and Rails", "Javascript", "github", "bootstrap"],
//   },
//   {
//     id: p - 2,
//     img: {
//       src: "./images/Snapshoot Portfolio2.svg",
//       alt: "Multi-Post Stories project preview",
//     },
//     title: "Multi-Post Stories",
//     type: ["FACEBOOK", "Full Stack Dev", "2015"],
//     description:
//       "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
//     technologies: ["HTML", "Ruby on Rails", "CSS", "Javascript", "github", "bootstrap"],
//   },
//   {
//     id: p - 3,
//     img: {
//       src: "./images/Snapshoot Portfolio3.svg",
//       alt: "Facebook 360 project preview",
//     },
//     title: "Facebook 360",
//     type: ["CANOPY", "BACKEND DEV", "2015"],
//     description:
//       "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
//     technologies: ["HTML", "Ruby on Rails", "CSS", "Javascript", "github", "bootstrap"],
//   },
//   {
//     img: {
//       id: p - 4,
//       src: "./images/Snapshoot Portfolio4.svg",
//       alt: "Uber Navigation project preview",
//     },
//     title: "Uber Navigation",
//     type: ["UBER", "Lead Developer", "2018"],
//     description:
//       "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
//     technologies: ["HTML", "Ruby on Rails", "CSS", "Javascript", "github", "bootstrap"],
//   },
// ];




// const projectElement = document.querySelector(".preview-section");

// function renderProjects(projectData) {
//   projectData.forEach((data) => {
//     projectElement.innerHTML += `
        
//         <div class="preview-container">
//       <i class="fa fa-close" style="font-size:24px"></i>
//       <h2>${data.title}</h2> 
//       <ul class="preview-stack-item">
//         <li class="canopy">${data.type[0]}</li>
//         <li>${data.type[1]}</li>
//         <li>${data.type[2]}</li>
//       </ul>
//       <div class="preview-data">
//         <img src="${data.img.src}" alt="${data.img.alt}" />
//         <div class="preview-info">
//           <p>
//             ${data.description}
           
//           </p>
//           <div class="preview-secondary-info">
//             <ul class="preview-detail">
//               <li>${data.technologies[0]}</li>
//               <li>${data.technologies[1]}</li>
//               <li>${data.technologies[2]}</li>
//               <li>${data.technologies[3]}</li>
//               <li>${data.technologies[4]}</li>
//               <li>${data.technologies[5]}</li>
//             </ul>
//             <hr>
//             <div class="preview-button">
//               <a href="">See Live</a>
//               <a href="">See Source</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>


//         `;
//   });
// }

// renderProjects()








