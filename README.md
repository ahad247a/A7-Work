# 🛡️ KeenKeeper — Personal Relationship Management System

**KeenKeeper** is a sophisticated, data-driven personal relationship management (PRM) platform designed to help users track, manage, and nurture their most important connections. Built with a focus on minimalist aesthetics and seamless user experience, it allows users to monitor interaction frequencies and visualize friendship health through advanced analytics.

---

## 🚀 Key Features

- **Dynamic Connection Management:** Seamlessly fetches and renders friend profiles from a dynamic JSON-based data source.
- **Interaction Logging:** Real-time logging system for tracking Calls, Texts, Video Chats, and In-person Meetups.
- **Data Visualization:** Integrated **Doughnut Charts** using Recharts to provide a high-level overview of interaction distribution.
- **Activity Timeline:** A comprehensive, filterable audit trail of all historical interactions sorted by recency.
- **Responsive Architecture:** Crafted with a mobile-first approach, ensuring a flawless experience across all screen sizes.
- **Animated User Experience:** Enhanced with Framer Motion for smooth transitions and an interactive 404 Error page.
- **Instant Feedback:** Integrated toast notifications for immediate user confirmation upon action.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Frontend Library** | React.js (Vite) |
| **Styling** | Tailwind CSS |
| **Routing** | React Router DOM v6 |
| **Data Visualization** | Recharts |
| **Animations** | Framer Motion |
| **Icons** | React Icons |
| **Notifications** | React Hot Toast |

---

## 📂 Project Architecture

```text
├── public/
│   └── friends.json         # Static database for initial connection profiles
├── src/
│   ├── components/          # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/               # Functional views (Home, Profile, Timeline, Stats)
│   ├── layouts/             # Main application wrapper and outlet context
│   ├── App.jsx              # Core routing logic
│   └── index.css            # Tailwind directives and global styles