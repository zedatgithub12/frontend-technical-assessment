// Fixed DragDrop implementation
export class DragDrop {
  constructor() {
    // Local state - no globals
    this.state = {
      isDragging: false,
      currentItem: null,
      offsetX: 0,
      offsetY: 0,
      ghost: null,
    };

    // Correct DOM queries
    this.items = Array.from(document.querySelectorAll(".draggable-item"));
    this.dropZones = Array.from(document.querySelectorAll(".drop-zone"));

    // Bind handlers
    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerMove = this.onPointerMove.bind(this);
    this.onPointerUp = this.onPointerUp.bind(this);
  }

  init() {
    // Error handling
    if (!this.items.length || !this.dropZones.length) return;

    // Correct event binding
    this.items.forEach((item) => {
      item.addEventListener("pointerdown", this.onPointerDown);
    });
  }

  onPointerDown(e) {
    const item = e.currentTarget;
    e.preventDefault();

    this.state.isDragging = true;
    this.state.currentItem = item;

    const rect = item.getBoundingClientRect();
    this.state.offsetX = e.clientX - rect.left;
    this.state.offsetY = e.clientY - rect.top;
    item.classList.add("dragging");

    // ghosted item view
    const ghost = item.cloneNode(true);
    ghost.classList.add("dragged");
    ghost.style.position = "fixed";
    ghost.style.pointerEvents = "none";
    ghost.style.width = `${rect.width}px`;

    document.body.appendChild(ghost);
    this.state.ghost = ghost;

    window.addEventListener("pointermove", this.onPointerMove);
    window.addEventListener("pointerup", this.onPointerUp);
  }

  onPointerMove(e) {
    if (!this.state.isDragging || !this.state.ghost) return;
    const x = e.clientX - this.state.offsetX;
    const y = e.clientY - this.state.offsetY;

    this.state.ghost.style.left = `${x}px`;
    this.state.ghost.style.top = `${y}px`;

    const elem = document.elementFromPoint(e.clientX, e.clientY);
    const zone = elem ? elem.closest(".drop-zone") : null;

    this.dropZones.forEach((z) => z.classList.remove("drop-over"));
    if (zone) {
      zone.classList.add("drop-over");
    }
  }

  onPointerUp(e) {
    if (!this.state.isDragging) return;

    const elem = document.elementFromPoint(e.clientX, e.clientY);
    const zone = elem ? elem.closest(".drop-zone") : null;

    if (zone && this.state.currentItem) {
      zone.appendChild(this.state.currentItem);
    }

    if (this.state.currentItem) {
      this.state.currentItem.classList.remove("dragging");
    }

    // Proper event handling with cleanup
    if (this.state.ghost) {
      this.state.ghost.remove();
      this.state.ghost = null;
    }

    this.dropZones.forEach((z) => z.classList.remove("drop-over"));

    this.state.isDragging = false;
    this.state.currentItem = null;

    window.removeEventListener("pointermove", this.onPointerMove);
    window.removeEventListener("pointerup", this.onPointerUp);
  }
}
