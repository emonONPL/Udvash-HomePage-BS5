$(document).ready(function () {
  // ----- Navbar -----

  $(".navbar-toggler").click(function () {
    $(".navbar-toggler-icon").toggleClass("d-none");
    $(".fa-xmark").toggleClass("d-none");
  });

  // ----- Success Section -----

  let animated = false;

  function animateCounters() {
    Array.from($(".success-title-count")).forEach((element) => {
      let currentValue = 0;
      const maxValue = parseInt(element.textContent);
      const time = 3000;
      const countInterval = Math.ceil((maxValue / time) * 10);

      $(element).text(currentValue);

      let interval = setInterval(() => {
        currentValue += countInterval;
        if (currentValue >= maxValue) {
          currentValue = maxValue;
          clearInterval(interval);
        }
        $(element).text(currentValue);
      }, 10);
    });
  }

  function isInViewport($element) {
    const elementTop = $element.offset().top;
    const elementBottom = elementTop + $element.outerHeight();
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  $(window).on("scroll", function () {
    if (!animated && isInViewport($("#success-counter"))) {
      animateCounters();
      animated = true;
    }
  });
});
