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
    for (var i = 0; i < loadTops.length; i++) {
        loadTops[i].classList.add('active')
    }
}

function mobileAndTabletCheck() {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        document.querySelector('.image-wrap').classList.add('mobile')
    }
};

// requestAnimationFrame Polyfill
(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        },
            timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };
}());

if (document.readyState === "complete") {
    console.log('ready')
    loadTop()
    window.addEventListener('scroll', reveal)
    mobileAndTabletCheck()
} else {
    window.addEventListener('load', () => {
        console.log('windows loaded')
        loadTop()
        window.addEventListener('scroll', reveal)
        mobileAndTabletCheck()
    })
}

