1.Features

  1.Interactive dashboard with anatomical visualization.
  2.Upcoming medical appointments and weekly schedule.
  3.Sidebar navigation with icons (Dashboard, History, Calendar, etc).
  4.Activity chart to show weekly activity metrics.
  5.Fully responsive UI with TailwindCSS.
  
2.Tech Stack

  1.Frontend Framework: ReactJS (with Vite)
  2.Styling: TailwindCSS
  3.Icons: Luicde / SVGs
  4.Routing: React Router
  5.State Management: React hooks

3.Project Structure

/src
  /app
    |-DashboardLayout
    |-ErrorBoundry
    |-RouterPool
    |-Sidebar
  /assets
  /components
    |-ActivityChart
    |-AnatomySection
    |-CalenderUI
    |-CustomTabs
    |-HealthStatusCards
    |-ProgressBar
    |-ScheduleCards
    |-SearchBar
    |-UpcomingScheduleCards
  /data
  /features
    |-auth
    |-dashboard
  /pages
    Dashboard.jsx
  App.jsx
  main.jsx

4. Clone the repository
  git clone https://github.com/your-username/healthcare-dashboard.git
  cd filpe-healthcare

5.Install dependencies
command - npm install

6.Start the development server
command - npm run dev

How to Use

  1.Run the app with npm run dev.
  2.Click on the Dashboard button from the sidebar.
  3.You’ll be redirected to the screen with anatomical health data and the weekly schedule.
