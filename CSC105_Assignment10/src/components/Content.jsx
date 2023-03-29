import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

export function Content() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      pt={2}
      > 
      <Grid item xs={6}>
      <Grid direction="column">
        <Box position="static" sx={{
          flexGrow: 1,
          margin: "16px"
          }}
          >
          <Typography variant="h4" component="div" sx={{ mb : 2}}>
          Welcome to My Website
          </Typography>
          <Typography variant="body1" component="div" sx={{ mb:2}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut orci orci. 
          Integer non dui vitae neque suscipit lacinia. Pellentesque pharetra mollis orci ac posuere. 
          Aenean eu lectus enim. Sed aliquet venenatis est, eu ultricies orci maximus a. 
          Aliquam bibendum sed ligula vitae feugiat. Aliquam dignissim ornare bibendum. 
          Nullam luctus malesuada laoreet. Integer libero magna, porttitor nec mollis ac, sollicitudin id neque.
          </Typography>

          <Typography variant="body1" component="div" sx={{ mb:2}}> 
          Aenean aliquet ac justo non pharetra. Curabitur non lorem felis. Suspendisse sit amet sem vel diam finibus consequat. 
          Sed mollis gravida enim ut porta. Pellentesque vestibulum scelerisque tellus, a iaculis nibh tempor non. 
          Vivamus pulvinar justo sit amet lacus faucibus, ut rutrum magna mattis. Cras rhoncus eleifend diam at euismod. 
          Integer vestibulum lacus nec elit fermentum, sed dictum urna imperdiet. Nulla eget lectus a magna aliquam laoreet dignissim in nibh. 
          Suspendisse maximus erat vitae ipsum dapibus malesuada. 
          </Typography>
        </Box>
        </Grid>
        </Grid>
        </Grid>
  );
}

export function ActionAreaCard() {
    return (
    <Grid
    container
    direction="column"
    justifyContent="flex-start"
    alignItems="center"
    pt={2}
    > 
    
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://i.pinimg.com/564x/3a/9b/41/3a9b41d0ad89f9b234d9112c47327933.jpg"
                alt="Hogwarts Castle"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hogwarts Castle
                </Typography>
                <Typography variant="body2" color="text.secondary">
                a large, seven-storey high building supported by magic, 
                with a hundred and forty-two staircases throughout its many towers and turrets 
                and very deep dungeons. The castle was built in the late Early Middle Ages (c. 993) 
                by a wizard architect and the four most celebrated wizards of the age: Godric Gryffindor, 
                Helga Hufflepuff, Rowena Ravenclaw and Salazar Slytherin. The castle was the main building of 
                Hogwarts School of Witchcraft and Wizardry, regarded as the finest wizarding school in the world.
                </Typography>
              </CardContent>
          </Card>
          </Grid>

          <Grid item sm={6} md={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://i.pinimg.com/564x/3a/9b/41/3a9b41d0ad89f9b234d9112c47327933.jpg"
                alt="Hogwarts Castle"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hogwarts Castle
                </Typography>
                <Typography variant="body2" color="text.secondary">
                a large, seven-storey high building supported by magic, 
                with a hundred and forty-two staircases throughout its many towers and turrets 
                and very deep dungeons. The castle was built in the late Early Middle Ages (c. 993) 
                by a wizard architect and the four most celebrated wizards of the age: Godric Gryffindor, 
                Helga Hufflepuff, Rowena Ravenclaw and Salazar Slytherin. The castle was the main building of 
                Hogwarts School of Witchcraft and Wizardry, regarded as the finest wizarding school in the world.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={6} md={6}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://i.pinimg.com/564x/3a/9b/41/3a9b41d0ad89f9b234d9112c47327933.jpg"
                alt="Hogwarts Castle"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hogwarts Castle
                </Typography>
                <Typography variant="body2" color="text.secondary">
                a large, seven-storey high building supported by magic, 
                with a hundred and forty-two staircases throughout its many towers and turrets 
                and very deep dungeons. The castle was built in the late Early Middle Ages (c. 993) 
                by a wizard architect and the four most celebrated wizards of the age: Godric Gryffindor, 
                Helga Hufflepuff, Rowena Ravenclaw and Salazar Slytherin. The castle was the main building of 
                Hogwarts School of Witchcraft and Wizardry, regarded as the finest wizarding school in the world.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
  </Grid>
      
    );
  }