# InnovateHub — Social Media Platform for UN SDG 9

> **"Connect Ideas. Build the Future."**  
> A modern, responsive social media and collaboration platform designed for **Design Process and Perspective**, directly advancing **United Nations Sustainable Development Goal 9: Industry, Innovation and Infrastructure**.

---

## 🌟 Overview

InnovateHub unites university students, designers, civil/mechanical/chemical engineers, computer scientists, researchers, and entrepreneurs. The platform facilitates rapid peer review of sustainable infrastructure prototypes, tracks quantified carbon reduction and resilience metrics, and fosters cross-border collaborative engineering.

---

## 🚀 Key Features across 6 Interconnected Pages

1. **Home / Landing Page (`/`)**
   - High-impact hero section with interactive UN SDG 9 Explainer Modal.
   - Live platform metrics: Active Innovators, SDG 9 Projects, Countries Reached, and CO₂ Tons Abated.
   - Detailed breakdown of UN SDG 9 Targets:
     - **Target 9.1:** Resilient Infrastructure
     - **Target 9.2:** Inclusive & Sustainable Industrialization
     - **Target 9.4:** Clean Industrial Retrofitting
     - **Target 9.5:** Scientific Research & Innovation
     - **Target 9.c:** Universal ICT & Digital Access
   - Curated showcase of featured breakthroughs and recent community feed discussions.

2. **Community Feed (`/feed`)**
   - 3-column responsive layout (Left profile widget, center feed stream, right trending topics and suggestions).
   - In-feed post composer with hashtag selectors (`#SmartCities`, `#GreenTech`, `#AI`, `#Innovation`, `#ResilientInfrastructure`) and media upload options.
   - Interactive posts with dynamic like counters, bookmarking, link sharing (with toast feedback), and expandable comments drawer.
   - Quick hashtag filtering and feed tabs (*All Discussions*, *Trending*, *SDG 9 Milestones*, *Following*).

3. **Explore Innovations (`/explore`)**
   - Instant search across project titles, problem descriptions, technologies, and creator names.
   - Category filtering: *Sustainable Infrastructure*, *Clean Energy*, *AI & Robotics*, *Green Technology*, *Smart Cities*.
   - Target filtering: Direct filtering by specific UN SDG 9 targets.
   - Dynamic cards displaying development stage badges (*Prototype*, *Field Tested*, *Production Ready*), collaborator counts, and direct links.

4. **Project Details & Showcase (`/projects/:id`)**
   - Deep-dive technical breakdowns:
     - **Infrastructure Bottleneck** (Problem Statement)
     - **Proposed Solution & Architecture**
     - **Technologies, Sensors & Toolchains** (Interactive tech badges)
     - **Verified SDG 9 Impact Card** with quantified metrics (e.g. 82% carbon cut, 94% blackout prevention).
   - Multi-image showcase gallery with active preview selectors.
   - **Request Collaboration Modal** allowing peers to propose their skills and initiate partnerships.
   - Technical peer-review comments section.

5. **User Profile (`/profile/:id`)**
   - High-tech cover photo, avatar with online indicator, verified researcher badge, and SDG 9 impact score (e.g. 98/100).
   - Followers and following counts with live Follow/Unfollow toggle.
   - Tabbed view: *Showcased Innovations*, *Community Posts*, *Skills & Credentials*, and *Saved Innovations*.
   - Live bio editor for personal profile customization.

6. **Messages & Collaboration (`/messages`)**
   - Dual-pane messenger interface with contact list, unread counters, and last message previews.
   - Collaboration context banner highlighting the referenced SDG 9 project.
   - Active chat thread with timestamps and read receipts.
   - Real-time message sending with simulated automated responses from domain specialists.

---

## 🛠️ Technology Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Routing:** React Router DOM v7
- **Icons:** Lucide React
- **Persistence:** LocalStorage (demo state persists across page refreshes)

---

## 💻 Local Setup & Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd dpp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🎓 Academic Alignment

- **Subject:** Design Process and Perspective
- **Focus:** User-Centered Design, Systems Thinking, and UN SDG 9 (Industry, Innovation & Infrastructure)
