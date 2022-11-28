
//this function is to "debounce" the checkSlide function
//so that the function doesn't run too many times.
//it'll run the func, every 20ms
//useful to use it when working with scroll animation
//to avoid animation jag
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

const sliderImages = document.querySelectorAll('.slide-in')

//will run everytime the person scrolls
function checkSlide(e) {
    //console.count(e) //shows that it runs way to much, 50 times scrolling down
    //console.log(window.scrollY)
    sliderImages.forEach(sliderImage => {
        //(window.scrollY + window.innerHeight) --> gives you the pixel level of where you currently are at the bottom
        //half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) + (sliderImage.height / 2);
        console.log(slideInAt)
        //how far the top of the image is from the top of the window
        const imageBottom = sliderImage.offsetTop + sliderImage.height
        const isHalfShown = slideInAt > sliderImage.offsetTop
        const isNotScrolledPast = window.scrollY < imageBottom
        if(isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active')
        } else {
            sliderImage.classList.remove('active')
        }

    })
}

window.addEventListener('scroll', debounce(checkSlide))

