const commentForm = document.querySelector("#commentForm");

const showCommentForm = () => {
    const commentForm = document.getElementById("commentForm");
    commentForm.style.display = "block";
  };
  const commentButtonHandler = async (event) => {
    event.preventDefault()
    console.log("adding comment");
   const input= document.getElementById("commentInput")
   console.log(input.value);
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const response = await fetch(`/api/comment/${id}`, {
        method: "POST",
      });
      if (response.ok) {
        showCommentForm();
        document.location.replace("/profile");
      } else {
        alert("Failed to delete project");
      }
    }
  };

  commentForm.addEventListener("submit", commentButtonHandler);