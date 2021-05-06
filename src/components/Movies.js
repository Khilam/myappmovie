
import React, {useState,useEffect}from 'react'

function Movies() {
    const [data, setData] = useState([])
    
    const getData = ()=>{
    
    fetch('data.json').then(
          response => response.json()).then 
                   (movies => setData(movies));
  }
  
  useEffect(()=> {getData()
  },[])

  console.log(data)
 /***search*****/
 const [search, setSearch]=useState('');
  return(
    
      data.map(el=>
      
             
       
       
       
       
       <div className='div'>
        
        
         <div className="figure">
  <img className="img" variant="top" src={el.image} />
 
  
   <div className="figcaption">
    <div className="titre"><strong>{el.title}({el.year})</strong></div>
    

    <p className="p-2">{el.info}</p>
    <ul>
    <li><button className="bouton" >Watch Now</button></li>
    
    <li> <button className="bouton" link to = "/button"> add to Favourite </button></li>
    </ul>
  </div>
 
  </div>
  </div>
  
       
   
 
      )
  
   )

 }

export default Movies
