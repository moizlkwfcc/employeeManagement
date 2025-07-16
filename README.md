# Employee Management System

A modern employee management system built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Modern Login Page**: Clean, responsive design with form validation
- **TypeScript Support**: Full type safety across the application  
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Component Architecture**: Reusable UI components following best practices
- **Form Validation**: Client-side validation with error handling
- **Responsive Design**: Mobile-first responsive layout

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page (login)
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx    # Button component with variants
│   │   ├── Input.tsx     # Input component with validation
│   │   └── index.ts      # Barrel exports
│   └── LoginForm.tsx     # Login form component
├── lib/                  # Utility functions and services
│   ├── auth.ts          # Authentication service
│   └── utils.ts         # Common utilities
└── types/               # TypeScript type definitions
    └── auth.ts          # Authentication types
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **Icons**: Heroicons
- **Linting**: ESLint with Next.js config
- **Build Tool**: Next.js built-in build system

## Design System

### Components

- **Button**: Configurable button component with variants (primary, secondary, outline) and sizes
- **Input**: Form input component with validation and error display
- **LoginForm**: Complete login form with validation and authentication

### Styling Approach

- Utility-first CSS with Tailwind
- Consistent color palette and spacing
- Responsive design patterns
- Accessible form controls

## Authentication

The login system includes:

- Email and password validation
- Password visibility toggle
- Loading states during authentication
- Error handling and display
- Mock authentication service (ready for API integration)

## Future Enhancements

- Dashboard implementation
- Employee management features
- Role-based access control
- API integration
- Unit and integration tests
- Deployment configuration