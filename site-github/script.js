document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const status = document.getElementById("form-status");
    const formData = new FormData(this);

    fetch("https://script.google.com/macros/s/AKfycbxv98I4Be3e5AC1r5jFnVQm0JT8MssCwoWSHfEBGjjeAlEmqb0QK0kPk6SHG-FuzFJdJg/exec", {
        method: "POST",
        body: formData
    })
    .then(() => {
        status.innerText = "Заявка успешно отправлена!";
        this.reset();
    })
    .catch(() => {
        status.innerText = "Ошибка отправки, попробуйте позже.";
    });
});