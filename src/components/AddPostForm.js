import './AddPostForm.css'
import { Component } from "react";
export class AddPostForm extends Component {
    state = {
        postTitle: '',
        postDescription: ''
    }
    handlePostTItleChange = (e) =>{
        this.setState({
            postTItle: e.target.value
        })
    }
    handleDescriptionChange  = (e) =>{
        this.setState({
            handleDescription: e.target.value
        })
    }
    createPost = () =>{
        const post = {
            id: this.props.blogArr.length +1,
            title: this.state.postTitle,
            description:this.state.postDescription,
            liked: false
        }
        this.props.addNewBlogPost(post)
    }
render (){
        return(
            <>
            <div className='overlay'>
              <div className="addFormDiv">
                <div className='modalForm'>
                    <h1 class = 'headerModalForm'>Make post</h1>
                    <input
                    type="text"
                    placeholder="zagolovok post"
                    name="email"
                    className="placeholderForm"
                  
                required
                />
                <input
                type="text"
                placeholder='Текст поста'
                name = "parol"
                className="placeholderForm2"
               
                required
                />
                </div>
              </div>




            </div>
        </>
        )
}
}