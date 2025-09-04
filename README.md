# Yumex - Food Lovers Forum

**TL;DR / Overview**  
Yumex is a dynamic, user-friendly web application built as a final project for CodePath's Intermediate Web Development course. It serves as a food forum where enthusiasts can share culinary experiences, post recipes, comment, upvote, and categorize content by food type. Developed using Next.js, TypeScript, Tailwind CSS, and Supabase, it features a responsive UI, real-time post previews, image uploads, and user authentication. The project showcases skills in full-stack development, database management, and modern front-end frameworks.

**Author:** Michael-Andre Odusami  
**Project:** Final Project for CodePath Intermediate Web Development  
**Time Spent:** Approximately 15 hours

---

## Skills Demonstrated
- **Frontend Development**: Built a responsive UI with Next.js (React framework), TypeScript, and Tailwind CSS for styling.
- **Backend Development**: Integrated Supabase for real-time database operations, user authentication, and file storage (post images).
- **State Management**: Utilized React Context API for managing search and authentication states across components.
- **Component Design**: Created reusable components (e.g., `Post`, `Comment`, `CategorySelector`) with Radix UI and Heroicons for accessibility and interactivity.
- **Database Operations**: Implemented CRUD operations for posts and comments using Supabase’s PostgreSQL database.
- **File Handling**: Enabled image uploads to Supabase storage with public URL retrieval for post previews and displays.
- **Type Safety**: Used TypeScript interfaces (e.g., `FormData`, `CommentParams`) for robust type checking and maintainable code.
- **UI/UX Design**: Designed an intuitive interface with features like live post previews, category carousels, and hover effects for enhanced user engagement.
- **Asynchronous Programming**: Managed asynchronous data fetching and updates (e.g., `fetchPostsFromDatabase`, `fetchPostImageFromDatbase`) with React hooks (`useState`, `useEffect`).
- **Version Control**: Structured project with modular file organization and clear documentation for scalability.

---

## Features

### Core Features
- **Post Creation**: Users can create posts with a title, optional text content, and an external image URL or uploaded image.
- **Home Feed**: Displays all posts with titles, creation timestamps, and upvote counts in a grid layout.
- **Post Navigation**: Clicking a post redirects to a detailed post page with additional content and comments.
- **Sorting**: Posts can be sorted by creation time (`last created`) or upvote count (`upvotes`).
- **Search**: Users can search posts by title using a context-based search system.
- **Post Details**: Dedicated page for each post showing full content, image, and comments.
- **Comments**: Users can add, view, and delete their own comments on posts.
- **Upvotes**: Each post has an upvote button to increment its count, updating in real-time.
- **Post Management**: Users can edit or delete their own posts, with associated images removed from storage.

### Optional Features
- **Image Upload**: Users can upload images directly from their devices, stored in Supabase’s `post_images` bucket.
- **Post Preview**: Live preview during post creation, showing title, content, and image.
- **Categorization**: Posts can be tagged with food categories (e.g., Asian, Mexican, Dessert) displayed in a sliding carousel.
- **User Accounts**:
  - Account creation required for posting, commenting, and managing content.
  - Posts and comments linked to the creator’s account, with edit/delete restricted to owners.
  - Signed-out users do not see avatar icons in the UI.
- **Comment Counter**: Displays the total number of comments per post.
- **Post Redirection**: After creating a post, users are redirected to its detail page with a success message.

---

## Tech Stack
- **Framework**: Next.js 14.2.0 (React-based framework for server-side rendering and static site generation)
- **Language**: TypeScript (for type-safe JavaScript)
- **Styling**: Tailwind CSS (utility-first CSS framework with custom configurations)
- **Database & Backend**: Supabase (PostgreSQL database, authentication, and storage)
- **UI Components**: Radix UI (accessible component primitives), Heroicons, Lucide React (icon libraries)
- **State Management**: React Context API (`SearchContext`, `AuthProvider`)
- **Dependencies**:
  - `@supabase/supabase-js`: For database and authentication
  - `class-variance-authority`, `tailwind-merge`: For dynamic styling
  - `eslint`, `typescript`: For code quality and type checking

---

## Development Details
- **Time Spent**: ~15 hours
- **Challenges**:
  - **Database Integration**: Configuring Supabase for real-time post and comment updates required careful handling of asynchronous operations and error management.
  - **Image Uploads**: Ensuring secure file uploads to Supabase storage and retrieving public URLs for display was complex due to file path management.
  - **UI/UX Design**: Balancing a responsive grid layout with a category carousel and hover effects demanded precise Tailwind CSS configurations.
  - **Authentication**: Implementing user-specific actions (e.g., edit/delete only for post owners) required robust session management with Supabase Auth.
  - **Search Functionality**: Creating a context-based search system that filters posts in real-time was challenging but achieved with React Context and hooks.

---

## Video Walkthrough
Watch the walkthrough of implemented features on [YouTube](https://youtu.be/qcUbhgHgbd8).

---

## Future Enhancements
- **User Profiles**: Add profile pages where users can view their posts, comments, and edit personal details (e.g., bio, profile picture).
- **Advanced Search**: Implement full-text search across post content and comments, with filters for categories and date ranges.
- **Real-Time Notifications**: Notify users of new comments or upvotes on their posts using Supabase’s real-time subscriptions.
- **Tagging System**: Allow multiple category tags per post for better discoverability.
- **Comment Replies**: Enable threaded replies to comments for richer discussions.
- **Analytics Dashboard**: Provide users with insights into their post engagement (e.g., upvote trends, comment counts) via a dashboard.
- **Mobile App**: Develop a mobile version using React Native, integrating with the existing Supabase backend.
- **Accessibility Improvements**: Enhance ARIA labels and keyboard navigation for better accessibility compliance.
- **Cloud Integration**: Add AWS S3 or Cloudinary for advanced image processing (e.g., compression, resizing) to optimize load times.
- **Unit Testing**: Implement Jest and React Testing Library to ensure component reliability and prevent regressions.

---

## License
Copyright 2023 Michael-Andre Odusami

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

