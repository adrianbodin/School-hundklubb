//Här har vi rätt värde för användarnamn och lösenord
const USERNAME = "Bella";
const PASSWORD = "qwe123";

const usernameInput = document.getElementsByClassName("username-input")[0];
const passwordInput = document.getElementsByClassName("password-input")[0];
const loginButton = document.getElementsByClassName("mainbutton")[0];
const heroSection = document.getElementsByClassName("hero-section")[0];
const loginForm = document.getElementsByClassName("input-form")[0];

if(localStorage.getItem("loggedin")) {
    logInUser();
}

loginButton.addEventListener("click", () => {
    if(usernameInput.value === USERNAME && passwordInput.value === PASSWORD) {
        logInUser();
    } else if(passwordInput.value === "") {
        outputErrorMessage("Du måste fylla i ett lösenord.");
    } else {
        outputErrorMessage("Inloggning misslyckades. Var vänlig försök igen.");
    }
});

function outputErrorMessage(message) {

    const checkErrorMessage = document.getElementById("error-message");

    if(checkErrorMessage) {
        checkErrorMessage.remove();
    }

    const errorMessage = document.createElement("h3");
    const outputText = document.createTextNode(message);
    errorMessage.appendChild(outputText);
    errorMessage.setAttribute("id", "error-message");
    loginForm.appendChild(errorMessage);
    clearInputs();
}

function logInUser() {
    heroSection.style.display = "none";
    clearInputs();
    //Skapar en ny section och lägger en class på den
    const loggedInSection = document.createElement("section");
    loggedInSection.setAttribute("class", "logged-in-section");
    //Skapar en ny div och ger den en class
    const welcomeDiv = document.createElement("div");
    welcomeDiv.setAttribute("class", "welcome-div");
    //Slapar en ny h2 och ger den ett värde
    const welcomeMessage = document.createElement("h2");
    const welcomeText = document.createTextNode("Välkommen, du är nu inloggad");
    welcomeMessage.appendChild(welcomeText);
    //Skapar en knapp för att logga ut
    const logoutButton = document.createElement("button");
    logoutButton.setAttribute("class", "mainbutton");
    const logoutMessage = document.createTextNode("Logga ut");
    logoutButton.appendChild(logoutMessage);

    welcomeDiv.appendChild(welcomeMessage);
    welcomeDiv.appendChild(logoutButton);
    loggedInSection.appendChild(welcomeDiv);
    document.body.appendChild(loggedInSection);
    localStorage.setItem("loggedin", "yes");

    logoutButton.addEventListener("click", () => {
    loggedInSection.style.display = "none";
    heroSection.style.display = "flex";
    localStorage.removeItem("loggedin", "yes");
});

}

function clearInputs() {
    usernameInput.value = "";
    passwordInput.value = "";
}

