# Delivery Driver Recruitment Landing Page

## Overview

This is a delivery driver recruitment landing page built with React, TypeScript, and Express. The application features a single-page landing site designed to attract and convert delivery driver candidates. It includes a video presentation section (powered by ConverteAI's video player), a requirements overview, and a CEP (Brazilian postal code) capture modal for lead generation.

The project uses a modern full-stack architecture with Vite for frontend bundling, Express for backend services, and is configured to use PostgreSQL with Drizzle ORM for data persistence. The UI is built with shadcn/ui components and Tailwind CSS following a specific design system outlined in the design guidelines.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing (instead of React Router)
- TanStack Query (React Query) for server state management

**UI Component System:**
- shadcn/ui component library (Radix UI primitives with custom styling)
- Tailwind CSS for utility-first styling with custom design tokens
- CSS variables for theming (light mode focused)
- Custom design system defined in `design_guidelines.md` with specific color palette (#F54E1C orange primary, gradient green CTAs)

**Key Design Decisions:**
- Single-page application with modal-based interactions
- Mobile-first responsive design with specific breakpoints
- Roboto font family (400 and 700 weights)
- Custom spacing and sizing system defined in design guidelines

**State Management:**
- React hooks (useState, useEffect) for local component state
- Form state managed locally with controlled inputs
- CEP validation with real-time formatting (format: XXXXX-XXX)

### Backend Architecture

**Server Framework:**
- Express.js for HTTP server and API routing
- Development/production mode separation via NODE_ENV
- Session middleware support via connect-pg-simple (PostgreSQL session store)

**API Design:**
- RESTful API structure with `/api` prefix
- Centralized error handling middleware
- Request/response logging for API endpoints
- CRUD operations abstracted through storage interface

**Development Tools:**
- Hot Module Replacement (HMR) in development via Vite middleware
- Runtime error overlay for development debugging
- TSX for TypeScript execution in Node.js

### Data Storage Solutions

**Database:**
- PostgreSQL as the primary relational database
- Neon serverless PostgreSQL driver (`@neondatabase/serverless`)
- Database URL configured via environment variable (DATABASE_URL)

**ORM & Schema Management:**
- Drizzle ORM for type-safe database queries
- Schema-first approach with TypeScript definitions in `shared/schema.ts`
- Drizzle Kit for migrations (output to `./migrations` directory)
- Zod integration via drizzle-zod for runtime validation

**Current Schema:**
- Users table with id (UUID), username (unique), and password fields
- Storage interface pattern for abstraction (IStorage interface)
- In-memory storage implementation (MemStorage) for development/testing

### Authentication and Authorization

**Current Implementation:**
- Basic user storage structure defined
- No active authentication implementation in current codebase
- Session infrastructure configured (connect-pg-simple) but not actively used
- Credential-based storage ready (username/password fields in users table)

**Future-Ready:**
- Session storage configured for cookie-based authentication
- User schema supports password hashing (implementation pending)
- API endpoints can be protected via session middleware

### External Dependencies

**Third-Party Services:**
- ConverteAI Video Player (https://converteai.net) - Embedded video player for promotional content
  - Script loaded dynamically via React useEffect
  - Custom HTML element: `<vturb-smartplayer>`
  - Player ID: 68daaf50aac00b46e24fb98c

**Frontend Libraries:**
- @radix-ui/* - Accessible UI component primitives (20+ component packages)
- @tanstack/react-query - Server state management and caching
- wouter - Lightweight routing (alternative to React Router)
- react-hook-form + @hookform/resolvers - Form handling (configured but not actively used)
- date-fns - Date manipulation utilities
- embla-carousel-react - Carousel/slider component
- lucide-react - Icon library
- vaul - Drawer component primitive

**Development Dependencies:**
- TypeScript for type safety
- ESBuild for production bundling
- Tailwind CSS + PostCSS for styling
- Drizzle Kit for database migrations

**Font Resources:**
- Google Fonts (Roboto: 400, 700)
- Font Awesome 5.15.3 for icon support

**Notable Architectural Patterns:**
- Monorepo-style structure with shared types between client/server (`shared/` directory)
- Path aliases for clean imports (@/, @shared/, @assets/)
- Component composition over inheritance (shadcn/ui philosophy)
- Server-side rendering preparation (although currently SPA)
- Environment-based configuration (development vs production builds)