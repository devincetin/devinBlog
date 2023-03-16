var io = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden, .noblurhidden');
hiddenElements.forEach((el) => io.observe(el));



var observer = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('interaction');
    } else {
      entry.target.classList.remove('interaction');
    }
  });
});

const transElements = document.querySelectorAll('.title-img');
transElements.forEach((el) => observer.observe(el));
