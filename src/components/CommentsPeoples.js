import React from 'react';

const CommentsPeoples=(props)=>{
    return(
        <div className='comment_container'>
            <h2 className="user_email" >{props.email}</h2>
            <h3 className="comments_body">{props.body}</h3>
        </div>
    )
};

export default CommentsPeoples;