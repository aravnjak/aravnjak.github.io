var _waitForElTry = 10;

var waitForElement = function(selector, callback, iteration) {
  if (!iteration) {
    iteration = 0;
  }
  const elem = document.querySelector(selector)
  if (elem) {
    if (callback && typeof callback === "function") {
      callback(elem);
    }
  } else {
    if (iteration === _waitForElTry) {
      return;
    }
    setTimeout(function() {
      ++iteration;
      waitForElement(selector, callback, iteration);
    }, 200);
  }
};

