document.addEventListener("DOMContentLoaded", () => {
  let postDrawer = false;
  const newPostBtn = document.querySelector("#new-post-btn");
  const formContainer = document.querySelector("#form-container");
  const postForm = document.querySelector("#new-post-form");
  const blogContainer = document.querySelector("#blog-container");
  fetchPosts();

  function generatePost(data) {
    const postContainer = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = data.title;
    const body = document.createElement("p");
    body.textContent = data.body;
    postContainer.className = "blog-post";
    title.className = "blog-title";
    body.className = "blog-body";
    blogContainer.append(postContainer);
    postContainer.append(title);
    postContainer.append(body);
  }

  function fetchPosts() {
    fetch(" http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => data.forEach((data) => generatePost(data)));
  }

  newPostBtn.addEventListener("click", () => {
    postDrawer = !postDrawer;
    if (postDrawer) {
      formContainer.style.display = "block";
    } else {
      formContainer.style.display = "none";
    }
  });

  postForm.addEventListener("submit", (e) => {
    postDrawer = !postDrawer;
    if (postDrawer) {
      formContainer.style.display = "block";
    } else {
      formContainer.style.display = "none";
    }
    const textTitle = document.querySelector("#input-text");
    const textBody = document.querySelector("#text-box");
    let newPost = {
      title: textTitle.value, // cant get this to work
      body: textBody.value,
    };
    fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json)
      .then((data) => generatePost(data));
    e.target.reset();
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
