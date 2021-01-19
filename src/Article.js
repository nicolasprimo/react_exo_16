import React, { useState } from 'react';
function Article(props) {  
  const [changeTitle, setChangeTitle] = useState(props.titre)
  return (
    <div>
      {
      changeTitle.map((elem,index) =><h1 key={index}>{elem.titre}</h1>  )      
      }
           
    </div>
  );
}

export default Article;