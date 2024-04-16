document.addEventListener("DOMContentLoaded", function () {
  const projectsContainer = document.getElementById("projects-container");

  // Fetch project data from your server
  fetch("http://localhost:5000/projects")
    .then((response) => response.json())
    .then((projects) => {
      // Loop through each project and create project cards
      projects.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("project-card", "col");
        card.innerHTML = `
                    <img src="${project.image}" alt="${
          project.name
        }" class="project-image">
                    <div class="project-details">
                        <h3 class="project-name">${project.name}</h3>
                        <p class="project-description">${project.description.slice(
                          0,
                          50
                        )}...</p>
                        <p class="project-technology">Technology: ${
                          project.technology
                        }</p>
                    </div>
                `;
        projectsContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error fetching project data:", error);
      // Handle error if needed
    });
});
