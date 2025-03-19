# Telephone Number Validator

Este proyecto es una aplicación web que permite a los usuarios ingresar un número de teléfono de EE. UU. y verificar si es válido según un formato específico. La aplicación utiliza una expresión regular para validar el número y muestra si es válido o no en la interfaz de usuario.

## Estructura del Proyecto

### Archivos principales:
- **index.html**: Contiene la estructura básica de la interfaz de usuario. Incluye un campo de entrada donde el usuario puede ingresar un número de teléfono, dos botones para verificar y limpiar el campo, y un área para mostrar el resultado de la validación.
  
- **script.js**: Contiene la lógica que maneja la validación del número de teléfono. Cuando el usuario ingresa un número y hace clic en el botón de "Check", el número se valida mediante una expresión regular. Si el número es válido, muestra un mensaje en el área de resultados indicando que es válido; si no, muestra un mensaje indicando que es inválido.

- **styles.css**: Define el estilo de la interfaz, incluyendo los colores, márgenes, bordes, y el formato de los botones y campos de entrada para que la aplicación sea visualmente agradable y fácil de usar.

### Funcionalidad

1. **Entrada de número de teléfono**: El usuario puede ingresar un número de teléfono de EE. UU. en un campo de entrada.
2. **Validación del número**: Al hacer clic en el botón "Check", el número ingresado se valida usando una expresión regular que asegura que el formato sea el correcto (por ejemplo, `(123) 456-7890` o `123-456-7890`).
3. **Mostrar resultados**: El resultado de la validación (si el número es válido o inválido) se muestra debajo del campo de entrada.
4. **Limpiar los resultados**: Al hacer clic en el botón "Clear", el área de resultados se limpia, permitiendo que el usuario ingrese un nuevo número.

### Estilo y Diseño

- El proyecto usa un diseño sencillo y centrado, con un contenedor blanco que tiene sombra para destacar la sección de validación.
- Los botones y el campo de entrada tienen un diseño limpio y accesible, con efectos de hover en los botones para mejorar la experiencia de usuario.

### Requisitos

- Navegador web moderno.
- No requiere backend o servidor; funciona completamente en el lado del cliente con HTML, CSS y JavaScript.

<br>


---
<br>

This project is a web application that allows users to enter a US phone number and verify if it is valid according to a specific format. The application uses a regular expression to validate the number and displays whether it is valid or not in the user interface.

## Project Structure

### Main Files:
- **index.html**: Contains the basic structure of the user interface. It includes an input field where the user can enter a phone number, two buttons to check and clear the field, and an area to display the validation result.
  
- **script.js**: Contains the logic that handles the phone number validation. When the user enters a number and clicks the "Check" button, the number is validated using a regular expression. If the number is valid, it displays a message in the results area indicating it is valid; otherwise, it shows a message indicating it is invalid.

- **styles.css**: Defines the style of the interface, including colors, margins, borders, and the format of the buttons and input fields to make the application visually appealing and user-friendly.

### Functionality

1. **Phone Number Input**: The user can enter a US phone number in an input field.
2. **Number Validation**: When the "Check" button is clicked, the entered number is validated using a regular expression that ensures it follows the correct format (e.g., `(123) 456-7890` or `123-456-7890`).
3. **Display Results**: The validation result (whether the number is valid or invalid) is displayed beneath the input field.
4. **Clear Results**: When the "Clear" button is clicked, the results area is cleared, allowing the user to enter a new number.

### Style and Design

- The project uses a simple, centered design with a white container that has shadow to highlight the validation section.
- The buttons and input field are clean and accessible, with hover effects on the buttons to enhance the user experience.

### Requirements

- Modern web browser.
- No backend or server required; it works completely on the client side with HTML, CSS, and JavaScript.
