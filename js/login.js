UserApp.initialize({ appId: "51ded0be98035" });

function signup() {
  UserApp.User.save({
    login: document.getElementById("email").value,
    first_name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  }, function(error, user) {
    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Thanks for signing up!");
    }
  });
  
  return false;
}
