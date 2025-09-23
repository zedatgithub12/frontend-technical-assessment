// Global state - bad practice that will conflict with proper implementation

/**
 * Navigation implementation with several issues:
 * - Global state usage
 * - No cleanup
 * - Direct DOM manipulation
 * - Memory leaks
 */
export class Navigation {
  constructor() {
    this.sections = document.querySelectorAll("section");
    this.links = document.querySelectorAll("a");

    this.observer = null;
    this.scrollHandler = this.onScroll.bind(this);
    this.animationFrameId = null;

    window.addEventListener("scroll", this.scrollHandler, { passive: true });

    this.init();
  }

  init() {
    // IntersectionObserver with cleanup
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("active-section", entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    this.sections.forEach((section) => {
      this.observer.observe(section);
    });

    // Smooth scrolling for links
    this.links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href")?.slice(1);
        if (!targetId) return;

        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });

          // Set active class on the clicked link
          this.links.forEach((l) => l.classList.remove("active-link"));
          link.classList.add("active-link");
        }
      });
    });

    // Start animation loop
    this.startAnimationLoop();
  }

  onScroll() {
    this.sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const visible = rect.top >= 0 && rect.top <= window.innerHeight;
      section.classList.toggle("visible", visible);
      if (visible) {
        const link = Array.from(this.links).find(
          (l) => l.getAttribute("href")?.slice(1) === section.id
        );
        if (link) {
          link.classList.add("active-link");
        }
      } else {
        const link = Array.from(this.links).find(
          (l) => l.getAttribute("href")?.slice(1) === section.id
        );
        if (link) {
          link.classList.remove("active-link");
        }
      }
    });
  }

  startAnimationLoop() {
    const animate = () => {
      this.sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        section.style.transform = `translateY(${
          Math.sin(rect.top * 0.05) * 6
        }px)`;
      });
      this.animationFrameId = requestAnimationFrame(animate);
    };
    this.animationFrameId = requestAnimationFrame(animate);
  }

  destroy() {
    // Cleanup observers and listeners
    if (this.observer) {
      this.sections.forEach((section) => this.observer.unobserve(section));
      this.observer.disconnect();
      this.observer = null;
    }

    window.removeEventListener("scroll", this.scrollHandler);

    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }
}
