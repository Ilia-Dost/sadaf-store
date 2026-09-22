# Sadaf Store

Sadaf is a modern frontend e-commerce project built to demonstrate a clean, responsive, and scalable frontend architecture.

The project focuses on product presentation, category management, reusable components, and modern UI/UX.

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Lucide Icons

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

## Project Structure

The project is organized into separate sections for pages, reusable components, and local data.

```text
app/
components/
data/
public/
```

* `app/` — Application pages and routes
* `components/` — Reusable UI components
* `data/` — Product, category, brand, and other local data
* `public/` — Images and static assets

## Architecture

The project uses the Next.js App Router and a component-based architecture.

The UI components are separated from the project's data, making the structure easier to maintain and extend.

Since this is a frontend-only project, product and category information is currently managed through local data files instead of a backend or database.

## Product System

Each product contains structured information such as:

```text
id
name
slug
categoryId
brandId
countryId
thumbnail
gallery
descriptions
sizes
tags
relatedProducts
```

This structure makes it possible to add, edit, and organize products consistently when a backend is added in the future.

## Phase 2

The following features are planned for the next phase:

### 1. Dark / Light Mode

Add a theme system that allows users to switch between light and dark mode.

### 2. Admin Panel Preview

Add a frontend representation of an admin dashboard for managing the store.

The panel will be display-only and will not support real data editing, adding, or deleting because the project currently has no backend or database.

### 3. Multi-language Support

Add support for:

* Persian
* English

The project structure will be prepared to support additional languages in the future.

## Project Status

This project is currently frontend-only and does not include a backend, database, authentication system, payment gateway, or real admin functionality.
