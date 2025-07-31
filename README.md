# TB Note

TB Note is a simple, clean, and efficient note-taking application built with React 19 and Vite. It follows clean
architecture principles to provide a maintainable and scalable codebase. The application connects to the Dicoding Notes
API for data storage and authentication.

## Features

- User authentication with registration and login functionality
- Protected routes for secure access to authenticated pages
- Create notes with title and body content through a dedicated Add Note page
- View detailed information for individual notes
- Archive and unarchive notes for better organization
- Dedicated page for archived notes for better separation of concerns
- Theme switching functionality (light/dark mode) for a better user experience
- Internationalization with support for English and Indonesian languages
- Loading indicators for improved user feedback during operations
- Improved navigation between different sections of the application
- Enhanced search functionality with URL-based parameters and a persistent search state
- 404 page for better error handling of undefined routes
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

Note: This application requires an internet connection to connect to the Dicoding Notes API for authentication and data
storage.

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

### Authentication

The application includes user authentication features that connect to the Dicoding Notes API:

- **Registration**: Create a new account by providing your name, email, and password
- **Login**: Access your notes by logging in with your email and password
- **Protected Routes**: All note-related pages are only accessible to authenticated users
- **Logout**: Sign out of your account when you're done
- **Token-based**: Authentication uses JWT tokens stored in local storage

### Theme Switching

Customize your experience with theme options:

- Toggle between light and dark themes based on your preference
- Theme selection is preserved between sessions

### Language Settings

The application supports multiple languages:

- Switch between English and Indonesian languages in the settings
- All UI elements are automatically translated based on your language selection
- Language preference is saved in local storage for future sessions
- Translations are managed through a centralized translations.js file

## Project Structure

The project follows a clean architecture approach with the following structure:

```
src/
├── assets/            # Static assets
├── context/           # React Context for state management
│   ├── ThemeContext   # Theme switching functionality
│   ├── LanguageContext# Internationalization support
│   └── useTranslation # Translation hook
├── data/              # Data layer
│   ├── auth/          # Authentication data services
│   │   ├── infrastructure/  # API services for authentication
│   │   └── repositories/    # Repository implementations
│   ├── note/          # Note data services
│   │   ├── infrastructure/  # API services for notes
│   │   └── repositories/    # Repository implementations
│   ├── source/        # Data sources
│   └── translations.js# Translation strings (EN/ID)
├── domain/            # Domain layer
│   ├── auth/          # Authentication domain
│   │   ├── repositories/  # Repository interfaces
│   │   └── usecases/      # Authentication use cases
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

- **React 19.0.0** - UI library
- **React Router DOM 7.6.1** - For routing and navigation
- **Vite 6.2.0** - Build tool and development server
- **PropTypes 15.8.1** - Runtime type checking for React props
- **ESLint 9.21.0** - For code linting and maintaining code quality
- **Context API** - For state management
- **Clean Architecture** - For separation of concerns and maintainability
- **Fetch API** - For making HTTP requests to the Dicoding Notes API

## Disclaimer

This project is used as part of my learning process in the online
course [Belajar Membuat Aplikasi Web dengan React](https://www.dicoding.com/academies/403-belajar-membuat-aplikasi-web-dengan-react)
from Dicoding.

## Version

Current version: 2.2.0

The application has evolved through several versions:

- 1.0.0: Initial release with basic note-taking functionality
- 2.0.0: Added detailed view and improved routing
- 2.1.0: Added 404 page, navigation component, and URL-based search
- 2.2.0: Added protected routes, theme switching, loading indicators, and translation support

For a detailed list of changes, please see the [CHANGELOG.md](CHANGELOG.md) file.

## License

Copyright (c) 2025 arieftb

This project is created for educational purposes as part of
the [Belajar Membuat Aplikasi Web dengan React](https://www.dicoding.com/academies/403-belajar-membuat-aplikasi-web-dengan-react)
course from Dicoding.  
You may use this code as a reference only.  
Reusing this code for submission, plagiarism, or commercial use is strictly prohibited.
