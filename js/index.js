const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    const sectionId = menuItem.getAttribute("data-section");
    const section = document.getElementById(sectionId);
    const sectionOffset = section.offsetTop;
    const headerHeight = 60;
    const offsetPosition = sectionOffset - headerHeight;

    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    menuItem.classList.add("active");

    window.scroll({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

function adjustSectionHeight() {
}

window.addEventListener("resize", adjustSectionHeight);

adjustSectionHeight();
