const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((navLink) =>
  navLink.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const previewContainer = document.querySelector(".preview-section");
const previewBox = previewContainer.querySelectorAll(".preview-container");

document
  .querySelectorAll(".project-section .project-items")
  .forEach((project) => {
    project.onclick = () => {
      previewContainer.style.display = "flex";
      let name = project.getAttribute("data-name");
      previewBox.forEach((preview) => {
        let target = preview.getAttribute("data-target");
        if (name == target) {
          preview.classList.add("active");
        }
      });
    };
  });

previewBox.forEach((close) => {
  close.querySelector(".fa-close").onclick = () => {
    close.classList.remove("active");
    previewContainer.style.display = "none";
  };
});
