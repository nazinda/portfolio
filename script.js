document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    fetch("https://formspree.io/f/xwvbdgwe", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: this.name.value,
            email: this.email.value,
            message: this.message.value
        })
    })
    .then(() => {
        alert("Message sent! Thank you for reaching out!");
        this.reset();
    })
    .catch(() => {
        alert("Failed to send message. Please try again!");
    });
});

const menuToggle = document.getElementById("menuToggle");
const links = document.querySelector(".links");

menuToggle.addEventListener("click", () => {
    links.classList.toggle("active");
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // animate once
            }
        });
    },
    {
        threshold: 0.15
    }
);

reveals.forEach(el => observer.observe(el));
