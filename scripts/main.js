(function () {
  const slider = tns({
    container: ".my-slider",
    items: 1,
    autoplay: true,
    controls: false,
    responsive: {

      640: {
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
