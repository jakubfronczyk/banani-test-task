# Banani Table Generator

A **Next.js** application that generates custom tables using AI. This project allows users to describe the table they want in natural language, and the application will generate a structured table based on that description.

---

## Features

- **AI-Powered Table Generation**: Simply describe the table you want, and the application will create it.
- **Interactive UI**: Clean, responsive interface with dark/light mode support.
- **Real-time Feedback**: Loading states and toast notifications provide clear feedback.
- **Table Management**: Delete rows from generated tables.

---

## Getting Started

### Prerequisites

You'll need to set up your environment variables before running the application. Copy the example environment file and add your API key:

```
ANTHROPIC_API_KEY=your_api_key_here
```

---

## Installation

Install the dependencies:
```
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

---

## Running the Development Server

Start the development server:
```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open http://localhost:3000 with your browser to see the application.

---

## Usage

1. Enter a description of the table you want to generate in the text area.
2. Click the submit button (arrow up icon).
3. Wait for the AI to generate your table.
4. Once generated, you can:
   - Delete rows using the trash icon.
   - Generate a new table using the sidebar form.

### Example Prompts

- `Table with 5 rows displaying company documents. Each table item should contain documents' names, dates when they were added, and actions to delete them.`
- `Create a sales performance table with 10 employees, showing their names, quarterly sales figures, and performance rating.`

---

## Project Structure 

```
app/         → Contains the Next.js application routes and server actions
actions/     → Server actions for generating tables and schema definitions
page.tsx     → Main application page
components/  → React components organized by feature
  ├─ content/ → Main content components (ContentGenerator, ContentEmpty, ContentGenerated)
  ├─ table/   → Table-related components for displaying generated data
  ├─ theme/   → Theme-related components for dark/light modeta
  └─ ui/      → Reusable UI components like buttons and textareas
hooks/       → Custom React hooks
lib/         → Utility functions and configuration
```

---

## Technologies Used

- **Next.js 15** – React framework with App Router  
- **React 19** – UI library  
- **Tailwind CSS 4** – Utility-first CSS framework  
- **Anthropic Claude** – AI model for table generation  
- **Zod** – Schema validation library for defining and validating data structures  
- **Vercel AI SDK** – Framework for integrating and managing AI models, used for running models and validating AI outputs  
- **Shadcn/ui** – For UI components  
- **Next Themes** – Dark/light mode support  

---

## The Power of Zod + Vercel AI SDK

The combination of **Zod** and **Vercel AI SDK**'s `generateObject` function is particularly powerful, as it allows the application to:

- Define exact table structure requirements using TypeScript types  
- Validate AI-generated content against these schemas  
- Ensure type safety throughout the application  
- Handle edge cases when AI responses don't match expected formats  
