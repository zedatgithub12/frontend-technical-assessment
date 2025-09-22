# Frontend Technical Assessment

## Overview

## Solution Demonstration Videos
The following videos demonstrate the required functionality:

### Navigation Features
- [General Overview](https://drive.google.com/file/d/1KwMSwv47rR01mc3tRzGUtmBCWo9Byvfp/view?usp=drive_link)
  - Complete page structure and layout
  - Basic component interaction

- [Sticky Navigation & Smooth Scroll](https://drive.google.com/file/d/1UHYS6FvD8NKVFf8JPK5RagTvJc0Tdx73/view?usp=drive_link)
  - Navigation bar staying at top while scrolling
  - Smooth scrolling to sections on button click

- [Dynamic Button Highlighting](https://drive.google.com/file/d/14aCqRu_OKDWSq1yeLPAOO5UTYUE4LusF/view?usp=drive_link)
  - Navigation buttons highlighting as sections come into view
  - Active section indication

### Interactive Features
- [Drag & Drop Functionality](https://drive.google.com/file/d/13UeM2nJfwKjcMUR8d6lsQsiPTSN38ykw/view?usp=drive_link)
  - Item dragging interaction
  - Drop zone behavior
  - Animation smoothness

### Blog List Features
- [Blog List Operations](https://drive.google.com/file/d/1PU_ezhq1s3onaMSJcOwRsoz8pdz4zC5f/view?usp=drive_link)
  - Sorting functionality
  - Category and tag filtering
  - Title search implementation

## Overview
This is a 48-hour technical assessment focusing on three main components. Basic scaffolding is provided - your task is to implement the core functionality following the provided video demonstrations and screenshots. **No external packages are allowed for this assessment.**

First objective should be to ensure the entire page looks stylistically like the solution.

### 1. Navigation Component
- Create a sticky navigation header that stays at the top while scrolling
- When clicking navigation buttons, implement smooth scrolling for the components as highlighted in the video
- On scrolling down once a particular component is in view (Navigation, Drag or Blog list) highlight the corresponding button with blue as shown in the video
- Make the navigation component mobile responsive
- Improve the header code to add accessibility via keyboard

### 2. Drag and Drop
- Improve CSS styling to reflect what is seen on the screen shot
- Ensure drag and drop functionality works (when someone clicks item1, item2 or item3 they can drag it and place it in the designated section as highlighted in the video)
- Ensure animation is efficient (animations don't freeze)
- NB: No external packages allowed

### 3. Blog List
- Ensure the component looks like the video
- Ensure to render 10 elements from the external link: `https://frontend-blog-lyart.vercel.app/blogsData.json`
- Ensure there is sorting (Date, Reading time, Category) and filtering (Gadgets,Writing and Startups) by the parameters that we have on the solution

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


## Development Workflow

### Getting Started
- Fork/clone the repository
- Work in a branch with your name
- There are existing feature branches with partial implementations that you'll need to work with

### Code Integration
- You'll encounter conflicts with existing code
- Resolve these conflicts while ensuring your implementation works correctly
- Document how you handled any significant conflicts or issues

### Submission
Create a Pull Request with all your changes squashed into a single commit.

The PR description MUST follow this template:

```md
## Developer Information
- Name: [Your Name]
- Email: [Your Email]

## Implementation Summary
### Completed Features
- [List all completed features]

### Pending Items
- [List any incomplete features]

### Technical Challenges
- [Describe any blockers or issues encountered]

### Conflict Resolution
- [Explain how you resolved conflicts and ensured your solution works]

### Known Issues
- [List any known bugs, limitations or blockages found]
```

## Additional Requirements
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
- Responsive design implementation
- Documentation quality

## Testing Requirements
Ensure your implementation:
- Works across modern browsers
- Functions on both desktop and mobile
- Handles errors gracefully

## Submission Checklist
Your PR should include:
- Completed implementation of all classes
- Documentation of your approach
- Accessibility features
- Responsive design implementation

