const commentForm = document.querySelector("#commentForm");

const showCommentForm = () => {
  const commentForm = document.getElementById("commentForm");
  commentForm.style.display = "block";
};
const commentButtonHandler = async (event) => {
  event.preventDefault();
  console.log("adding comment");
  const input = document.getElementById("commentInput");
  
const body = {
  comment: input.value,
  user_id: input.dataset.userId,
  post_id: input.dataset.postId
}
console.log(body);
  const response = await fetch(`/api/comments`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  if (response.ok) {
    showCommentForm();
    document.location.replace("/profile");
  } else {
    alert("Failed to delete project");
  }
};

commentForm.addEventListener("submit", commentButtonHandler);
