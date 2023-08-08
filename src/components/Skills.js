//conditionally rendered component in resume 

//import "./BackGroundImgStyles.css"
import React, {useState} from 'react'
import PortfolioImg2 from "../assets/desk_img.avif"
import {Link} from 'react-router-dom'
import "./Skills.css"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

import { createTheme } from '@mui/material/styles';


const Skills = ()=>{
   
        const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
            main: '#0971f1',
            darker: '#053e85',
            },
            neutral: {
            main: '#64748B',
            contrastText: '#fff',
            },
        },
        });
    
    function LinearProgressWithLabel(props) {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">{`${Math.round(
                props.value,
              )}%`}</Typography>
            </Box>
          </Box>
        );
      }
      
      LinearProgressWithLabel.propTypes = {
        /**
         * The value of the progress indicator for the determinate and buffer variants.
         * Value between 0 and 100.
         */
        value: 80,
      };
    const [progress, setProgress] = React.useState(0);
    const [progressP, setProgressP] = React.useState(0);
    

    // const maxLevel = 90
    // React.useEffect(() => {
    //   const timer = setInterval(() => {
       
    //     setProgress((prevProgress) => (prevProgress >= maxLevel ? 10 : prevProgress + 10));
    //   }, 800);
    //   return () => {
    //     clearInterval(timer);
    //   };
    // }, []);
    //for python: dynamic skill, call with value = {progress}
    // const maxLevel2 = 85
    // React.useEffect(() => {
    //   const timer = setInterval(() => {
       
    //     setProgressP((prevProgressP) => (prevProgressP >= maxLevel2 ? 10 : prevProgressP + 5));
    //   }, 800);
    //   return () => {
    //     clearInterval(timer);
    //   };
    // }, []);
    return(
        <div className="skills-container">
            <p> Java </p>
            <br/>
            {/* <Box sx={{ width: '90%' }}>
                 <LinearProgressWithLabel value={90} variant = "determinate" color="secondary" />
            </Box> */}
            <p> Python </p>
            <br/>
            {/* <Box sx={{ width: '90%' }}> */}
                {/* {maxLevel = 60} */}
                 {/* <LinearProgressWithLabel value={90} variant ="buffer" color="secondary" />
            </Box> */}
            <p> Flask </p>
            <br/>
            <p> React js </p>
            <br/>
            {/* <Box sx={{ width: '90%' }}> */}
                 {/* <LinearProgressWithLabel value={85}  color="secondary" />
            </Box> */}
            <p> Express </p>
            <br/>
            {/* <Box sx={{ width: '90%' }}>
                 <LinearProgressWithLabel value={80}  color="secondary" /> */}
            {/* </Box> */}
            <p> Node js </p>
            <br/>
            {/* <Box sx={{ width: '90%' }}>
                 <LinearProgressWithLabel value={80}  color="secondary" />
            </Box> */}
            <p> Sql </p>
            <br/>
            {/* <Box sx={{ width: '90%' }}>
                 <LinearProgressWithLabel value={75}  color="secondary" />
            </Box> */}
            <p> Css </p>
            <br/>
            {/* <Box sx={{ width: '90%' }}>
                 <LinearProgressWithLabel value={70}  color="secondary" />
            </Box> */}
            <p> Mongodb </p>
            <br/>
            {/* <Box sx={{ width: '90%' }}>
                 <LinearProgressWithLabel value={75}  color="secondary" />
            </Box> */}
            <p> Agile </p>
            <br/>
            {/* <Box sx={{ width: '90%' }}>
                 <LinearProgressWithLabel value={85}  color="secondary" />
            </Box> */}
            <p> Rest APIs </p>
            <br/>
            {/* <Box sx={{ width: '90%' }}>
                 <LinearProgressWithLabel value={85}  color="secondary" />
            </Box> */}
            <p> Selenium webdriver </p>
            <br/>
            <p> MUI react component library </p>
            <br/>
           

        </div>
        
    )
}
export default Skills