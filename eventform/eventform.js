



// Set minimum date to today
const today = new Date().toISOString().split('T')[0];
const dateInput = document.getElementById('event-date');
dateInput.min = today;
dateInput.value = today;


// Show student ID field when "Student" is selected
const roleSelect = document.getElementById("type");
const studentIDElement = document.getElementById("studentIDElement");

roleSelect.addEventListener("change", () => {
    studentIDElement.classList.toggle(
        "hidden",
        roleSelect.value !== "student"
    );
});

// Validate student ID input to only allow 9 digits
const studentIDInput = document.getElementById("studentID");
const errorMessage = document.querySelector("#error-messages p");
studentIDInput.addEventListener("invalid", (event) => {
    if (studentIDInput.validity.valueMissing) {
        studentIDInput.setCustomValidity("This field is required.");
    } else if (studentIDInput.validity.patternMismatch) {
        studentIDInput.setCustomValidity("Please enter a valid 9-digit student ID.");
        errorMessage.classList.toggle("hidden", false);
    
    }
});

// Clear the message when the user starts typing
studentIDInput.addEventListener("input", () => {
    studentIDInput.setCustomValidity("");
    errorMessage.classList.toggle("hidden", true);

});

// ticket generation
const form = document.getElementById("event-form");
const ticket = document.getElementById("ticket");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const type = document.getElementById("type").value;
    const eventDate = document.getElementById("event-date").value;
    const studentID = document.getElementById("studentID").value;

    ticket.innerHTML = `
            <h2>Ticket Created</h2>
            <p> ${firstName} ${lastName}</p>
            <p> ${email}</p>
            <p> ${type}</p>
            <p> ${eventDate}</p>
            ${
                type === "student"
                    ? `<p><strong>Student ID:</strong> ${studentID}</p>`
                    : ""
            }
        `;
    });    
