// ========================================
// CAREER CARD INTERACTION
// ========================================

const careerCards = document.querySelectorAll(".career-option");

careerCards.forEach(card => {

    card.addEventListener("click", () => {

        const career = card.dataset.career;

        alert(
            "Your " + career + " test drive is coming soon!\n\n" +
            "Experience the career before you choose it."
        );

    });

});


// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(8, 9, 13, 0.95)";

    } else {

        navbar.style.background = "rgba(8, 9, 13, 0.75)";

    }

});


// ========================================
// SCROLL REVEAL
// ========================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }
);


sections.forEach(section => {

    observer.observe(section);

});


// ========================================
// EXPERIENCE STEPS
// ========================================

const steps = document.querySelectorAll(".experience-step");

steps.forEach(step => {

    step.addEventListener("click", () => {

        steps.forEach(item => {

            item.classList.remove("active");

        });

        step.classList.add("active");

    });

});