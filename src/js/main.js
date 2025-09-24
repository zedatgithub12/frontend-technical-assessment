// Your implementation code will go here
import { Navigation } from "./navigation.js";
import { DragDrop } from "./dragDrop.js";
import { BlogList } from "./BlogList.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Drag & Drop
  const dragDropContainer = document.querySelector(".drag-drop-container");
  if (dragDropContainer) {
    const dragDrop = new DragDrop();
    dragDrop.init();
  }

  // Initialize Blog List (partial)
  const blogListContainer = document.querySelector(".blog-list-container");
  if (blogListContainer) {
    const blogList = new BlogList(blogListContainer);
    blogList.init();
  }


  const navigation = document.querySelector(".nav"); // first we check if nav exist in the DOM
  if (navigation) {
    // Initialize Navigation only if nav element is present
    const navInstance = new Navigation(navigation);
    navInstance.init();
  }
  
});
