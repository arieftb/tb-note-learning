# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),

## [2.2.0-alpha] - 2025-07-05

### Added

- Initial alpha release for version 2.2.0
- Implemented user registration and authentication (login) features:
  - Created a new registration page with inputs for name, email, password, and confirm password (optional)
  - Created a new authentication (login) page with email and password inputs
  - Added functionality to store authentication tokens in local storage
  - Implemented user authentication state management to track user login status
  - Added logout button to clear stored user authentication data

### Changed

- Change the navigation bar

## [2.1.0] - 2025-06-21

### Added

- Added a 404 Not Found page for better error handling
- Implemented wildcard route to catch all undefined routes
- Added styling for the Not Found page with consistent design
- Added a dedicated ArchivedNotesPage for better separation of concerns
- Implemented Navigation component for improved user navigation

### Changed

- Enhanced PropTypes validation across components with detailed shape definitions
- Added documentation for callback parameter shapes
- Improved type checking for note objects in all components
- Improved search functionality with URL-based search parameters
- Implemented React Router's useSearchParams hook for persistent search queries
- Enhanced user experience by maintaining search state during navigation
- Updated search handling in both active and archived notes pages
- Moved archived notes functionality to a separate page
- Simplified NotesPage to focus only on active notes
- Moved delete functionality from note cards to the detail page
- Improved UI for note actions with consistent styling
- Enhanced responsive design for note action buttons
- Move the Add New Note section from the Home Page to a new specific page
- Implemented a singleton pattern for NoteRepository with new NoteRepositoryInstance
- Changed note IDs from numeric to string format (e.g., 'notes-1' instead of 1)
- Simplified ID comparison in getNoteById method
- Refactored components to use the singleton NoteRepository instance

## [2.1.0-alpha.6] - 2025-06-05

### Changed

- Enhanced PropTypes validation across components with detailed shape definitions
- Added documentation for callback parameter shapes
- Improved type checking for note objects in all components

## [2.1.0-alpha.5] - 2025-06-04

### Added

- Added 404 Not Found page for better error handling
- Implemented wildcard route to catch all undefined routes
- Added styling for the Not Found page with consistent design

## [2.1.0-alpha.4] - 2025-06-04

### Changed

- Improved search functionality with URL-based search parameters
- Implemented React Router's useSearchParams hook for persistent search queries
- Enhanced user experience by maintaining search state during navigation
- Updated search handling in both active and archived notes pages

## [2.1.0-alpha.3] - 2025-06-04

### Added

- Added a dedicated ArchivedNotesPage for better separation of concerns
- Implemented Navigation component for improved user navigation

### Changed

- Moved archived notes functionality to a separate page
- Simplified NotesPage to focus only on active notes

## [2.1.0-alpha.2] - 2025-06-04

### Changed

- Moved delete functionality from note cards to the detail page
- Improved UI for note actions with consistent styling
- Enhanced responsive design for note action buttons

## [2.1.0-alpha.1] - 2025-06-03

### Changed

- Move the Add New Note section from the Home Page to a new specific page

## [2.1.0-alpha] - 2025-06-02

### Added

- Implemented a singleton pattern for NoteRepository with new NoteRepositoryInstance

### Changed

- Changed note IDs from numeric to string format (e.g., 'notes-1' instead of 1)
- Simplified ID comparison in getNoteById method
- Refactored components to use the singleton NoteRepository instance

## [2.0.0] - 2025-06-02

### Added

- Detailed view page for individual notes
- Improved routing with React Router DOM 7.6.1
- Additional error handling

## [1.0.0] - 2025-06-01

### Added

- Initial release of TB Note application
- Create and manage notes with title and body content
- Archive and unarchive notes for better organization
- Search functionality for both active and archived notes
- Responsive design for various screen sizes
- Clean architecture implementation with separation of concerns
- React 19 with Vite build system
