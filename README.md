# TB Note

TB Note is a simple, clean, and efficient note-taking application built with React and Vite. It follows clean architecture principles to provide a maintainable and scalable codebase.

## Features

- Create notes with title and body content through a dedicated Add Note page
- View detailed information for individual notes
- Archive and unarchive notes for better organization
- Dedicated page for archived notes for better separation of concerns
- Improved navigation between different sections of the application
- Enhanced search functionality with URL-based parameters and persistent search state
- 404 Not Found page for better error handling of undefined routes
- Responsive design for various screen sizes
- Clean architecture implementation with separation of concerns

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arieftb/tb-note-learning.git
   cd tb-note-learning
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Adding a Note

1. Navigate to the Add Note page
2. Fill in the title and body in the form
3. Click the "Add" button to create a new note

### Managing Notes

- **View Details**: Click on a note's title to view its detailed information
- **Archive**: Click the archive button on a note to move it to the archived notes page
- **Unarchive**: Click the unarchive button on an archived note to restore it to active notes
- **Delete**: Available on the note detail page, click the delete button to permanently remove a note
- **Navigate**: Use the navigation component to switch between active notes, archived notes, and adding new notes

### Searching Notes

Use the search bar at the top of the page to filter both active and archived notes based on keywords. The search
functionality features:

- **Persistent Search**: Search queries are preserved in the URL, allowing you to share search results or navigate back
  to previous searches
- **Maintained State**: Search state is maintained during navigation between pages
- **Consistent Experience**: The same search behavior works across both active and archived notes pages

## Project Structure

The project follows a clean architecture approach with the following structure:

```
src/
├── assets/            # Static assets
├── data/              # Data layer
│   └── source/        # Data sources
├── domain/            # Domain layer
│   ├── repositories/  # Repository interfaces
│   └── usecases/      # Business logic use cases
├── presentation/      # UI layer
│   ├── atoms/         # Basic UI components
│   ├── molecules/     # Composite components
│   ├── organisms/     # Complex components
│   ├── pages/         # Page components
│   └── templates/     # Layout templates
└── styles/            # CSS styles
```

## Technologies Used

- **React 19** - UI library
- **React Router DOM 7.6.1** - For routing and navigation
- **Vite** - Build tool and development server
- **PropTypes** - Runtime type checking for React props
- **ESLint** - For code linting and maintaining code quality
- **Clean Architecture** - For separation of concerns and maintainability

## Disclaimer

This project is used as part of my learning process in the online course [Belajar Membuat Aplikasi Web dengan React](https://www.dicoding.com/academies/403-belajar-membuat-aplikasi-web-dengan-react) from Dicoding.

## License

Copyright (c) 2025 arieftb

This project is created for educational purposes as part of an online course assignment.  
You may use this code as a reference only.  
Reusing this code for submission, plagiarism, or commercial use is strictly prohibited.
