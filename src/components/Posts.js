import { React, useState } from "react";
import CommentsPeoples from "./CommentsPeoples";


const Posts = ( props ) => {

    const { title, body } = props;
    const[ comments, setComments ] = useState([]);
    const[ hide, setHide ] = useState(false);

    const CommentHandler = ( async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.id}`);
        const data = await response.json();
        setComments(data);
        setHide(!hide);
    });
    
    return(
      <div className='post'>
        <h2 className='title'>{title}</h2>
        <h3 className='content_body'>{body}</h3>
        <button className="comment_btn" onClick={()=>CommentHandler()}>{!hide ? "Show Comments" : "Hide Comments"}</button>
        {(hide) ? (
          <div className="post_section">
            {(comments.length) ?
              (
                comments.map((item)=>(
                  <CommentsPeoples key={item.id}
                  id={item.id}
                  email={item.email}
                  body={item.body}
  
                  />
                )
              )
                 ) : (<p>No Data</p> )
              }
          </div>
        ) : null}
      </div>
    )
};

export default Posts;