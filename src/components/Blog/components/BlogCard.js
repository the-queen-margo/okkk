import './BlogCard.css'
 
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
export const BlogCard = ( {
   title,
   description,
   liked,
   likePost,
   deletePost
}) =>{
    const heartFill=liked? 'green' : 'crimson'
    likePost=(pos) => {
     const temp = [...this.state.blogArr];
     temp[pos].licked= !temp[pos].licked;
     this.setState( {
        blogArr:temp
     })

    };
    deletePost = (pos) =>{
    if (window.confirm(`Удалить ${this.state.blogArr[pos].title}?`)){
        const temp=[...this.state.blogArr];
        temp.splice(pos,1);
        this.setState({
            blogArr:temp
        })
    }
    }
    return(
      <div className='post'>
      <div className='posthead'>
        <h2>{title} </h2>
        <span className = 'deleteForeverButton' >
        
        </span>
      </div>
      <div className='desc'>  
        {description}
      </div>
      <div className='button'>
        <span className='favoriteButton'>
               
        </span>
      </div>
      </div> )
     }

     // <DeleteIcon/>

     //<ThumbUpIcon style={{fill:heartFill}}/>