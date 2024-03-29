const projectForm = document.querySelector(".new-project-form");

const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#project-name").value.trim();

  const contents = document.querySelector("#project-desc").value.trim();

  if (title && contents) {
    const response = await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({ title, contents }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/comment/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete project");
    }
  }
};

document.addEventListener("click", delButtonHandler);

projectForm.addEventListener("submit", newFormHandler);

