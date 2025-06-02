# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),

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
