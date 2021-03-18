import React, { useMemo, useEffect, useState } from "react";
import axios from 'axios';

export default function View() {
    const [images, setimages] = useState([]);
    const [isUploding, setUploding] = useState(null);

    useEffect(()=>{
 
        (async function anyNameFunction() {
         const res1 = await axios.get("http://localhost:5000/getImages")
         .then(res=>{
                 console.log(res);
                 return res;
              }).catch(err=>{
             console.log("err");
             
         })
         if(res1){
            console.log(res1);
            setimages([images,...res1.data]);
            console.log(images);
            images.shift();
            setUploding("hi");

         }
      }
         
    
    
        )();
      
    }, [])
    return (
        
  <div>
      
    
      
  {
                    isUploding ? (
                        images.filter((ele,index)=>{return index>0}).map((el,index) => (
                            <div>
                                <h1 className="w3-center">Simple Slider using Flickity Plugin By HACKERRAHUL</h1>
                            <div className="carousel" data-flickity={{ "wrapAround": true, "autoPlay": true, "imagesLoaded":true }} >
                            <div className="carousel-cell">
                            <img className="w3-image" src={`data:http://localhost:5000/${el.contentType};base64,${el.imageBase64}`} 
                            key={index} alt="UploadedImage"  />
                                </div>
                                </div>
                                </div>

                        ))
                    ) : null
                }
    </div>

    )
}
