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

async function displayFetchedUsersToUI() {
  let randomUsers = await fetchUsers();
  let uiMarkUp = "";

  let htmlMarkUp = `<div class="user">
                <div class="upper-profile">
                  <img
                    src="${randomUsers.results[0].picture.large}"
                    alt="user-img"
                    id="img"
                  />
                  <div class="about">
                    <h5 id="name">${randomUsers.results[0].name.title} ${randomUsers.results[0].name.first} ${randomUsers.results[0].name.last}</h5>
                    <p id="gender"><span>Gender</span> | ${randomUsers.results[0].gender}</p>
                    <p id="user-name"><span>Username:</span> ${randomUsers.results[0].login.username}</p>
                    <p id="email"><span style="text-transform:capitalize">Email:</span> ${randomUsers.results[0].email}</p>
                  </div>
                </div>
                <div class="lower-profile">
                  <p id="location"><span>City:</span> ${randomUsers.results[0].location.city}</p>
                  <p id="location"><span>State:</span> ${randomUsers.results[0].location.state}</p>
                  <p id="location"><span>Country:</span> ${randomUsers.results[0].location.country}</p>
                  <p id="password"><span>Password:</span> ${randomUsers.results[0].login.password}</p>
                  <p id="dob"><span>DOM:</span> ${randomUsers.results[0].dob.date}</p>
                  <p id="age"><span>Age:</span> ${randomUsers.results[0].dob.age}</p>
                  <p id="phone"><span>Phone:</span> ${randomUsers.results[0].phone}</p>
                </div>
                
  </div>`;

  uiMarkUp += htmlMarkUp;
  document.querySelector(".container").innerHTML = uiMarkUp;
}

const generateBtn = document.getElementById("btn");
generateBtn.addEventListener("click", displayFetchedUsersToUI);
