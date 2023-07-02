function reveal() {
    var reveals = document.querySelectorAll('.reveal')
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight
        var elementTop = reveals[i].getBoundingClientRect().top
        var elementVisible = 100

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active')
        }
    }
}

function loadTop() {
    var loadTops = document.querySelectorAll('.loadTop')
    loadTops.forEach(element => {
        element.classList.add('active')
    })
}

if (document.readyState === "complete") {
    loadTop()
    window.addEventListener('scroll', reveal)
} else {
    window.addEventListener('load', () => {
        loadTop()
        window.addEventListener('scroll', reveal)
    })
}

