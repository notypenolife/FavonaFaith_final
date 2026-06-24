function thankyou() {
    alert("Thank you for your message!");
}

document.getElementById("contactform").addEventListener("submit"), function(event) {
    event.preventDefault();
    thankyou();
    this.reset();

};