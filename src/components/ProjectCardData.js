
import proj1 from "../assets/discord_clone_img1.png"
import proj2 from "../assets/discord_clone_img2.png"
import finalyrproj from "../assets/final_yr_proj_map.png"
import financeproj from "../assets/finance_tracker_proj.png"
import tmpimg from "../assets/headphonespic.png"
import spotify_clone_img1 from "../assets/spotify-proj-img1.png"
import netflix_proj_p1 from "../assets/netflix_clone_p1.png"
import python_script_proj from "../assets/python_automation_01.JPG"
import recommender_proj from '../assets/recommender_app.png'

const ProjectData = [
    {
        imgsrc: proj1,
        title: "Discord clone web app",
        text: "A game chat with friends using getstream.io API. Send dms, create and edit channels, even send your favorite gifs and memes. Includes logins to so you can pick up where you left off. ",
        view: "https://github.com/Nicole-favela/gaming-messenger-app",
        site: " ",
    },
    {
        imgsrc: finalyrproj,
        title: "Our teams final year project: CAN Bus Visualizer Full stack MERN application",
        text: "Mern stack and networking application that provides visual of transmitting ecus on CAN bus",
        view: "https://github.com/Control-Alt-Elite/CS4311_CANBusVisualizer_7",
        site: " ",
    },
    {
        imgsrc: financeproj,
        title: "A Full stack MERN application for tracking personal expenses with login and authentication",
        text: "Provides user with a way to track their expenses and total spending. Users can add transactions, delete, edit and sort by amount. They can also view a pie chart breakdown for better visualization. Built with MUI react components and chart js.",
        view: "https://github.com/Nicole-favela/PersonalExpenseTracker",
        site: "https://expense-tracker-app-zhrg.onrender.com"
    },
    {
        imgsrc: spotify_clone_img1,
        title: "Spotify clone application: my love of music meets software engineering",
        text: "Listen to music, view playlists, music library, even search by song/artist. Built using React, Node, spotify API, spotify-web-api-node, and MUI components.",
        view: "https://github.com/Nicole-favela/SpotifyClone",
        site: "https://www.dropbox.com/scl/fi/61yxjbnc5uqddot3z29jp/spotify_clone_demo.MP4?rlkey=svn3wpsaw2afvumwf3sx9nmb2&dl=0"
    },
    {
        imgsrc: netflix_proj_p1,
        title: "Full stack Netflix clone",
        text: "This Netflix clone app was built with the MERN stack and incorporates user authentication using JWT and cookies for a seamless login and registration experience. Leveraging the TMDb API, the application mirrors Netflix's layout and design while utilizing React Player to stream movie trailers. The platform keeps track of users' recently viewed trailers and allows them to curate a personalized 'My List' with the ability to add or remove movies. Additionally, users can access their account details and log out through a dedicated profile page.",
        view: "https://github.com/Nicole-favela/Netflix-clone",
        site: "https://streammoviesapp.onrender.com",
    },
    {
        imgsrc: python_script_proj,
        title: "Python file automation",
        text: "This script was made in response to a problem I commonly have - screenshots and files cluttering my Mac desktop. Manually sorting and moving them was tedious. This script provides an efficient and powerful way to automate the process of cleaning up files on a desktop or any folder. Quickly remove clutter and only move the files you want and within a certain time frame. This script is user friendly thanks to argparse. Just run $python organize.py /full/path/to/messyfolder /full/path/to/target --extensions jpg png --months n. This will create separate folders for the year and month modified.",
        view: "https://github.com/Nicole-favela/FileOrganizationProject",
        site: " ",
    },
    {
        imgsrc: recommender_proj,
        title: "Movie Recommender",
        text: "Search from 10k movie titles from TMDB with this content based recommendation engine. Login or register with the help of flask jwt and save your favorite movies to 'My List' for later. Using NLP (Natural language processing) techniques, movie data is analyzed, vectorized, and compared with others to find the most relevant search results. Built with React, Flask, Postgresql, AWS s3, MUI components, and uiverse.io loading icons.",
        view: "https://github.com/Nicole-favela/RecommenderApp",
        site: " ",
    },
    {
        imgsrc: tmpimg,
        title: "More coming soon",
        text: "Currently typing away...",
        view: "https://github.com/Nicole-favela",
        site: " ",
    },
]
export default ProjectData;