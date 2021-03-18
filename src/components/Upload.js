import React, { useMemo, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import { Progress } from 'reactstrap';
import _ from 'lodash';


export default function Upload(props) {
    const [file, setFile] = useState([]);
  const [files, setFiles] = useState([]);

  const [isUploding, setUploding] = useState(null);
  const [uploadedImgs, setUplodedImgs] = useState([]);
  const [uploadProgress, setProgress] = useState(0);


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
        setUplodedImgs([uploadedImgs,...res1.data]);
        uploadedImgs.shift();
        console.log(uploadedImgs);
        setUploding("hi");
     }
  }
     


    )();
  
}, [])
  const handleChange = e => {
      //let { files } = e.target.files;
      let { files } = e.target;
    console.log(e.target);
      let fd1 = new FormData();
      //let fd2 = new FormData();
     // for(let i = 0; i<e.target.files;i++){
       // fd1.append('image', e.target.files[i]);
        //setUplodedImgs([...uploadedImgs, files]);
   // }
    //console.log(uploadedImgs);
      //formData.append('file', files);

     // fd2.append('image', files[0]);


      _.forEach(files, file => {
        fd1.append('image', file);
      });
      
      axios.post("http://localhost:5000/saveImages", fd1)
    .then(res=>{
        if(res.status==200){
            console.log(res);
            setUplodedImgs([uploadedImgs,...res.data]);
            console.log(uploadedImgs);
            setUploding("hi");
        }
        else{
            console.log("err")
        }
    }).catch(err=>{
        console.log("err");
        
    })
     // let { data } = await API.post(uploadUrl, formData, {
       //   onUploadProgress: ({ loaded, total }) => {
         //     let progress = ((loaded / total) * 100).toFixed(2);
        //      setProgress(progress);
         // }
     // });
      
      
  }


 const onFileChange=(e)=>{
   e.preventDefault();
   console.log(e);
   for(let i = 0;i<e.target.files.length;i++){
    setFiles(...e.target.files,files);
   }
}

  const submit=()=>{
    setFile(files);
    console.log(files);

    const obj={
        image:files,
    }

    const fd1=new FormData();

    fd1.append("image",obj.image);
    
    axios.post("http://localhost:5000/saveImage", fd1)
    .then(res=>{
        if(res.status==200){
            console.log(res.data)
        }
        else{
            console.log("err")
        }
    }).catch(err=>{
        console.log("err");
        
    })
  }

  return (
  
<div className="form-group">
            <label className="text-primary font-weight-bold"></label>
            <div className="d-flex dropzone-container">
                <div className="container-fluid dropzone-uploader-mask d-flex justify-content-center align-items-center">
                    <img className="file-uploader-icon" src="" alt="Upload-Icon" />
                    <div className="d-flex flex-wrap mt-4">
                {
                    isUploding ? (
                        uploadedImgs.filter((ele,index)=>{return index>0}).map((el,index) => (
                            
                            <img src={`data:http://localhost:5000/${el.contentType};base64,${el.imageBase64}`} key={index} alt="UploadedImage" className="mt-2 img-thumbnail img-fluid uploaded-img mr-2" />
                        ))
                    ) : null
                }
            </div>
                </div>
                <input multiple name="image" className="dropzone-input" type="file" id="id" onChange={handleChange} />
            </div>
            {
                isUploding ? (
                    <div className="flex-grow-1">
                        <div className="text-center">{uploadProgress}%</div>
                        <Progress value={uploadProgress} />
                    </div>
                ) : null
            }
            
        </div>
 
  );
}

