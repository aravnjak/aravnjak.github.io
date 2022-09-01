var goTo = (elementId) => {
  document.getElementById(elementId).scrollIntoView({ 
    behavior: 'smooth' 
  });

  window.location.hash = `#${elementId}`;
}

function init() {
  const location = window.location.hash;

  if (location) {
    setTimeout(() => {
      document.getElementById(location.substring(1)).scrollIntoView(true);
    }, 200);
  }
}
