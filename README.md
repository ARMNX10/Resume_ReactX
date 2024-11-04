
# React Resume Builder

This project is a resume builder application created using React with TypeScript and Vite. The app lets you create, customize, and display a professional resume with sections for personal information, work experience, education, projects, skills, hobbies, and achievements. Users can preview the resume in real-time and save it as a PDF.

## Features

- **Modular Design**: Each section of the resume (e.g., Education, Projects, Work Experience) is its own component for easy customization.
- **Real-time Preview**: The resume updates instantly as you fill out or change information.
- **PDF Export**: Allows users to download the resume as a PDF directly from the browser.
- **Responsive Layout**: Adapts to various screen sizes, ensuring a professional look on any device.

## Project Structure

- **public**: Contains static assets, like images or icons.
- **src**: Source code directory.
  - **Components**: Shared components, such as reusable sections.
  - **Sections**: Individual components for each resume section (e.g., Education, Projects).
  - **App.tsx**: Main application component where everything is assembled.
  - **App.css**: Stylesheet for the application.
  - **Resume.ts**: Handles resume data and layout.

## Installation and Usage

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/react-resume-builder.git
   cd react-resume-builder
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm run dev
   ```
   This will start the development server, and the app should be available at `http://localhost:3000`.

4. **Build for Production**:
   ```bash
   npm run build
   ```
   This will create an optimized build of the application in the `dist` folder.

## License

This project is licensed under the MIT License.
