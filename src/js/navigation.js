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
  }

  onScroll() {
    this.sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const visible =
        rect.top >= -window.innerHeight / 2 &&
        rect.top <= window.innerHeight / 2;
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

  destroy() {
    // Cleanup observers and listeners
    if (this.observer) {
      this.sections.forEach((section) => this.observer.unobserve(section));
      this.observer.disconnect();
      this.observer = null;
    }

    window.removeEventListener("scroll", this.scrollHandler);
  }
}
