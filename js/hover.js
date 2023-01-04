jQuery(document).ready(function ($) {
  $("section.menu div.content div.menuItem h2.singleCheeseBurger").hover(
    function () {
      $(this).css(
        "filter",
        "drop-shadow(0 0 10px #f9b208) drop-shadow(0 0 20px #fdd36e)"
      );
      $("section.menu div.content div.menuItem p.price.singleCheeseBurger").css(
        "filter",
        "drop-shadow(0 0 10px #f9b208) drop-shadow(0 0 20px #fdd36e)"
      );
    },
    function () {
      $(this).css("filter", "none");
      $("section.menu div.content div.menuItem p.price.singleCheeseBurger").css(
        "filter",
        "none"
      );
    }
  );

  $("section.menu div.content div.menuItem h2.doubleCheeseBurger").hover(
    function () {
      $(this).css(
        "filter",
        "drop-shadow(0 0 10px #f9b208) drop-shadow(0 0 20px #fdd36e)"
      );
      $("section.menu div.content div.menuItem p.price.doubleCheeseBurger").css(
        "filter",
        "drop-shadow(0 0 10px #f9b208) drop-shadow(0 0 20px #fdd36e)"
      );
    },
    function () {
      $(this).css("filter", "none");
      $("section.menu div.content div.menuItem p.price.doubleCheeseBurger").css(
        "filter",
        "none"
      );
    }
  );

  $("section.menu div.content div.menuItem h2.crispyChickenBurger").hover(
    function () {
      $(this).css(
        "filter",
        "drop-shadow(0 0 10px #f9b208) drop-shadow(0 0 20px #fdd36e)"
      );
      $(
        "section.menu div.content div.menuItem p.price.crispyChickenBurger"
      ).css(
        "filter",
        "drop-shadow(0 0 10px #f9b208) drop-shadow(0 0 20px #fdd36e)"
      );
    },
    function () {
      $(this).css("filter", "none");
      $(
        "section.menu div.content div.menuItem p.price.crispyChickenBurger"
      ).css("filter", "none");
    }
  );
});
