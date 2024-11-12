window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY || 0;

    const headerImage = document.getElementById('logo-image');
    const mainHeader = document.querySelector('.main-header');
    const downHeader = document.querySelector('.down-header');
    const headerWrapper = document.querySelector('.header-wrapper');

    const scrollingText = document.querySelector(".scrolling-text");
    const wrapperScroll = document.querySelector(".scrolling-text-wrapper");

    if (scrollPosition > 0) {
        headerImage.style.transform = 'scale(0.5)';
        mainHeader.style.height = '70px';
        mainHeader.style.padding = '5px 30px';
        downHeader.style.top = '110px';
        downHeader.style.display = 'flex';
    } else {
        headerImage.style.transform = 'scale(0.7)';
        mainHeader.style.height = '130px';
        mainHeader.style.padding = '15px 30px';
        headerWrapper.style.height = '170px';
        downHeader.style.display = 'none';
    }

    function updateScrollDuration() {
        const textWidth = scrollingText.offsetWidth;
        const wrapperWidth = wrapperScroll.offsetWidth;

        const speedFactor = 0.01;
        const duration = (textWidth + wrapperWidth) * speedFactor;

        scrollingText.style.setProperty("--scroll-duration", `${duration}s`);
    }

    updateScrollDuration();

    window.addEventListener("resize", updateScrollDuration);
    const backToTopButton = document.getElementById("back_to_top");
    if (scrollPosition > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
    backToTopButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

window.dispatchEvent(new Event('scroll'));
document.querySelectorAll('.sub-navbar a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 120;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
function openModal() {
    const modal = document.getElementById('wheelModal');
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
}

function closeModal() {
    const modal = document.getElementById('wheelModal');
    modal.style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('wheelModal');
    if (event.target == modal) {
        closeModal();
    }
};

document.getElementById('klaviyo_signup_home').addEventListener('submit', function (event) {
    event.preventDefault();
    this.classList.add('submitted');
    document.querySelector('.klaviyo_form__submit').disabled = true;
});
