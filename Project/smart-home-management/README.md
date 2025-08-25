# Smart Home Management WebApp

A modern React SPA for managing smart home zones, devices, and automation routines. Built with Vite for fast development and a clean, responsive UI.

## Features

- **User Authentication:** Sign up and log in with email and password. Simple localStorage-based user management.
- **Dashboard:** Overview of your smart home, with SVG backgrounds for visual polish.
- **Zones Management:** Add, edit, and delete rooms/zones. Each zone has a name, type, and floor.
- **Devices Management:** Add, edit, and delete smart devices. Track device status, location, and energy usage.
- **Routines Automation:** Create routines to automate device actions (e.g., turn on lights at a specific time).
- **Settings:** Manage app preferences.
- **Logout:** Securely log out from any page.
- **Consistent UI:** All forms and cards are styled for clarity and compactness. Instructions and headings are visually consistent across all pages.
- **Interactive Navbar:** Easy navigation between Dashboard, Zones, Devices, Routines, and Settings.

## Tech Stack

- **Frontend:** React (functional components, hooks)
- **Routing:** react-router-dom
- **State & Persistence:** useState, useEffect, localStorage
- **Build Tool:** Vite
- **Styling:** Inline styles, SVG backgrounds

## Folder Structure

```
src/
	components/
		Dashboard.jsx
		Navbar.jsx
		Zones.jsx
		ZoneCard.jsx
		Devices.jsx
		DeviceCard.jsx
		Routines.jsx
		RoutineCard.jsx
		Settings.jsx
		login.jsx
		signup.jsx
	assets/
		(SVGs for backgrounds and illustrations)
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the app:**
   ```bash
   npm run dev
   ```
3. **Open in browser:** Visit `http://localhost:5173` (or as shown in your terminal).

## Usage

- **Sign Up:** Register a new account.
- **Login:** Access your dashboard.
- **Manage Zones/Devices/Routines:** Use the forms and cards to add, edit, or delete items.
- **Logout:** Click the Logout button in the Navbar to securely exit.

## Customization

- All data is stored in localStorage for demo purposes. For production, integrate with a backend.
- Easily extend components for more device types, advanced routines, or real authentication.


