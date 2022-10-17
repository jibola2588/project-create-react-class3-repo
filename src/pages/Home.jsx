import React,{useState,useEffect} from 'react';

const Home = () => {
   const [post,setPost] =  useState(null)
    useEffect(() => { 
        getData(); 
        return () =>{ 
            getData();   
        }
    },[post])

   const getData = () => { 
       fetch(url)
       .then(res => console.log(res))
   }

  return (
    <div>
      Home page
      <button
      onClick = {() => getData()}
      > 
          getPost
      </button>
    </div>
  );
}

export default Home;
