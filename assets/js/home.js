(function () {
  function initPublicationFilters() {
    var filters = document.querySelectorAll(".publication-filter");
    var cards = document.querySelectorAll(".publication-card");

    filters.forEach(function (filter) {
      filter.addEventListener("click", function () {
        var target = filter.getAttribute("data-filter");

        filters.forEach(function (item) {
          item.classList.toggle("is-active", item === filter);
        });

        cards.forEach(function (card) {
          var shouldShow = target === "all" || card.getAttribute("data-category") === target;
          card.classList.toggle("is-hidden", !shouldShow);
        });
      });
    });
  }

  function initAuthorToggles() {
    document.querySelectorAll(".author-toggle").forEach(function (button) {
      button.addEventListener("click", function () {
        var authors = button.closest(".publication-authors");
        if (!authors) {
          return;
        }

        var compact = authors.querySelector(".publication-authors__compact");
        var full = authors.querySelector(".publication-authors__full");

        if (compact && full) {
          compact.hidden = true;
          full.hidden = false;
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initPublicationFilters();
    initAuthorToggles();
  });
})();
