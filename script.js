// Añade un evento al botón con id 'check-btn' para ejecutar la función cuando se hace clic.
// Adds an event to the button with id 'check-btn' to execute the function when clicked.
document.getElementById("check-btn").addEventListener("click", function() {

    // Obtiene el valor ingresado por el usuario en el campo de entrada con id 'user-input'.
    // Gets the value entered by the user in the input field with id 'user-input'.
    let userInput = document.getElementById("user-input").value;

    // Referencia el div donde se mostrarán los resultados con id 'results-div'.
    // References the div where the results will be displayed with id 'results-div'.
    let resultsDiv = document.getElementById("results-div");

    // Si el campo de entrada está vacío, muestra un mensaje de alerta y detiene la ejecución.
    // If the input field is empty, shows an alert message and stops execution.
    if (userInput.trim() === "") {
        alert("Please provide a phone number");
        return; // Detiene la ejecución si el campo está vacío. // Stops execution if the field is empty.
    }

    // Expresión regular que valida el formato de un número de teléfono de EE.UU.
    // Regular expression that validates the format of a US phone number.
    let validRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    // Verifica si el número ingresado coincide con el patrón de la expresión regular.
    // Checks if the entered number matches the regular expression pattern.
    let isValid = validRegex.test(userInput);

    // Muestra si el número ingresado es válido o inválido en el div de resultados.
    // Displays whether the entered number is valid or invalid in the results div.
    resultsDiv.textContent = `${isValid ? "Valid" : "Invalid"} US number: ${userInput}`;
});

// Añade un evento al botón con id 'clear-btn' para limpiar el contenido del div de resultados cuando se hace clic.
// Adds an event to the button with id 'clear-btn' to clear the content of the results div when clicked.
document.getElementById("clear-btn").addEventListener("click", function() {

    // Limpia el contenido del div con id 'results-div'.
    // Clears the content of the div with id 'results-div'.
    document.getElementById("results-div").textContent = "";
});
