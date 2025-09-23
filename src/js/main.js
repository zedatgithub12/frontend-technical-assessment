// Entry point - implement your solution here
import { Navigation } from "./navigation.js";
document.addEventListener("DOMContentLoaded", () => {
  // Initialize your components
  const navigation = document.querySelector(".nav"); // first we check if nav exist in the DOM
  if (navigation) {
    // Initialize Navigation only if nav element is present
    const navInstance = new Navigation(navigation);
    navInstance.init();
  }
});
