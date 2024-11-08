(function ()
{
  "use strict";

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop()
  {
    if (scrollTop)
    {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) =>
  {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit()
  {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);




  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e)
  {
    if (window.location.hash)
    {
      if (document.querySelector(window.location.hash))
      {
        setTimeout(() =>
        {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  //menu
  const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
  const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
  const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
  const header = document.querySelector('.header.container');

  hamburger.addEventListener('click', () =>
  {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });

  document.addEventListener('scroll', () =>
  {
    var scroll_position = window.scrollY;
    if (scroll_position > 250)
    {
      header.style.backgroundColor = '#29323c';
    } else
    {
      header.style.backgroundColor = 'transparent';
    }
  });

  menu_item.forEach((item) =>
  {
    item.addEventListener('click', () =>
    {
      hamburger.classList.toggle('active');
      mobile_menu.classList.toggle('active');
    });
  });


})();

