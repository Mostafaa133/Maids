# Maids Task

![Maids User Dashboard](https://media.licdn.com/dms/image/D4D0BAQHKeISUPckHSQ/company-logo_200_200/0/1686233842354/maids_cc_logo?e=2147483647&v=beta&t=-rkWgFVLSA5i7g-oWDyhaZrdHfLFcTC4IB_9CLG76_Q)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [APIs Used](#apis-used)
- [Caching and Loading](#caching-and-loading)
- [Contributing](#contributing)

## Introduction
The Maids project is an interactive Angular application demonstrating proficiency in Angular 7+ by creating a user-friendly dashboard. The project utilizes advanced Angular features such as state management, directives, observables, and incorporates Angular Material for styling and UI components.

## Features
- User dashboard with paginated user list
- Detailed user view with user information
- Instant search functionality by user ID
- Caching to optimize performance
- Loading bar to indicate network requests
- Responsive design with animations for better user experience

## Installation
1. Clone the repository:
```bash
git clone https://github.com/Mostafaa133/Maids.git
cd maids
```
2. Install dependencies:
```bash
npm install
```
3. Serve the application:
```bash
ng serve
```
4. Open your browser and navigate to `http://localhost:4200`.

## Usage

### Navigating the Dashboard
- The **header** contains a search bar for quickly finding users by their ID.
- The **user list** is paginated, showing user cards with avatars and names.
- Clicking on a user card navigates to the **user detail** page, displaying more information about the user.

### Searching Users
Use the search bar in the header to search for users by ID. If the user exists, you will be navigated to their detail page.

## Components

### Header Component
**Functionality**: Contains the search bar and site title.
**File**: `src/app/components/header/header.component.ts`

### User List Component
**Functionality**: Displays a paginated list of users.
**File**: `src/app/components/user-list/user-list.component.ts`

### User Detail Component
**Functionality**: Displays detailed information for a selected user.
**File**: `src/app/components/user-detail/user-detail.component.ts`

## APIs Used
- **Fetch Users**: `https://reqres.in/api/users?page={page}`
- **Fetch User Details**: `https://reqres.in/api/users/{id}`

## Caching and Loading
- **Caching**: Implemented to avoid redundant HTTP requests, improving performance.
- **Loading Bar**: Indicates pending network requests, providing visual feedback to users during data retrieval.

## Contributing
We welcome contributions! Please follow these steps to contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit them (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request
