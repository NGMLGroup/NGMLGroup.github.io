(function () {
  function getPreferredTheme() {
    // Default to dark theme unless user's system explicitly prefers light
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  }

  function setThemeEffective(theme) {
    document.documentElement.dataset.themeEffective = theme;

    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      var next = theme === 'dark' ? 'light' : 'dark';
      toggle.setAttribute('aria-label', 'Switch to ' + next + ' mode');
      toggle.setAttribute('title', 'Switch to ' + next + ' mode');
    }
  }

  function initThemeToggle() {
    var storedTheme = document.documentElement.dataset.theme;
    var effectiveTheme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : getPreferredTheme();

    setThemeEffective(effectiveTheme);

    var prefersDark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
    if (prefersDark && !storedTheme) {
      prefersDark.addEventListener('change', function () {
        setThemeEffective(getPreferredTheme());
      });
    }

    var toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
      var current = document.documentElement.dataset.themeEffective || getPreferredTheme();
      var next = current === 'dark' ? 'light' : 'dark';

      document.documentElement.dataset.theme = next;
      document.documentElement.dataset.themeEffective = next;

      try {
        localStorage.setItem('theme', next);
      } catch (e) {
        // no-op
      }

      setThemeEffective(next);
    });
  }

  function initMobileNavCloseOnClick() {
    var nav = document.querySelector('.site-nav');
    var toggle = document.getElementById('nav-toggle');
    if (!nav || !toggle) return;

    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('.page-link').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 768) {
          nav.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  function initNewsCarousel() {
    var newsList = document.querySelector('.news-list');
    if (!newsList) return;

    var items = Array.prototype.slice.call(newsList.querySelectorAll('li'));
    if (items.length === 0) return;

    var currentIndex = 0;

    function setActive(index) {
      items.forEach(function (item, i) {
        item.classList.toggle('is-active', i === index);
      });

      // Keep layout stable while swapping items
      window.requestAnimationFrame(function () {
        var active = items[index];
        if (active) {
          newsList.style.minHeight = active.offsetHeight + 'px';
        }
      });
    }

    setActive(0);

    if (items.length < 2) return;

    window.setInterval(function () {
      currentIndex = (currentIndex + 1) % items.length;
      setActive(currentIndex);
    }, 6000);

    window.addEventListener('resize', function () {
      setActive(currentIndex);
    });
  }

  function initBlogToggle() {
    var btnBlog = document.getElementById('btn-blog');
    var btnSocial = document.getElementById('btn-social');
    var sectionBlog = document.getElementById('section-blog');
    var sectionSocial = document.getElementById('section-social');

    if (!btnBlog || !btnSocial || !sectionBlog || !sectionSocial) return;

    function show(section) {
      var isBlog = section === 'blog';
      sectionBlog.hidden = !isBlog;
      sectionSocial.hidden = isBlog;

      btnBlog.classList.toggle('active', isBlog);
      btnSocial.classList.toggle('active', !isBlog);
    }

    btnBlog.addEventListener('click', function () {
      show('blog');
    });

    btnSocial.addEventListener('click', function () {
      show('social');
    });

    // Ensure consistent initial state
    show(btnSocial.classList.contains('active') ? 'social' : 'blog');
  }

  function initBibtexToggle() {
    document.querySelectorAll('[data-bibtex-target]').forEach(function (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault();

        var targetId = button.getAttribute('data-bibtex-target');
        if (!targetId) return;

        var entry = document.getElementById(targetId);
        if (!entry) return;

        entry.classList.toggle('is-open');
      });
    });
  }

  function initAuroraCanvas() {
    var canvas = document.getElementById('aurora-canvas');
    if (!canvas) return;

    var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    var context = canvas.getContext('2d');
    var particles = [];
    var dpr = window.devicePixelRatio || 1;

    var palette = ['#38bdf8', '#10b981', '#a78bfa'];
    var particleCount = 70;
    var maxDistance = 180;
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var themeEffective = document.documentElement.dataset.themeEffective;
    var isLight = themeEffective
      ? themeEffective === 'light'
      : !prefersDark;
    var lineBaseAlpha = isLight ? 0.6 : 0.4;
    var particleAlpha = isLight ? 'ff' : 'dd';
    var compositeMode = isLight ? 'source-over' : 'lighter';

    function resize() {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {
      particles = [];
      for (var i = 0; i < particleCount; i += 1) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: 2 + Math.random() * 3.5,
          color: palette[i % palette.length]
        });
      }
    }

    function draw() {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.globalCompositeOperation = compositeMode;

      particles.forEach(function (particle) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -80) particle.x = window.innerWidth + 80;
        if (particle.x > window.innerWidth + 80) particle.x = -80;
        if (particle.y < -80) particle.y = window.innerHeight + 80;
        if (particle.y > window.innerHeight + 80) particle.y = -80;

        context.beginPath();
        context.fillStyle = particle.color + particleAlpha;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      });

      for (var i = 0; i < particles.length; i += 1) {
        for (var j = i + 1; j < particles.length; j += 1) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            var alpha = (1 - distance / maxDistance) * lineBaseAlpha;
            context.strokeStyle = 'rgba(56, 189, 248,' + alpha.toFixed(3) + ')';
            context.lineWidth = 1.2;
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', function () {
      resize();
      createParticles();
    });
  }


  document.addEventListener('DOMContentLoaded', function () {
    initThemeToggle();
    initAuroraCanvas();
    initMobileNavCloseOnClick();
    initNewsCarousel();
    initBlogToggle();
    initBibtexToggle();
  });
})();
