const form = document.getElementById('mc-embedded-subscribe-form');
form.addEventListener("change",() => {
    document.getElementById('mc-embedded-subscribe').disabled = !form.checkValidity()
});