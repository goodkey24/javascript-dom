let midContainer = document.querySelector("div");

midContainer.id = "mid-container";

let paragrafs = document.querySelectorAll('p');

paragrafs.forEach(function (paragrafs,) {
    paragrafs.classList.add('paragraf');
});

let spans = document.querySelectorAll('span');

spans.forEach(function (spans,) {
    spans.textContent = "I am highlighted!";
});
