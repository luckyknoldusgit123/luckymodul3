import { 
    useState,
    useEffect } from 'react';
  import Posts from './components/Posts';
  
  
  const AppDashboard = () => {
  
    const[post,setPost]=useState([]);
  
    const fetchPostsHandler = (async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPost(data);
    });
  
  
    useEffect(()=>{
      fetchPostsHandler()
    },[]);
  
    return (
      <div>
        <h1 className='main-heading'>POSTS</h1>
        <div>
          {(post.length) ? (
            <div className='posts-list'>
              {post.map((data)=>(
                  <Posts
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      body={data.body}
                  />
              ))}
          </div>)
            : (<p>No Data</p>) 
          }
        </div>
      </div>
    );
  }
  
  export default AppDashboard;
  