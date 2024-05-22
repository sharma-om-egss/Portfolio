$(document).ready(function () {
    var slider = $("#slider");
    var thumb = $("#thumb");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;
    slider
      .owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
      })
      .on("changed.owl.carousel", syncPosition);
    thumb
      .on("initialized.owl.carousel", function () {
        thumb.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
        items: slidesPerPage,
        dots: false,
        nav: true,
        item: 4,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: slidesPerPage,
        navText: [
          '<svg width="18px" height="18px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
          '<svg width="25px" height="25px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>',
        ],
        responsiveRefreshRate: 100,
      })
      .on("changed.owl.carousel", syncPosition2);
    function syncPosition(el) {
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }
      thumb
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = thumb.find(".owl-item.active").length - 1;
      var start = thumb.find(".owl-item.active").first().index();
      var end = thumb.find(".owl-item.active").last().index();
      if (current > end) {
        thumb.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
        thumb.data("owl.carousel").to(current - onscreen, 100, true);
      }
    }
    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        slider.data("owl.carousel").to(number, 100, true);
      }
    }
    thumb.on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).index();
      slider.data("owl.carousel").to(number, 300, true);
    });
  
    $(".qtyminus").on("click", function () {
      var now = $(".qty").val();
      if ($.isNumeric(now)) {
        if (parseInt(now) - 1 > 0) {
          now--;
        }
        $(".qty").val(now);
      }
    });
    $(".qtyplus").on("click", function () {
      var now = $(".qty").val();
      if ($.isNumeric(now)) {
        $(".qty").val(parseInt(now) + 1);
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const ratingContainer = document.querySelector(".rating");
  
    stars.forEach((star) => {
      star.addEventListener("click", () => {
        const value = parseInt(star.getAttribute("data-value"));
        ratingContainer.setAttribute("data-rating", value);
        updateStars();
      });
    });
  
    function updateStars() {
      const rating = parseInt(ratingContainer.getAttribute("data-rating"));
      stars.forEach((star) => {
        const value = parseInt(star.getAttribute("data-value"));
        if (value <= rating) {
          star.classList.add("active");
        } else {
          star.classList.remove("active");
        }
      });
    }
  });
  $(document).ready(function () {
    var owl = $("#owl-demo1");
  
    owl.owlCarousel({
      items: 1,
      itemsDesktop: [1000, 1],
      itemsDesktopSmall: [900, 1],
      itemsTablet: [600, 1],
      itemsMobile: [360, 1],
    });
  
    // Custom Navigation Events
    $(".next").click(function () {
      console.log("Next button clicked");
      owl.trigger("next.owl.carousel");
    });
  
    $(".prev").click(function () {
      console.log("Prev button clicked");
      owl.trigger("prev.owl.carousel");
    });
  
    $(".play").click(function () {
      console.log("Play button clicked");
      owl.trigger("play.owl.autoplay", [1000]);
    });
  
    $(".stop").click(function () {
      console.log("Stop button clicked");
      owl.trigger("stop.owl.autoplay");
    });
  });
  
  $(document).ready(function () {
    $(".carousel-control-next").click(function () {
      $(".active-tab").css("display", "block");
      $(".game-tabs").css("display", "none");
    });
    $(".carousel-control-prev").click(function () {
      $(".active-tab").css("display", "block");
      $(".game-tabs").css("display", "none");
    });
  });


  window.$crisp = [];
window.CRISP_WEBSITE_ID = "f71211da-eed7-4292-8162-ba986fe0aef9";
(function() {
    d = document;
    s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
})();

$(window).scroll(function() {
    $('.parallax-image').each(function() {
        if ($(this).offset().top < $(window).scrollTop()) {
            var difference = $(window).scrollTop() - $(this).offset().top;
            var half = (difference / 2) + 'px',
                transform = 'translate3d( 0, ' + half + ',0)';
            $(this).find('img').css('transform', transform);
        } else {
            $(this).find('img').css('transform', 'translate3d(0,0,0)');
        }
    });
});

$(document).ready(function() {
    $(".sidebar-toggle").click(function() {
        $(".sidebar").css("right", "0px");
    });
    $(".sidebar-close").click(function() {
        $(".sidebar").css("right", "-100%");
    });
});

$(document).ready(function() {
    const elements = document.querySelectorAll('.all-games-sidebar ul li');
    elements.forEach((el) => {
        el.addEventListener("click", function() {
            elements.forEach((otherEl) => {
                otherEl.classList.remove("active-tab");
            });
            el.classList.add("active-tab");
        });
    });
});

$(document).ready(function() {
    $(".reply-btn").click(function() {
        $(this).parent().siblings(".reply-comment-form").show();
    })
    $(".close-comment-box-btn").click(function() {
        $(this).parent().parent(".reply-comment-form").hide();
    })
    $(".comment-btn").click(function() {
        $(this).parent().parent().parent().siblings(".comment-reply-box-main").show();
    })
    $(".add-new-discussion").click(function() {
        $(".new-discussion-form").show();
    })
    $(".close-comment-box-btn").click(function() {
        $(".new-discussion-form").hide();
    })
})

$(document).ready(function() {
    $(".all-game-categories-mob").click(function() {
        $(".all-games-sidebar").slideToggle();
    })
})

