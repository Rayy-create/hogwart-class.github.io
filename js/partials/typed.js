document.addEventListener('DOMContentLoaded', (event) => {
  const initTyped = () => {
    const typed = new Typed(".h1-typed", {
      // kata h1-type
      strings: [
      "Egrimelve",
      "SMANSA",
      "Family",
      "Creative",
      "Innovative",
      "Cheerful"],
      typeSpeed: 75,
      loop: true,
      backSpeed: 50,
      smartBackspace: false
    });
  };
  initTyped();
});