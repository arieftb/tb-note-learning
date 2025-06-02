# TB Note

TB Note is a simple, clean, and efficient note-taking application built with React and Vite. It follows clean architecture principles to provide a maintainable and scalable codebase.

## Features

- Create and manage notes with title and body content
- Archive and unarchive notes for better organization
- Search functionality for both active and archived notes
- Responsive design for various screen sizes
- Clean architecture implementation with separation of concerns

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tb-note.git
   cd tb-note
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
1. Fill in the title and body in the "Add New Note" section
2. Click the "Add" button to create a new note

### Managing Notes
- **Archive**: Click the archive button on a note to move it to the archived section
- **Unarchive**: Click the unarchive button on an archived note to restore it to active notes
- **Delete**: Click the delete button to permanently remove a note

### Searching Notes
Use the search bar at the top of the page to filter both active and archived notes based on keywords.

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
- **Vite** - Build tool and development server
- **PropTypes** - Runtime type checking for React props
- **Clean Architecture** - For separation of concerns and maintainability

## Disclaimer

This project is used as part of my learning process in the online course [Belajar Membuat Aplikasi Web dengan React](https://www.dicoding.com/academies/403-belajar-membuat-aplikasi-web-dengan-react) from Dicoding.

## License

Copyright (c) 2025 arieftb

This project is created for educational purposes as part of an online course assignment.  
You may use this code as a reference only.  
Reusing this code for submission, plagiarism, or commercial use is strictly prohibited.
