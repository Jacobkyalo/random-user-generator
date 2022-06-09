// const generateBtn = document.getElementById("btn");
// generateBtn.addEventListener("click", () => {
//   console.log("hello there");
// });

//fetch users data from api

async function fetchUsers() {
  const url = "https://randomuser.me/api/";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
}

(async function displayFetchedUsersToUI() {
  let randomUsers = await fetchUsers();
  let uiMarkUp = "";

  let htmlMarkUp = `<div class="user">
                <div class="upper-profile">
                  <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="user-img"
                    id="img"
                  />
                  <div>
                    <h5 id="name">${randomUsers.results[0].name.title} ${randomUsers.results[0].name.first} ${randomUsers.results[0].name.last}</h5>
                    <p id="gender">Gender | ${randomUsers.results[0].gender}</p>
                    <p id="user-name">Username: ${randomUsers.results[0].login.username}</p>
                    <p id="email">${randomUsers.results[0].email}</p>
                  </div>
                </div>
                <div class="lower-profile">
                  <p id="location">City: ${randomUsers.results[0].location.city}</p>
                  <p id="password">Password: ${randomUsers.results[0].login.password}</p>
                  <p id="dob">DOB: ${randomUsers.results[0].dob.date}</p>
                  <p id="age">AGE: ${randomUsers.results[0].dob.age}</p>
                  <p id="phone">Phone: ${randomUsers.results[0].phone}</p>
                </div>
                <div>
                  <button type="button" id="btn">Generate User</button>
                </div>
  </div>`;

  uiMarkUp += htmlMarkUp;
  document.querySelector(".container").innerHTML = uiMarkUp;
})();
