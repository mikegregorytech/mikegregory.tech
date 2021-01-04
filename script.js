document.addEventListener('DOMContentLoaded', (event) => {
  // TODO figure out formatting for parent pages
  // TODO add breadcrumb navigation (with guillemets!)
  // TODO add anchor links to headers
  // TODO add headers to table of contents
  // TODO add links to prev/parent/next pages using base files
  // TODO figure out storage/parsing scheme for pages
});

window.onload = function() {
  // Expand horizontal spacing if a scrollbar is encroaching
  if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {
    document.body.style.marginRight = 0;
    document.querySelector('footer').style.width = 'calc(100% + 8px)';
  }  
  
  // Handle visibility of footer links where applicable
  var prevLink = document.getElementById('previous-page');
  var parentLink = document.getElementById('parent-section');
  var nextLink = document.getElementById('next-page');

  if (prevLink.pathname != window.location.pathname) {
    prevLink.style.visibility = 'visible';
  }

  if (parentLink.pathname != window.location.pathname) {
    parentLink.style.visibility = 'visible';
  }

  if (nextLink.pathname != window.location.pathname) {
    nextLink.style.visibility = 'visible';
  }
};

// Display or hide "Back to top" link based on scroll position
window.addEventListener('scroll', (event) => {
  var linkToTop = document.getElementById('back-to-top')

  if (pageYOffset > (document.documentElement.clientHeight / 2)) {
    linkToTop.style.opacity = 1;
    linkToTop.style.visibility = 'visible';
  } else {
    linkToTop.style.opacity = 0;
    linkToTop.style.visibility = 'hidden';
  }
});