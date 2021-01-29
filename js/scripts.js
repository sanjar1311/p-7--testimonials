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

var elControllers = document.querySelectorAll('.controller');

let quotes = [
  {
    author: ``,
    text: ``,
    img: ``
  }
];


function nextTestemonials () {

}


elControllers.forEach((btn) => {
  btn.addEventListener('click', nextTestemonials);
})