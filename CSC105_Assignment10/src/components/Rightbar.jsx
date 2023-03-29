import {
    Box,
    ImageList,
    ImageListItem,
    Typography,
  } from "@mui/material";
  import { Grid } from "@mui/material";
  import React from "react";
  
  const itemData = [
    {
      img: "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
      title: "Harry",
    },
    {
      img: "https://pm1.narvii.com/6937/3c1c203f47bbb9c0be3a6d00907df13db8d610dcr1-518-670v2_hq.jpg",
      title: "Hermione",
    },
    {
      img: "https://i.pinimg.com/736x/2f/73/71/2f7371b498c0ef7a2e1dab1c6f63882c.jpg",
      title: "Ron",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/1/16/Draco_Mal.JPG",
      title: "Draco",
    },
  ];
  
  const Rightbar = () => {
    return (
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Box display={"flex"} flexDirection={"column"} mt={2} mb={2}>
          <Typography variant="h6" fontWeight={100}>
            Latest Photos
          </Typography>
          <ImageList sx={{ width: 250 }} cols={2}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    );
  };
  
  export default Rightbar;