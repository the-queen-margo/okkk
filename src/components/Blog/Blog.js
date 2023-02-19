import './Blog.css';
import axios from "axios";
import React from 'react';
import { useState} from "react";
import { Component } from "react";
import {BlogCard} from './components/BlogCard';
//import {AddPostForm} from './components/AddPostForm';

export class Blog extends Component  {
    state = {
        showBlog:true,
        showAddForm: false,
        blogArr: []
    };
    componentDidMount(){
        axios.get('https://638319706e6c83b7a98bca14.mockapi.io/scrimm')
        .then((response) => {
            this.setState({ 
                blogArr: response.data
            })
        })
        .catch((err) =>{
            console.log(err)
        })
    }
 render() {
    const blogPosts = this.state.blogArr.map((item,pos) =>{
        return(
               <BlogCard
               description = {item.description}
               key = {item.id}
               title={item.title}

               liked={item.liked}
              likePost={() => this.likePost(pos)}
              deletePost={() =>this.deletePost(pos)}
              />
        )
    });

    return(
    <>
     <button className = 'openCloseBlogbBth' onClick = {this.handleAddformShow}>
     m̛̟̹̋ak̜̠͔̅̿̈́é͚ ̨̺̰́̕͝SH̱͕̄͠Í̼T͖̼͖͚͍̃͒͐̑͆P̧̻̦̑̍̇O͉̮̔̀̑ͅS̢̅T ̤͍͓̼̈̎̈́͑
 ̡͓̺͆̉̚
̤͉̳͓̄́̚͞
͔̫̬͗͞͡Ḑ̝̑̑O͖̭̥͍̔̈̔͝ ̙̎N̹̓Ǫ͖̪̼͒̀͊̇T̫͎̠̺͌̌̑̂̽ͅ ̡̭̯͋̌͋TǪ̛Ů̝C͙̪̬͇͆͗̂̆H͇͙̒̇̉͟ ̣̠͐͂TH̲̘̾̉͋ͅȊ̙̼̃͋̂͜ͅS͔͡ ̧͖̞̯͛́͗͡I̙̅F̱͍̥̗̏̚̕͞ ̥͍̘̈́̅́͡ͅY̰͖͓͒̒͘OU̼̔ ̹̗̽͂͊̀͢͢Ń̢̘̦̋͠O͎͞T͎͝ ͓̱̎͠C̣̍R̥͔͉͓͑̊̏̾E̠̎Ă̞̻͈͑͝T̳̯̋͌E͖͋D̡͙̾͞ ̺͚̘̫́̀̓̓T̰̓͠ͅH̦̜̲̀͡͝Ȉ̝͚̘̤̭͑͋̆͞S̯̎͒͢ ͕̖͔̰̾͛͗͝S͇͆̐͢Ḭ͍̏̀Ť͍̫͈̔͞Ẻ̜̠͍̗̀̓̑
     </button>
     <div className ='posts'>{blogPosts}</div>
   </>) 
 }
}