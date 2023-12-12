
import "./ResumeContent.css"

import ButtonGroup from '@mui/material/ButtonGroup'


import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skills from "./Skills.js"
import {useState} from "react"


const ResumeContent=()=>{
      const [active, setActive] = useState(false)
     
      const handleClick = ()=>{
        return setActive(!active);
      }
      const buttons = [
        <Button key="one" onClick={(e)=>download(e)}>Download resume</Button>,
        <Button key="two"  onClick={()=>handleClick()}>Experience and Skills</Button>,
        // <Button key="three">Relevant Courses</Button>,
  ];
    const download=(e)=>{
      
        fetch('NF_resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob); //create obj
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'NF_resume.pdf';
                alink.click();
            })
        })
    }
    return(<div className="resume-info">
       
      
        {active === true && <Skills/>}

        <div className="btn-group">
         <Box  sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                m: 1,
                },
         }}>
                    <ButtonGroup color="secondary" size="large" aria-label="large button group">
                        {buttons}
                </ButtonGroup>
         </Box>
        
      
         </div>
    </div>
    )
    
}
export default ResumeContent;