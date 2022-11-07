document.addEventListener("DOMContentLoaded", fetchInit);
function fetchInit() {
  loadProjects();
}
async function loadProjects() {
  const res = await fetch("projects.json");
  const projects = await res.json();
  displayWorks(projects);
}
function displayWorks(projectsArr) {
  // console.log(projectsArr);
  const template = document.querySelector("template").content;
  const parent = document.querySelector(".content-wrapper");
  projectsArr.forEach((project) => {
    const clone = template.cloneNode(true);
    // console.log(project);
    clone.querySelector(".project-name").textContent = project.name;
    clone.querySelector(".languages").innerHTML = "";
    project.tags.forEach((tag) => {
      const ptag = document.createElement("p");
      ptag.textContent = tag;
      ptag.classList.add("lang-tag");
      clone.querySelector(".languages").appendChild(ptag);
    });
    clone.querySelector(".project-short-desc").textContent = project.shortDesc;
    clone.querySelector(".coverImg").src = `${project.mockups_url}`;
    clone.querySelector(".linkImg").src = `${project.mockups_url}`;
    clone.querySelector("a").href = `project.html?id=${project.id}`;
    parent.appendChild(clone);
  });
}

export { displayWorks };
