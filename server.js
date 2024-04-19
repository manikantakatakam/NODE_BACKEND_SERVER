require('dotenv').config()
const express = require('express');
const DB = require('./DatabaseConnection/mongoose')
const errorMiddleware = require('./middlewares/errorMiddleware')
const merchantRoute = require('./Routes/merchantRoute')
const path = require('path'); 

const app = express();

const PORT = process.env.PORT || 3000
const FRONTEND = process.env.FRONTEND

//database connection
DB();

//middlewares

app.use(errorMiddleware);


app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <style>
        /* Center align the content */
        body, html {
            height: 100%;
            margin: 0;
            overflow: hidden; /* Hide scrollbars */
            position: relative; /* Make the body a positioning context for absolutely positioned elements */
        }

        /* Style for the background image */
        body {
            /* Fullscreen background image */
            background-image: url('https://w.forfun.com/fetch/67/679bf76a2e4d6aee39d84cc06d6bb6cf.jpeg?w=1000&r=0.5625');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            /* Ensure the image covers the entire viewport */
            width: 100%;
            height: 100%;
            /* Display the image as a block element */
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* Style for the image overlay */
        .overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1; /* Ensure the overlay is above the background image */
            animation: moveLogo 5s ease infinite alternate; /* Animation */
        }

        /* Style for the clickable image */
        .overlay img {
            width: 200px; /* Adjust as needed */
            height: auto; /* Maintain aspect ratio */
            cursor: pointer;
        }

        /* Keyframe animation for moving the logo */
        @keyframes moveLogo {
            0% {
                transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
                transform: translate(-50%, -50%) rotate(360deg);
            }
        }
    </style>
</head>
<body>
    <!-- Clickable image with link -->
    <a class="overlay">
        <svg height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="m49.98 85.98 31.74-18.03v-35.97l-31.74 17.98z"/><path d="m18.3 67.94 31.7 18v-35.97l-31.7-17.96z"/><path d="m81.5 31.98-31.5-17.85-31.5 17.85 31.5 17.88z"/><path d="m50 48.8 29.67-16.8-.03-.02z"/><path d="m20.36 31.98-.03.02 29.67 16.8z"/><circle cx="50" cy="48.8"/></g><path d="m81.66 30.83-31.66-17.94-31.66 17.94-1 .59v37.12l31.7 18 1 .57 1-.57 31.7-18v-37.13zm-1 36.55-29.66 16.86v-33.7l29.7-16.83zm-31.66 16.86-29.7-16.87v-33.66l29.7 16.83zm-28.64-52.24 29.64-16.81 29.64 16.81-29.64 16.8-29.67-16.8z" fill="#444"/><path d="m50.13 69.39 17.05-9.67v-19.31l-17.05 9.66z" fill="#8cc64f"/><path d="m32.82 59.72 17.05 9.67v-19.32l-17.05-9.66z" fill="#8cc64f"/><path d="m67 40.14-17-9.63-17 9.63 17 9.66z" fill="#8cc64f"/><path d="m50 48.83 15.29-8.66-.02-.02-15.27 8.67z" fill="#96bf3d"/><path d="m34.73 40.15-.02.02 15.29 8.66v-.01z" fill="#96bf3d"/><circle cx="50" cy="48.82" fill="#96bf3d"/><path d="m67.3 39-17.3-9.79-17.3 9.79-1 .58v20.81l17.3 9.83 1 .57 1-.57 17.32-9.83v-20.81zm-1 20.22-15.3 8.7v-17.36l15.32-8.68zm-17.3 8.7-15.32-8.7v-17.34l15.32 8.68zm-14.27-27.77 15.27-8.64 15.27 8.65-15.27 8.66-15.29-8.65z" fill="#fff"/></svg>
        <svg height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="m49.98 85.98 31.74-18.03v-35.97l-31.74 17.98z"/><path d="m18.3 67.94 31.7 18v-35.97l-31.7-17.96z"/><path d="m81.5 31.98-31.5-17.85-31.5 17.85 31.5 17.88z"/><path d="m50 48.8 29.67-16.8-.03-.02z"/><path d="m20.36 31.98-.03.02 29.67 16.8z"/><circle cx="50" cy="48.8"/></g><path d="m81.66 30.83-31.66-17.94-31.66 17.94-1 .59v37.12l31.7 18 1 .57 1-.57 31.7-18v-37.13zm-1 36.55-29.66 16.86v-33.7l29.7-16.83zm-31.66 16.86-29.7-16.87v-33.66l29.7 16.83zm-28.64-52.24 29.64-16.81 29.64 16.81-29.64 16.8-29.67-16.8z" fill="#444"/><path d="m50.13 69.39 17.05-9.67v-19.31l-17.05 9.66z" fill="#8cc64f"/><path d="m32.82 59.72 17.05 9.67v-19.32l-17.05-9.66z" fill="#8cc64f"/><path d="m67 40.14-17-9.63-17 9.63 17 9.66z" fill="#8cc64f"/><path d="m50 48.83 15.29-8.66-.02-.02-15.27 8.67z" fill="#96bf3d"/><path d="m34.73 40.15-.02.02 15.29 8.66v-.01z" fill="#96bf3d"/><circle cx="50" cy="48.82" fill="#96bf3d"/><path d="m67.3 39-17.3-9.79-17.3 9.79-1 .58v20.81l17.3 9.83 1 .57 1-.57 17.32-9.83v-20.81zm-1 20.22-15.3 8.7v-17.36l15.32-8.68zm-17.3 8.7-15.32-8.7v-17.34l15.32 8.68zm-14.27-27.77 15.27-8.64 15.27 8.65-15.27 8.66-15.29-8.65z" fill="#fff"/></svg>
        <svg height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="m49.98 85.98 31.74-18.03v-35.97l-31.74 17.98z"/><path d="m18.3 67.94 31.7 18v-35.97l-31.7-17.96z"/><path d="m81.5 31.98-31.5-17.85-31.5 17.85 31.5 17.88z"/><path d="m50 48.8 29.67-16.8-.03-.02z"/><path d="m20.36 31.98-.03.02 29.67 16.8z"/><circle cx="50" cy="48.8"/></g><path d="m81.66 30.83-31.66-17.94-31.66 17.94-1 .59v37.12l31.7 18 1 .57 1-.57 31.7-18v-37.13zm-1 36.55-29.66 16.86v-33.7l29.7-16.83zm-31.66 16.86-29.7-16.87v-33.66l29.7 16.83zm-28.64-52.24 29.64-16.81 29.64 16.81-29.64 16.8-29.67-16.8z" fill="#444"/><path d="m50.13 69.39 17.05-9.67v-19.31l-17.05 9.66z" fill="#8cc64f"/><path d="m32.82 59.72 17.05 9.67v-19.32l-17.05-9.66z" fill="#8cc64f"/><path d="m67 40.14-17-9.63-17 9.63 17 9.66z" fill="#8cc64f"/><path d="m50 48.83 15.29-8.66-.02-.02-15.27 8.67z" fill="#96bf3d"/><path d="m34.73 40.15-.02.02 15.29 8.66v-.01z" fill="#96bf3d"/><circle cx="50" cy="48.82" fill="#96bf3d"/><path d="m67.3 39-17.3-9.79-17.3 9.79-1 .58v20.81l17.3 9.83 1 .57 1-.57 17.32-9.83v-20.81zm-1 20.22-15.3 8.7v-17.36l15.32-8.68zm-17.3 8.7-15.32-8.7v-17.34l15.32 8.68zm-14.27-27.77 15.27-8.64 15.27 8.65-15.27 8.66-15.29-8.65z" fill="#fff"/></svg>
        <svg height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="m49.98 85.98 31.74-18.03v-35.97l-31.74 17.98z"/><path d="m18.3 67.94 31.7 18v-35.97l-31.7-17.96z"/><path d="m81.5 31.98-31.5-17.85-31.5 17.85 31.5 17.88z"/><path d="m50 48.8 29.67-16.8-.03-.02z"/><path d="m20.36 31.98-.03.02 29.67 16.8z"/><circle cx="50" cy="48.8"/></g><path d="m81.66 30.83-31.66-17.94-31.66 17.94-1 .59v37.12l31.7 18 1 .57 1-.57 31.7-18v-37.13zm-1 36.55-29.66 16.86v-33.7l29.7-16.83zm-31.66 16.86-29.7-16.87v-33.66l29.7 16.83zm-28.64-52.24 29.64-16.81 29.64 16.81-29.64 16.8-29.67-16.8z" fill="#444"/><path d="m50.13 69.39 17.05-9.67v-19.31l-17.05 9.66z" fill="#8cc64f"/><path d="m32.82 59.72 17.05 9.67v-19.32l-17.05-9.66z" fill="#8cc64f"/><path d="m67 40.14-17-9.63-17 9.63 17 9.66z" fill="#8cc64f"/><path d="m50 48.83 15.29-8.66-.02-.02-15.27 8.67z" fill="#96bf3d"/><path d="m34.73 40.15-.02.02 15.29 8.66v-.01z" fill="#96bf3d"/><circle cx="50" cy="48.82" fill="#96bf3d"/><path d="m67.3 39-17.3-9.79-17.3 9.79-1 .58v20.81l17.3 9.83 1 .57 1-.57 17.32-9.83v-20.81zm-1 20.22-15.3 8.7v-17.36l15.32-8.68zm-17.3 8.7-15.32-8.7v-17.34l15.32 8.68zm-14.27-27.77 15.27-8.64 15.27 8.65-15.27 8.66-15.29-8.65z" fill="#fff"/></svg>
        <svg height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="m49.98 85.98 31.74-18.03v-35.97l-31.74 17.98z"/><path d="m18.3 67.94 31.7 18v-35.97l-31.7-17.96z"/><path d="m81.5 31.98-31.5-17.85-31.5 17.85 31.5 17.88z"/><path d="m50 48.8 29.67-16.8-.03-.02z"/><path d="m20.36 31.98-.03.02 29.67 16.8z"/><circle cx="50" cy="48.8"/></g><path d="m81.66 30.83-31.66-17.94-31.66 17.94-1 .59v37.12l31.7 18 1 .57 1-.57 31.7-18v-37.13zm-1 36.55-29.66 16.86v-33.7l29.7-16.83zm-31.66 16.86-29.7-16.87v-33.66l29.7 16.83zm-28.64-52.24 29.64-16.81 29.64 16.81-29.64 16.8-29.67-16.8z" fill="#444"/><path d="m50.13 69.39 17.05-9.67v-19.31l-17.05 9.66z" fill="#8cc64f"/><path d="m32.82 59.72 17.05 9.67v-19.32l-17.05-9.66z" fill="#8cc64f"/><path d="m67 40.14-17-9.63-17 9.63 17 9.66z" fill="#8cc64f"/><path d="m50 48.83 15.29-8.66-.02-.02-15.27 8.67z" fill="#96bf3d"/><path d="m34.73 40.15-.02.02 15.29 8.66v-.01z" fill="#96bf3d"/><circle cx="50" cy="48.82" fill="#96bf3d"/><path d="m67.3 39-17.3-9.79-17.3 9.79-1 .58v20.81l17.3 9.83 1 .57 1-.57 17.32-9.83v-20.81zm-1 20.22-15.3 8.7v-17.36l15.32-8.68zm-17.3 8.7-15.32-8.7v-17.34l15.32 8.68zm-14.27-27.77 15.27-8.64 15.27 8.65-15.27 8.66-15.29-8.65z" fill="#fff"/></svg>
    </a>
</body>
</html>

    
    `);
})


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api', merchantRoute);

app.listen(PORT, ()=> {
    console.log(`Node API app is running on port ${PORT}`)
});

