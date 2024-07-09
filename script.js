function decodeText() {
    const inputText = document.getElementById('inputText').value.trim();
    const decodedTextElement = document.getElementById('decodedText');

    if (inputText === "") {
        decodedTextElement.textContent = "Please enter some encoded text.";
        decodedTextElement.style.color = "red";
        return;
    }

    try {
        const decodedText = atob(inputText); // Decodifica o texto usando Base64
        decodedTextElement.textContent = decodedText;
        decodedTextElement.style.color = "black";
    } catch (e) {
        decodedTextElement.textContent = "Invalid encoded text.";
        decodedTextElement.style.color = "red";
    }
}
