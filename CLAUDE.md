# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Start Development Environment:**
```bash
bin/dev                           # Start all development services (Rails + asset watchers)
```

**Individual Services:**
```bash
bin/rails server                  # Rails server only
bun run build --watch            # JavaScript build with watch
bun run build:css --watch        # Tailwind CSS build with watch
```

**Testing:**
```bash
bin/rails test                    # Run all tests
bin/rails test:system            # Run system tests only
bin/rails test test/models/      # Run specific test directory
```

**Code Quality:**
```bash
bundle exec rubocop              # Ruby linting (Rails Omakase style)
bundle exec brakeman            # Security analysis
```

**Database:**
```bash
bin/rails db:migrate
bin/rails db:seed
bin/rails console
```

## Architecture Overview

**Modern Rails 8 Stack:**
- Rails 8.0.2 with Ruby 3.4.4
- PostgreSQL database
- Hotwired (Turbo + Stimulus) for frontend interactivity
- Bun as JavaScript runtime/bundler (replaces Node.js/npm)
- Tailwind CSS 4.x for styling
- Propshaft asset pipeline (modern replacement for Sprockets)

**Key Architectural Decisions:**
- **Solid Stack**: Uses Solid Cache, Solid Queue, and Solid Cable for database-backed services (eliminates Redis dependency)
- **Authentication**: Devise with full feature set (confirmable, lockable, timeoutable)
- **Asset Pipeline**: Modern setup with Bun + Tailwind CSS building to `app/assets/builds/`
- **Testing**: Standard Rails minitest with parallel execution and system tests

**Frontend Structure:**
- Entry point: `app/javascript/application.js`
- Stimulus controllers in `app/javascript/controllers/`
- Assets build to `app/assets/builds/` directory
- Hotwire provides SPA-like experience without complex JavaScript framework

**Deployment:**
- Kamal for Docker-based deployment
- Multi-stage Dockerfile optimized for production
- SSL with Let's Encrypt
- Solid Queue for background job processing

## Development Patterns

- Use Hotwire (Turbo/Stimulus) for interactive features
- Follow Rails Omakase conventions and RuboCop style guide
- Database-backed services (cache, jobs, cable) instead of Redis
- Bun for faster JavaScript builds and package management
- System tests with Capybara for full-stack testing
