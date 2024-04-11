# Ahamad-Shaikh-Hypergro

# SnapFlix
SnapFlix is a dynamic video-sharing platform designed for creators to express themselves through short-form videos. With Shorts, users can easily record, edit, and share engaging clips that captivate audiences worldwide. Whether it's showcasing talents, sharing moments, or exploring trends, Shorts provides a vibrant community for users to connect, discover, and be entertained in bite-sized bursts of creativity. Join the Shorts community and unleash your creativity in seconds!


## Installation

Install react,typescript with npm

```bash
  npm create vite@latest frontend -- --template typescript
```
```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
```
```bash
  npm install react-icons
```


## API Reference

### Backend Api link

```http
   https://internship-service.onrender.com/videos
```
### Frontend deployed link

```http
  https://statuesque-platypus-e40dc1.netlify.app/
```

## Features
### Video Thumbnail Component:
Displays a video thumbnail with a title, description, and creator's name.
Allows users to click on the thumbnail to view the video details.
Shows the creator's profile picture along with their name.
Provides options to like, comment, share, and save the video.
Utilizes a gradient background and hover effects for visual appeal.
Implements a responsive design for various screen sizes.
Includes a loader GIF for when the thumbnail is loading.

### Video Details Component:
Displays the selected video's title, description, and creator's name.
Allows users to like the video and add comments.
Uses local storage to store and retrieve likes and comments for each video.
Provides a modal for users to input their name and comment.
Utilizes colors, borders, and shadows for improved UI aesthetics.
Implements a responsive design for different screen sizes.

### Navbar Component:
Displays a navigation bar with a logo and the name of the application.
Utilizes a fixed position to keep the navbar static while scrolling.
Uses colors, padding, and shadows for visual appeal.

### Video Player Component:
Renders a video player for playing the selected video.
Utilizes the React Player library for video playback.
Implements a loader GIF while the video is loading.
Uses colors, borders, and shadows for styling.

### Pagination Component:
Displays pagination buttons for navigating between pages.
Allows users to click on page numbers to navigate.
Utilizes colors, borders, and hover effects for visual feedback.
Implements a responsive design for different screen sizes.

### Root Component:
Renders the main application component within a root element.
Applies a background color to the entire page.

### UI Customization:
Utilizes Tailwind CSS for styling components.
Implements custom UI designs using colors, borders, shadows, and gradients.
Ensures consistency and responsiveness across all components.

## Screentshots
![Screenshot (5624)](https://github.com/AhamadShaikh/Ahamad-Shaikh-Hypergro/assets/115461870/9aa93acf-28d0-4f3f-b6a1-281fe016040f)
![Screenshot (5623)](https://github.com/AhamadShaikh/Ahamad-Shaikh-Hypergro/assets/115461870/9704ce38-e815-4bf4-9993-826bebe85e78)
![Screenshot (5619)](https://github.com/AhamadShaikh/Ahamad-Shaikh-Hypergro/assets/115461870/4a0ea11c-859c-42a4-b6a0-2fe28f670453)
![Screenshot (5617)](https://github.com/AhamadShaikh/Ahamad-Shaikh-Hypergro/assets/115461870/8b9b7e93-e4b2-4622-9567-5e8e4312ae87)
![Screenshot (5616)](https://github.com/AhamadShaikh/Ahamad-Shaikh-Hypergro/assets/115461870/8ad5a31c-e9aa-4c5c-a406-7c4e178fb50d)
![Screenshot (5615)](https://github.com/AhamadShaikh/Ahamad-Shaikh-Hypergro/assets/115461870/8257e993-fc60-467c-9755-e982ee67218e)


## Responsiveness
### Mobile Screen
![Screenshot (5628)](https://github.com/AhamadShaikh/Ahamad-Shaikh-Hypergro/assets/115461870/1b0c11cf-e072-49cb-bf29-15f58d338c66)

### Tablet Screen
![Screenshot (5629)](https://github.com/AhamadShaikh/Ahamad-Shaikh-Hypergro/assets/115461870/d3f5d040-1935-4238-b074-9ff31c82ee87)

### Desktop Screen
![Screenshot (5630)](https://github.com/AhamadShaikh/Ahamad-Shaikh-Hypergro/assets/115461870/2c75009e-459d-4a11-898a-162325bd8dee)

## Deployment

To deploy this project run

```bash
  netlify deploy
```


## Features





## Tech Stack

**Client:** React, TypeScript, Tailwind CSS


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


