// script.js
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navList = document.querySelector('nav ul');
  const navLinks = document.querySelectorAll('nav ul li a');

  // Toggle menu on hamburger click
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });

  // Hide menu when a nav link is clicked (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navList.classList.contains('show')) {
        navList.classList.remove('show');
      }
    });
  });

  // Modal Elements
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalImage = document.getElementById('modal-image');
  const modalDescription = document.getElementById('modal-description');
  const modalClose = document.querySelector('.modal-close');

  // Project data
  const projects = {
    "project1": {
      title: "Zero-Phase FIR Filter",
      imgSrc: "assets/images/project1.jpg",
      description: "Detailed description about your Zero-Phase FIR Filter project goes here. You can talk about goals, technology used, your role, and results."
    },
    "project2": {
      title: "FPGA Image Processing",
      imgSrc: "assets/images/project2.jpg",
      description: "Details about FPGA Image Processing project. Talk about algorithms, hardware used, challenges faced, etc."
    },
    "project3": {
      title: "Neural Net on KR260",
      imgSrc: "assets/images/project3.jpg",
      description: "Description of the Neural Net project on KR260 board. Include technologies, frameworks, and results."
    }
  };

  // Show modal when project card is clicked
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectKey = card.getAttribute('data-project');
      const project = projects[projectKey];

      if (project) {
        modalTitle.textContent = project.title;
        modalImage.src = project.imgSrc;
        modalImage.alt = project.title;
        modalDescription.textContent = project.description;
        modal.style.display = 'block';
      }
    });
  });

  // Close modal
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // *** Add scroll event listener here ***
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
