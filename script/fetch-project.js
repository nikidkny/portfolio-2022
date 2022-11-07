"use strict";
document.addEventListener("DOMContentLoaded", fetchInit);
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const fetchedId = urlParams.get("id");
console.log(fetchedId);
async function fetchInit() {
  await loadProject();
}

// function fetchInit() {
//   loadProject();
// }
async function loadProject() {
  const response = await fetch("projects.json");
  const projects = await response.json();
  const project = projects[fetchedId - 1];
  console.log(projects);
  // replace contents
  document.querySelector(".single-project h1").textContent = project.name;
  document.querySelector(".project-lang ul").innerHTML = "";
  project.tags.forEach((tag) => {
    const litag = document.createElement("p");
    litag.textContent = tag;
    litag.classList.add("lang-tag");
    document.querySelector(".languages").appendChild(litag);
  });
  document.querySelector(".cover-img").src = `${project.coverImg_url}`;
  document.querySelector(".project-img").src = `${project.mockups_url}`;
  document.querySelector(".main-project p").textContent = project.fullDesc;
  document.querySelector(".single-project .short").textContent = project.shortDesc;
  document.querySelector(".project_link").href = `${project.link_url}`;
}
