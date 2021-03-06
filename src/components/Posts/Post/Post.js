import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core';
import React from 'react'
import useStyles from './style'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt'

import moment from 'moment'
import {useDispatch} from 'react-redux';
import {deletePost,likePost} from '../../../actions/post';

const Post = ({post,setCurrentId}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia image={post.selectedFile} title={post.title} className={classes.media}/>
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{color:'white'}} size='small' onClick={()=>setCurrentId(post._id)}>
          <MoreHorizIcon fontSize='default'/>
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>{post.tags.map((tag)=>`#${tag }`)}</Typography>
      </div>
      <Typography className={classes.title} variant='h5' gutterbottom>{post.title}</Typography>
      <CardContent>
        <Typography  variant='body2'color='textSecondary' component='p'>{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' onClick={()=>dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize='small'/>
          &nbsp;Like&nbsp;
          {post.likedCount}
        </Button>
        <Button size='small' color='primary' onClick={()=>dispatch(likePost(post._id))}>
          <ThumbDownAltIcon fontSize='small'/>
          &nbsp;DisLike&nbsp;
        </Button>
        <Button size='small' color='primary' onClick={()=>dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize='small'/>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post