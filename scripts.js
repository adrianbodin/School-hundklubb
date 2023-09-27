//Här har vi rätt värde för användarnamn och lösenord
const USERNAME = "Bella";
const PASSWORD = "qwe123";


//Drar in element som jag kommer behöva manipulera på ett eller annat sätt
const usernameInput = document.getElementsByClassName("username-input")[0];
const passwordInput = document.getElementsByClassName("password-input")[0];
const loginButton = document.getElementsByClassName("mainbutton")[0];
//Kommer att användas för display:none; när användaren loggat in.
const heroSection = document.getElementsByClassName("hero-section")[0];
//Kommer användas för att sätta in errormessage elementet i
const loginForm = document.getElementsByClassName("input-form")[0];

/*Denna lyssnar efter click på login knappen. Och kollar om användarnamnet och lösenordet 
stämmer och kallar en funktion annars skickar den ut felmeddelande*/
loginButton.addEventListener("click", () => {
    if(usernameInput.value === USERNAME && passwordInput.value === PASSWORD) {
        logInUser();
    }
    else if(passwordInput.value === "") {
        outputErrorMessage("Du måste fylla i ett lösenord.");
    }
    else {
        outputErrorMessage("Inloggning misslyckades. Var vänlig försök igen.");
    }
});

/* Denna funktionen får man mata in ett meddelande man vill ska sägas upp i 
felmeddelandet och kollar sedan av ifall det redan finns ett felmeddelande element
och tar isåfall bort detta om det finns och klistrar in ett nytt. */
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
    clearInputs()
    
    
    
    
    
}

/* Denna funktionen gör så att vi kommer in till "nästa sida". Och därifrån lyssnar
den på logout knappen och skickar oss tillbaka till startsidan om man trycker på den */
function logInUser() {
    heroSection.style.display = "none";
    clearInputs()
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

if(localStorage.getItem("loggedin")) {
    logInUser()
}

//En enkel funktion som rensar input fälten efter olika event. Denna kallar jag på 
//i andra funktioner.
function clearInputs() {
    usernameInput.value = "";
    passwordInput.value = "";
}

