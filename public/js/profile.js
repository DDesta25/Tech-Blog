const projectForm = document.querySelector(".new-project-form");
const commentForm = document.querySelector("#commentForm");

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

const showCommentForm = () => {
  const commentForm = document.getElementById("commentForm");
  commentForm.style.display = "block";
};
const commentButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const response = await fetch(`/api/comment/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      showCommentForm(); // Call the showCommentForm function when the delete operation is successful
      document.location.replace("/profile");
    } else {
      alert("Failed to delete project");
    }
  }
};

// Add an event listener to call the delButtonHandler function when a specific button is clicked
document.addEventListener("click", delButtonHandler);

console.log(projectForm);
projectForm.addEventListener("submit", newFormHandler);
// add event listener  that calls new form for comment
document
  .querySelector(".project-list")
  .addEventListener("click", delButtonHandler);
