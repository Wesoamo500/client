import React, {useState,useEffect} from 'react'
import { Container,AppBar,Typography,Grid,Grow } from '@material-ui/core'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import mean from './images/mean.jpg'
import useStyles from './style'
import {getPosts} from './actions/post'
import { useDispatch } from 'react-redux'

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId,setCurrentId] = useState(null);

  useEffect(()=>{
    dispatch(getPosts())
  },[currentId,dispatch])
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography  className={classes.heading} variant='h3' align='center'>
          Memories
        </Typography>
        <img  src={mean} alt='keeya keys' height='60'/>
      </AppBar>
      <Grow in>
        <Grid container className={classes.mainContainer} justify='space-between' alignItems='stretch' spacing={3}>
          <Grid item xs='12' sm='7'>
            <Posts setCurrentId={setCurrentId}/>
          </Grid>
          <Grid item xs='12' sm='4'>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>
        </Grid>
      </Grow>
    </Container>
  )
}

export default App