// Select service from service card

function selectService(serviceName) {

    document.getElementById("service").value = serviceName;

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}


// Booking form

document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;
    let address = document.getElementById("address").value;


    if (
        name === "" ||
        phone === "" ||
        service === "" ||
        date === "" ||
        address === ""
    ) {

        alert("Please fill all the details.");

        return;
    }


    alert(
        "Thank you, " + name +
        "! Your " + service +
        " booking has been received."
    );


    document.getElementById("bookingForm").reset();

});