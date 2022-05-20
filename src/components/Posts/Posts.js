import React from 'react'
import {Grid, CircularProgress} from '@material-ui/core'
import Post from './Post/Post'
import useStyles from './style'

import { useSelector } from 'react-redux'

const Posts = ({setCurrentId}) => {
  const posts = useSelector((state)=>state.posts)
  const classes = useStyles();
  console.log(posts)
  return (
    !posts.length ? <CircularProgress /> :(
      <Grid container className={classes.container} alignItems='stretch' spacing={3}>
        {
          posts.map((post)=>(
            <Grid key={post._id} xs={12} sm={6}>
              <Post style={{marginBottom:'12px'}} post={post} setCurrentId={setCurrentId}/>
            </Grid>
          ))
        }

      </Grid>
    )
  )
}

export default Posts