import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography, Stack } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';







const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart, id }) => (

  <>
  
    
  
      <Box id={id} className='scrolling-wrapper '>
            {data.map((item) => (
              <Box
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="0 40px"
                component= 'card'
              >
                {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
              </Box>
            ))}
      </Box>  
    
    <Box textAlign='end' color='#ff2625'>
      <ArrowBackIosIcon onClick={()=>{
        var slider = document.getElementById(id) 
          slider.scrollLeft = slider.scrollLeft - 500
      }}/>
      <ArrowForwardIosIcon onClick={()=>{
        var slider = document.getElementById(id) 
          slider.scrollLeft = slider.scrollLeft + 500
      }}/>
    </Box>
  
  </> 
);

export default HorizontalScrollbar;
