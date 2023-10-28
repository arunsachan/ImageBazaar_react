import React from "react";

const ImageList = ({images})=>{

// so in this imageBazaar clone project , the array value is not changing so we will not be adding any element inside the array nor we will be removing any element from the array so the index will not change now suppose we encounter any project in which array size is changing means the index of a particular elem. is changing so in that we can't use index because arr[i] is varying each and every time bcoz we are either adding any element or removing any element from the array so in that case we use "id" instead of index because every data that you extract from the api has specific "id".Now this "id" thing is good when id is given to you in some cases we see that id is not given to you so in that case what we will do we will use "uuid". For using uuid and info related to that refer https://www.npmjs.com/package/uuid  

// Also we can see that this Date.now , though it gives us a very random value each second yet we notice that two values have same key so to overcome this we use uuid as discussed above 

   return(
    <div>
      {images.map((image,index) => (
        <img key={Date.now()} src={image.urls.thumb}  alt={image.alt_description}/> 
      ))}
    </div>
   )
}

export default ImageList
