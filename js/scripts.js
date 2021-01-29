let $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

let $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

let createElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.setAttribute('class', className);

  if (text) {
    element.textContent = text;
  }

  return element;
};

let elUserPic = $_('.user-pic');
let elAuthor = $_('.author');
let elText = $_('.testimonials-text');

let elControllers = document.querySelectorAll('.controller');
let count = 0;

let quotes = [
  {
    author: `Albert Einstein`,
    text: `There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.`,
    img: `img/1.jpg`
  },
  {
    author: `Mark Twain`,
    text: `Good friends, good books, and a sleepy conscience: this is the ideal life.`,
    img: `img/2.jpg`
  },
  {
    author: `Pablo Picasso`,
    text: `Everything you can imagine is real.`,
    img: `img/3.jpeg`
  },
  {
    author: `Bob Marley`,
    text: `Who are you to judge the life I live?
    I know I'm not perfect
    -and I don't live to be-
    but before you start pointing fingers...
    make sure you hands are clean!`,
    img: `img/4.jpg`
  },
  {
    author: `Emmanuel Macron`,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis ullam cum! Vel, nostrum hic eius suscipit, dolorum deleniti cupiditate omnis enim consectetur sequi optio?`,
    img: `img/5.jpg`
  }
];

function getRandomNumber () {
  return Math.floor(Math.random() * quotes.length);
}
console.log(getRandomNumber());

function nextTestemonials (e) {
  if(e.target.classList.contains('left-btn')) {
    var randomNumber = getRandomNumber();
    elAuthor.textContent = quotes[randomNumber].author;
    elText.textContent = quotes[randomNumber].text;
    elUserPic.src = quotes[randomNumber].img;
  }
  if(e.target.classList.contains('right-btn')) {
    var randomNumber = getRandomNumber();
    elAuthor.textContent = quotes[randomNumber].author;
    elText.textContent = quotes[randomNumber].text;
    elUserPic.src = quotes[randomNumber].img;
  }
}


elControllers.forEach((btn) => {
  btn.addEventListener('click', nextTestemonials);
})