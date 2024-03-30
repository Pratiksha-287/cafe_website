document.addEventListener("DOMContentLoaded", function () {
  const specials = [
    "Cappuccino",
    "Chocolate Croissant",
    "Eggs Benedict",
    "Fruit Salad",
  ];

  const specialElement = document.getElementById("special-of-the-day");
  const randomSpecial = specials[Math.floor(Math.random() * specials.length)];

  specialElement.innerText = `Today's Special: ${randomSpecial}`;
});
document.addEventListener("DOMContentLoaded", function () {
  const menuSections = document.querySelectorAll(".menu-section");

  // Initialize the sections as closed
  menuSections.forEach((section) => {
    const items = section.querySelectorAll("ul li");
    items.forEach((item) => {
      item.style.display = "none";
    });

    section.addEventListener("click", () => {
      // Toggle the visibility of menu items
      items.forEach((item) => {
        if (item.style.display === "none") {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
