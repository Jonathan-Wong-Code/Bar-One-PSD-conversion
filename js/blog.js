document.querySelector(".comment-form").addEventListener("submit", (e)=>{
  e.preventDefault();
  form(e);
})

const form = (e) =>{ 
  const name = e.target.elements.name.value;
  const email = e.target.elements.email.value;
  const comment = document.querySelector(".form__comment").value;

  if(!name.match(/^[a-zA-Z]*$/) || !name){
    alert("Enter valid name");
  } else if(!email){
    alert("Enter in an email address")
  } else {
    render(name, comment);
  }
}

const render = (name, comment) => {

  const now = new Date();
  const markup =`
  <div class="comment">
      <div class="comment__img-box">
        <img src="https://www.fillmurray.com/150/150" 
          alt="A picture of Fill Murray!" 
          class="comment__img">     
      </div>
      <div class="comment__comment-box">
        <p class="comment__date">${now.toDateString()} by ${name}</p>
        <p class="comment__comment">${comment}.</p>
      </div>
  </div>
  `;

  document.querySelector(".comments__content").insertAdjacentHTML("beforeend", markup);
}