(function ($) {
  "use strict";

  // Submenu dropdown toggler

  if ($(".main-menu li.menu-item-has-children ul").length) { //if more than one item
    $(".main-menu li.menu-item-has-children").append( //add item has children
      '<div class="dropdown-btn"><i class="flaticon flaticon-arrow-down-sign-to-navigate"></i></div>' //add arrow icon
    );

    // Dropdown Button
    $(".main-menu li.menu-item-has-children .dropdown-btn").on(
      "click", //when clicked
      function () {
        $(this).prev("ul").slideToggle(500); //activate the ul slide toggle with speed 500
      }
    );

    // Disable dropdown parent link
    $(
      ".main-menu .navigation li.menu-item-has-children > a, .hidden-bar .side-menu li.menu-item-has-children > a"
    ).on("click", function () {
      e.preventDefault(); //stop the parents link from working (prevents click)
    });
  }

  // mobile nav hide / show
  if ($(".mobile-menu").length) {
    //create variable with selector
    var mobileMenuContent = $("#top-navigation .navigation").html();
//append the variable above
    $(".mobile-menu .navigation").append(mobileMenuContent);
//append the content
    $(".sticky-header .navigation").append(mobileMenuContent);
//on clicking the close menu remove menu visible
    $(".mobile-menu .close-btn").on("click", function () {
      $("body").removeClass("mobile-menu-visible");
    });

    // Dropdown Button
    $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
      "click",
      function () {
        $(this).prev("ul").slideToggle(500);
      }
    );

    // Menu Toggle button
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    // Menu Toggle button
    $(".mobile-menu .menu-backdrop, .mobile-menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      }
    );
  }
})(jQuery);
