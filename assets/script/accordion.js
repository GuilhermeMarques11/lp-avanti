const accordionTitle = document.querySelectorAll('.accordion-title');

accordionTitle.forEach((title) => {
  title.addEventListener('click', () => {
    const accordionContents = document.querySelectorAll('.accordion-content');
    const accordionContentSibling = title.nextElementSibling;
    if (accordionContentSibling.classList.contains('active')) {
      accordionContentSibling.classList.remove('active');
      title.classList.remove('active');
    } else {
      accordionContents.forEach((content) => {
        content.classList.remove('active');
      });
      accordionContentSibling.classList.add('active');
      title.classList.add('active');
    }
  });
});
