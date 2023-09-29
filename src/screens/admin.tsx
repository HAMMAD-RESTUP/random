import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import BAButton from '../component/BAButton';
import { useNavigate } from "react-router-dom";
import { BrowserRouter ,Route, Router,Routes } from 'react-router-dom';
import { useState } from "react";
import BAInput from "../component/BAInput";
import Html from './html';
import Css from './css'
import JsQuiz1 from './jsquiz1';
import JsQuiz2 from './jsquiz2';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



// My js Logics
var questions = [
  {
  question:"Html Stands For _______________________",
  options: ["Hyper Text Makeup Language",
  "html",
  "Case Cading Style Sheet",
  "Hypertext markup language"
  ],
  correctAns: "Hypertext markup language",
},
{
  question:"Css Stands For _______________________",
  options: [
  "Casecading Style Sheet",
  "Java",
  "Ram",
  "Hypertext markup language"
],
  correctAns: "Casecading Style Sheet",
},
{
  question:"Js Stands For _______________________",
  options: [
    "Java Style",
    "Java Script",
    "Script",
    "Script Src"
  ],
  correctAns: "Java Script",
},
  {
  question:"Dom Stands For _______________________",
  options: [
  "Document Object Model",
  "html",
  "Css",
  "Java"
],
  correctAns: "Document Object Model",
},
{
  question:"Ram Stands For _______________________",
  options: [
  "Read Only Memory",
  "Dom",
  "Random Acccess Memory",
  "For Pc"
  ],
  correctAns: "Random Acccess Memory",
  },
  {
  question:"Rom Stands For _______________________",
  options: [
    "Hyper Text Markup Language",  
    "html",
    "HTml",
  "Read Only Memory"
  ],
  correctAns: "Read Only Memory",
  },
  ];




const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Task(props: Props) {
  
  
  const Save = () => {
    
  }
  const [quizmodel,setquizmodel] = useState([]) 
  const [questionmodel,setquestionmodel] = useState<any>({})
  const [option,setoption] = useState()
  const [optionlist,setoptionlist] = useState()
  const [lock,unlock] = useState()
  
  
  const navigate = useNavigate(); 
  const Unlock = () => {
    
}



  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar sx={{background:'Black', height:"80px"}} />




      <Divider sx={{background:'Black'}} />
      <List sx={{marginTop:'50px'}}>
        {['HTML', 'CSS', 'JS QUIZ 1', 'JS QUIZ 2'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider sx={{color:'Black'}} />
      </List>

      <div className='ml-10'>
        <BAButton onClick={Save} label="Log Out" />
      </div>

    </div>
  );
  
  const container = window !== undefined ? () => window().document.body : undefined;

  // My logics
  const fillModel = (key:string, val:any) => {
    questionmodel[key] = val;
    setquestionmodel({ ...questionmodel });

  };
  const checkdata=()=>{
  console.log(questionmodel);
  }


  // tsx Return 


  return (
    <Box sx={{ display: 'flex',}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background:"MediumSeaGreen"
        }}
      >
        <Toolbar>
      
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Quiz App Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, }}
        aria-label="mailbox folders"
      
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
         

          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Box sx={{display:"flexend"}}>
        <BAButton  onClick={Save} label="Save Quiz" />

        </Box>

       
        <Box sx={{ width: 1 }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 4">
            <BAInput
              value={questionmodel.question}
              onChange={(e:any) => fillModel("question",e.target.value)
            
            }
              label="Quiz Name"
            />
            </Box>
            <Box gridColumn="span 4">
            <BAInput
              value={questionmodel.question}
              onChange={(e:any) => fillModel("question",e.target.value)
            
            }
              label="Quiz Duration"
            />
            </Box>
            <Box gridColumn="span 4">
            <BAInput
              value={questionmodel.question}
              onChange={(e:any) => fillModel("question",e.target.value)
            
            }
              label="Secret Key"
            />
            </Box>
          </Box>


          <Box sx={{ marginTop: "25px" }} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>

            <Box gridColumn="span 3">
              <Item sx={{ height: "50px" }}><Button  variant="contained" color="success"></Button>Quiz Open</Item>
            </Box>
            <Box gridColumn="span 9">
              <BAInput
              value={questionmodel.question}
              onChange={(e:any) => fillModel("question",e.target.value)
            
            }
              label="Description"
            />
            </Box>
          </Box>
        </Box>


        <Box sx={{marginTop:"20px"}}>
          <BAButton onClick={Unlock} label='Lock Quiz' />
        </Box>


        <Box sx={{ marginTop: "50px" }} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 11">
            <Item sx={{ height: "80px" }}> 
             <BAInput
              value={questionmodel.question}
              onChange={(e:any) => fillModel("question",e.target.value)
            
            }
              label="Question"
            /></Item>
          </Box>
          <Box gridColumn="span 1">
            <BAButton onClick={checkdata} label='+' />

          </Box>

        </Box>

        <Box sx={{ marginTop: "30px" }} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 3">
            <Item sx={{ height: "50px" }}>
            <BAInput
              value={questionmodel.question}
              onChange={(e:any) => fillModel("Option 1",e.target.value)
            
            }
              label="Options"
            />
              
              </Item>
          </Box>  
        </Box>
        <Box sx={{ marginTop: "30px" }} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 3">
            <Item sx={{ height: "50px" }}>Correct Answer: 
            </Item>
          </Box>

        </Box>


        {/* Nested Routing */}

        <Routes>
          <Route path="html" element={<Html />} />
          <Route path="css" element={<Css />} />
          <Route path="jsquiz1" element={<JsQuiz1/>} />
          <Route path="jsquiz2" element={< JsQuiz2/>} />
        </Routes>





      </Box>
    </Box>
  );
}