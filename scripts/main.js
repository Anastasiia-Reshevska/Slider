(function () {
  const slider = tns({
    container: ".my-slider",
    items: 3,
    autoplay: true,
    controls: false,
    responsive: {
      0: {
        axis: "horizontal",
        items: 1,
      },

      640: {
        axis: "horizontal",
        items: 2,
      },

      700: {
        axis: "horizontal",
        items: 2,
      },

      900: {
        edgePadding: 10,
        gutter: 3,
        items: 3,
      },
    },
  });
})();
