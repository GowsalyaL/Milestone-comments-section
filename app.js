 const inputname = document.querySelector('.username-text-box');
  const inputcomment = document.querySelector(".comment-text-box");
  const submitButton = document.querySelector(".comment-button");
  const commentsContainer = document.querySelector(".comments");

  submitButton.addEventListener("click", () => {
    if (inputname.value && inputcomment.value) {
      // create new comment
      const comment = document.createElement("div");
      comment.classList.add("comment");

      // create comment text

      const usernameText = document.createElement("p");
      usernameText.classList.add("username-text");
      usernameText.textContent = inputname.value;
      console.log(usernameText.innerHTML = inputname.value);

      const commentText = document.createElement("p");
      commentText.classList.add("comment-text");
      commentText.textContent = inputcomment.value;

      // create action buttons container
      const actionButtons = document.createElement("div");
      actionButtons.classList.add("action-buttons");

      // create like button
      let count=0;
      const likeButton = document.createElement("button");
      likeButton.classList.add("like-button");
      likeButton.addEventListener('click', ()=>{
        likeButton.innerHTML=`<i class="fa-solid fa-thumbs-up">${++count}</i>`;

      })
      likeButton.textContent = "Like";

      let countd=0;
      const dislikeButton = document.createElement("button");
      dislikeButton.classList.add("dislike-button");
      dislikeButton.addEventListener('click', ()=>{
       dislikeButton.innerHTML=`<i class="fa-solid fa-thumbs-down">${++countd}</i>`;

      })
      dislikeButton.textContent = "Dislike";


      // create delete button
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button");
      deleteButton.textContent = "delete";
      deleteButton.addEventListener('click', ()=>{
        comment.removeChild(commentText);
        comment.removeChild(actionButtons);
        commentsContainer.removeChild(comment);
      })
      
      // append elements
      actionButtons.appendChild(likeButton);
      actionButtons.appendChild(dislikeButton);
      actionButtons.appendChild(deleteButton);
      comment.appendChild(commentText);
      comment.appendChild(usernameText);
      comment.appendChild(actionButtons);
      commentsContainer.appendChild(comment);

      // clear input
      inputname.value = "";
      inputcomment.value = "";
    }
   });
   
   