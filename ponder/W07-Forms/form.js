// retrieve the form from the DOM

const form = document.querySelector("#fsyForm");

// add an event listener to the form's submit event
form.addEventListener("submit", function(event) {
    event.preventDefault();
    output.textContent = "";

    console.log(form.firstName.value, form.lastName.value, form.email.value);

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.travelRange.value;
    const availableDate = form.availableDate.value.trim();
    const selectedCampuses = getSelectedCampuses();
    const note = form.note.value.trim();
})
