
// Get references to all the blogs and links
const blogs = document.querySelectorAll('.entry');
const links = document.querySelectorAll('.links');

// Hide all blogs except for a random one on page load
const randomBlogIndex = Math.floor(Math.random() * blogs.length);
for (let i = 0; i < blogs.length; i++) {
  if (i !== randomBlogIndex) {
    blogs[i].classList.add('hidden');
  }
}

// Set up event listeners for each link
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    // Hide all the blogs except for the one that was clicked
    for (let j = 0; j < blogs.length; j++) {
      if (j !== i) {
        blogs[j].classList.add('hidden');
      } else {
        blogs[j].classList.remove('hidden');
      }
    }
  });
}
