import React , {useState , useEffect} from "react";
import axios from "axios";

const ImageSearch = ({setImages})=>{

const [searchTerm, setSearchTerm] = useState("") 

useEffect(()=>{
    searchIt()
},[])

function searchIt(){
    axios.get("https://api.unsplash.com/search/photos" , {
        params: {
           query: searchTerm || "random"
        },
       headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
       } 
    } )
    .then(response => setImages(response.data.results))
    .catch(err => console.log(err))
}

    return (
      <div>
      <input type="text" placeholder="Enter Something....." onChange={e => setSearchTerm(e.target.value)}/> 
      <button onClick={searchIt}>Search</button>
      </div>
    )
}

export default ImageSearch