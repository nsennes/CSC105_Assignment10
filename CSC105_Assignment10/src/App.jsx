import Appbar from "./components/Appbar";
import {Content, ActionAreaCard} from "./components/Content"
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Box from "@mui/material/Box";
import { Container } from "@mui/material"
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Box >
      <Appbar />
      <Container >
        <Grid container spacing={3} p={5}>
          <Grid item md={3}  >
            <Sidebar />
          </Grid>
          <Grid item md={6} >
            <Content />
            <ActionAreaCard />
          </Grid>
          <Grid item md={3}>
            <Rightbar />
          </Grid>
        </Grid>
      </Container>
    </Box >
  );
}

export default App;
