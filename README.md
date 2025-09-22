# Frontend Technical Assessment

## Overview
This is a 24-hour technical assessment focusing on three main components. Basic scaffolding is provided - your task is to implement the core functionality:

### 1. Navigation Component
- Track visible sections using Intersection Observer
- Implement smooth scrolling
- Handle mobile menu toggle
- Add keyboard navigation
- Make it responsive

### 2. Drag and Drop
- Implement HTML5 drag and drop
- Add touch support for mobile
- Create visual feedback
- Handle proper cleanup

### 3. Blog List
- Fetch blog data from: `https://frontend-blog-lyart.vercel.app/blogsData.json`
- Implement pagination (10 items/page)
- Add sorting and filtering
- Handle loading & error states

#### Blog API Details
```javascript
// Example API Response Structure
{
  "id": 52,
  "title": "The Xencelabs Pen Display 24",
  "image": "https://techcrunch.com/wp-content/uploads/2023/10/Xencelabs-Pen-Display-24-6.jpg",
  "category": "Gadgets",
  "author": "Darrell Etherington",
  "authorPic": "author1.jpg",
  "published_date": "2023-10-01",
  "reading_time": "6 minutes",
  "content": "Article content here...",
  "tags": ["Startups", "Writing"]
}
```

##### Required Features:
- Sort by: date, reading time, category
- Filter by: category, tags
- Show loading states during fetch
- Handle and display error states
- Cache responses for better performance

## Project Structure
The project includes scaffolding to help you get started:
- HTML structure with proper classes
- Base CSS with responsive requirements
- JavaScript classes with method stubs

## Accessibility Requirements
Each component should be accessible:
- Keyboard navigation
- ARIA attributes
- Screen reader support
- Focus management

## Getting Started
1. Clone this repository
2. Create a new branch: `feature/your-solution`
3. Review the starter code and understand the existing structure
4. Complete the tasks below
5. Submit a Pull Request

## Project Structure
The project includes a basic setup with:
- HTML structure for all components
- Base CSS styles (non-responsive)
- JavaScript class scaffolding with TODOs

## Git Workflow Requirements

### 1. Initial Implementation
1. Create your solution branch from main:
   ```bash
   git checkout -b feature/your-solution main
   ```
2. Implement your solution following requirements
3. Commit your changes with clear messages

### 2. Integration Challenge
After your implementation, integrate with existing code:

1. **Navigation Feature (Rebase)**
   ```bash
   git rebase feature/navigation
   ```
   - Handle conflicts preserving your implementation
   - Clean, linear history for core navigation

2. **Drag & Drop Feature (Merge)**
   ```bash
   git merge feature/drag-drop
   ```
   - Resolve conflicts keeping your implementation
   - Preserve feature development history

### 3. Submission
- Push your branch after handling conflicts
- Include conflict resolution strategy in PR

## Tasks

### 1. Navigation Component
Implement intersection observer-based navigation by completing the `Navigation` class:
- Implement `initializeObserver()` to track visible sections
- Add smooth scrolling in `scrollToSection()`
- Implement keyboard navigation in `setupEventListeners()`
- Add ARIA attributes for accessibility
- Make the navigation responsive for mobile devices

### 2. Drag & Drop Implementation
Complete the `DragDrop` class to create an accessible drag and drop interface:
- Implement HTML5 drag and drop events
- Add touch support for mobile devices
- Create drag previews and visual feedback
- Implement ARIA attributes and keyboard controls
- Handle drag animation performance

### 3. Virtual List
Complete the `VirtualList` class to efficiently render large datasets:
- Calculate and maintain visible item range
- Implement DOM recycling for performance
- Handle smooth scrolling and updates
- Add loading states and error handling
- Optimize render performance

### 4. Responsive Design & Accessibility
Enhance the base implementation with:
- Responsive layouts using CSS media queries
- Touch-friendly interactions
- Keyboard navigation support
- ARIA labels and roles
- High contrast mode support

## Code Guidelines
- Use ES2015+ features appropriately
- Maintain clean code organization
- Add JSDoc comments for methods
- Handle errors gracefully
- Clean up resources properly

## Evaluation Criteria
- Code quality and organization
- Feature completeness
- Performance optimization
- Accessibility implementation
- Responsive design
- Documentation quality

## Testing Requirements
Ensure your implementation:
- Works across modern browsers
- Functions on both desktop and mobile
- Handles errors gracefully
- Performs well with large datasets
- Is fully keyboard accessible

## Submission Checklist
Your PR should include:
- Completed implementation of all classes
- Documentation of your approach
- Performance optimizations
- Accessibility features
- Responsive design implementation
