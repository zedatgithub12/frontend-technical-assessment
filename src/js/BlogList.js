/**
 * Blog List Component (partial implementation)
 * Candidates must complete: sorting, filtering, search, robust error handling, and caching.
 */
export class BlogList {
  constructor(container) {
    this.container = container;
    this.listContainer = container.querySelector(".blog-list-content");
    this.loadingIndicator = container.querySelector(".loading-indicator");
    this.errorContainer = container.querySelector(".error-container");

    this.sortSelect = container.querySelector(".sort-select");
    this.filterSelect = container.querySelector(".filter-select");
    this.searchInput = container.querySelector(".search-input");

    this.apiUrl = "https://frontend-blog-lyart.vercel.app/blogsData.json";
    this.items = [];
    this.filteredItems = [];
    this.page = 1;
    this.perPage = 10;

    // Bind handlers
    this.onSortChange = this.onSortChange.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onSearchInput = this.onSearchInput.bind(this);
  }

  async init() {
    try {
      this.showLoading();
      await this.fetchData();
      this.setupEventListeners();
      this.render();
    } catch (err) {
      this.showError(err);
    } finally {
      this.hideLoading();
    }
  }

  async fetchData() {
    // TODO (candidate): add basic caching and retry logic
    try {
      const cached = localStorage.getItem("blogData");
      const cacheTime = localStorage.getItem("blogDataTime");
      const now = Date.now();
      if (cached && cacheTime && now - cacheTime < 15 * 60 * 1000) {
        this.items = JSON.parse(cached);
      } else {
        const res = await fetch(this.apiUrl);
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error("Unexpected API response");
        this.items = data;
      }
      this.filteredItems = [...this.items];
      localStorage.setItem("blogData", JSON.stringify(this.items));
      localStorage.setItem("blogDataTime", now.toString());
    } catch (err) {
      throw new Error("Error fetching data: " + err.message);
    }
  }

  setupEventListeners() {
    this.sortSelect?.addEventListener("change", this.onSortChange);
    this.filterSelect?.addEventListener("change", this.onFilterChange);
    let t;
    this.searchInput?.addEventListener("input", (e) => {
      clearTimeout(t);
      t = setTimeout(() => this.onSearchInput(e), 250);
    });
  }

  render() {
    const end = this.page * this.perPage;
    const slice = this.filteredItems.slice(0, end);
    this.listContainer.innerHTML = slice
      .map(
        (item) => `
            <article class=\"blog-item\">\n                <img src=\"${
              item.image
            }\" alt=\"\" class=\"blog-image\" />\n                <div class=\"blog-content\">\n                    <h3 class=\"blog-title\">${
          item.title
        }</h3>\n                    <div class=\"blog-meta\">\n                        <span class=\"blog-author\">${
          item.author
        }</span>\n                        <time class=\"blog-date\">${new Date(
          item.published_date
        ).toLocaleDateString()}</time>\n                        <span class=\"blog-reading-time\">${
          item.reading_time
        }</span>\n                    </div>\n                    <p class=\"blog-excerpt\">${
          item.content
        }</p>\n                    <div class=\"blog-tags\">${(item.tags || [])
          .map((t) => `<span class=\"tag\">${t}</span>`)
          .join("")}</div>\n                </div>\n            </article>
        `
      )
      .join("");

    if (slice.length === 0) {
      this.listContainer.innerHTML = '<p class="no-results">No blogs found</p>';
    }
  }

  // TODO (candidate): implement sorting
  onSortChange(e) {
    const by = e.target.value;

    // Implement sorting by: date, reading_time, category
    // After sorting, reset page to 1 and call this.render()

    if (by === "date") {
      this.filteredItems.sort(
        (a, b) => new Date(b.published_date) - new Date(a.published_date)
      );
    } else if (by === "reading_time") {
      this.filteredItems.sort((a, b) => a.reading_time - b.reading_time);
    } else if (by === "category") {
      this.filteredItems.sort((a, b) => {
        if (a.category < b.category) return -1;
        if (a.category > b.category) return 1;
        return 0;
      });
    } else {
      // Default, no sorting
      this.filteredItems = [...this.items];
    }
    this.page = 1;
    this.render();
  }

  // TODO (candidate): implement filtering
  onFilterChange(e) {
    const val = e.target.value; // Gadgets | Startups | Writing | ''
    // Filter this.items by category or tags to create this.filteredItems
    // After filtering, reset page to 1 and call this.render()
    if (!val) {
      this.filteredItems = [...this.items];
    } else {
      this.filteredItems = this.items.filter(
        (item) =>
          (item?.category && item.category === val) ||
          (item?.tags && item.tags.includes(val))
      );
    }
    this.page = 1;
    this.render();
  }

  // TODO (candidate): implement search by title
  onSearchInput(e) {
    const q = (e.target.value || "").toLowerCase();
    // Filter by title (and optionally content) using q
    // After filtering, reset page to 1 and call this.render()

    if (!q) {
      this.filteredItems = [...this.items];
    } else {
      this.filteredItems = this.items.filter(
        (item) => item.title && item.title.toLowerCase().includes(q)
      );
    }
    this.page = 1;
    this.render();
  }

  showLoading() {
    this.loadingIndicator?.classList.remove("hidden");
  }
  hideLoading() {
    this.loadingIndicator?.classList.add("hidden");
  }
  showError(err) {
    if (!this.errorContainer) return;
    this.errorContainer.classList.remove("hidden");
    this.errorContainer.textContent = `Error: ${err.message}`;
  }
}
