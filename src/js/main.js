import { Navigation } from './navigation.js';
import { DragDrop } from './dragDrop.js';
import { BlogList } from './BlogList.js';

/**
 * Initialize all components when the DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Navigation
    const navigation = new Navigation();

    // Initialize Drag & Drop
    const dragDropContainer = document.querySelector('.drag-drop-container');
    if (dragDropContainer) {
        const dragDrop = new DragDrop(dragDropContainer);
    }

    // Initialize Blog List
    const blogListContainer = document.querySelector('.blog-list-container');
    if (blogListContainer) {
        const blogList = new BlogList(blogListContainer);
    }

    // Handle cleanup
    window.addEventListener('unload', () => {
        navigation?.cleanup?.();
        dragDrop?.cleanup?.();
        blogList?.cleanup?.();
    });
});
