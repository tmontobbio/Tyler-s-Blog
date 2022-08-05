document.addEventListener("DOMContentLoaded", () => {
  let addPost = false;
  const newPostBtn = document.querySelector("#new-post-btn");
  const formContainer = document.querySelector("#form-container");
  const postForm = document.querySelector("#new-post-form");
  const blogContainer = document.querySelector("#blog-container");
  fetchPosts();

  function fetchPosts() {
    fetch(" http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) =>
        data.forEach((post) => {
          const postContainer = document.createElement("div");
          const title = document.createElement("h1");
          title.textContent = post.title;
          const body = document.createElement("p");
          body.textContent = post.body;
          postContainer.className = "blog-post";
          title.className = "blog-title";
          body.className = "blog-body";
          blogContainer.append(postContainer);
          postContainer.append(title);
          postContainer.append(body);
        })
      );
  }
  newPostBtn.addEventListener("click", () => {
    addPost = !addPost;
    if (addPost) {
      formContainer.style.display = "block";
    } else {
      formContainer.style.display = "none";
    }
  });

  // Post listener and JSON post
  postForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.reset();

    addPost = !addPost;
    if (addPost) {
      formContainer.style.display = "block";
    } else {
      formContainer.style.display = "none";
    }
    const titleText = document.querySelector(".input-text");
    const formBody = document.querySelector("#text-box");
    let newPost = {
      title: `${titleText.textContent}`, // cant get this to work
      body: `${formBody.textContent}`,
    };
    fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    }).then((res) => res.json);
  });
});

function diffImage(img) {
  if (img.src.match(/blank/)) img.src = "img/spoongebob.gif";
  else img.src = "img/spoongebob.gif";
}

function diffImageTwo(img) {
  if (img.src.match(/blank/)) img.src = "img/renstimpy.gif";
  else img.src = "img/renstimpy.gif";
}

// function renderPost() {
//   const titleText = document.querySelector(".input-text");
//   const formBody = document.querySelector("#text-box");
//   if (titleText.value === "") {
//     alert("Please fill out title & body.");
//   } else if (formBody.value === "") {
//     alert("Please fill out title & body.");
//   } else {
//
//   }
// }
