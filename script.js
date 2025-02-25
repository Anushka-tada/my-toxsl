document.addEventListener('scroll', function() {
    var content = document.querySelector('.scroll-content');
    var contentPosition = content.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;
  
    if (contentPosition < screenPosition) {
      content.classList.add('show');
    }
  });
  

  document.addEventListener('scroll', function() {
    var content = document.querySelector('.indux-text');
    var contentPosition = content.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;
  
    if (contentPosition < screenPosition) {
      content.classList.add('show');
    }
  });
  
  document.addEventListener('scroll', function() {
    var content = document.querySelector('.indus-images');
    var contentPosition = content.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;
  
    if (contentPosition < screenPosition) {
      content.classList.add('show');
    }
  });
  

  // script.js
document.addEventListener('DOMContentLoaded', function() {
  const slideInElements = document.querySelectorAll('.slide-in-right');

  const handleScroll = () => {
      slideInElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
              el.classList.add('visible');
          } else {
              // el.classList.remove('visible');
          }
      });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger the scroll handler to set initial state
});


// script for counting till 50
// script.js


document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('.image-head');

  const handleScroll = () => {
      counters.forEach(counter => {
          const rect = counter.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && !counter.classList.contains('animated')) {
              counter.classList.add('visible', 'animated');
              animateCounter(counter);
          }
      });
  };

  const animateCounter = (counter) => {
      const target = +counter.getAttribute('data-target');
      const duration = 1000; // 1 second animation
      const stepTime = Math.abs(Math.floor(duration / target));
      let count = 0;

      const updateCount = () => {
          count++;
          counter.textContent = count + "+";
          if (count < target) {
              setTimeout(updateCount, stepTime);
          }
      };

      updateCount();
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger the scroll handler to set the initial state
});




// center div script 

// script.js
document.addEventListener('DOMContentLoaded', function() {
  const centerDiv = document.querySelector('.center-div');

  const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;

      // Calculate the new width based on the scroll position
      const newWidth = 300 + (scrollPosition / maxScroll) * 700; // Adjust the 700 value as needed for the range

      // Set the new width with a max limit
      centerDiv.style.width = `${Math.min(newWidth, 1000)}px`; // 1000px is the max width
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial call to set the width based on the initial scroll position
});
