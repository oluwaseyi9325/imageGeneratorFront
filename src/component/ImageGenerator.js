import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import {HashLoader} from "react-spinners"
function ImageGenerator() {
  const [imageDesc, setImageDesc] = useState("");
  const [num, setNum] = useState("");
  const [loader, setLoader] = useState(false);
  const [ wel,setWel]=useState(true)
  const sizeType_ref = useRef("");
  const [items, setItems] = useState([]);
  let sizeType = sizeType_ref.current.value;
  const details = { imageDesc, num, sizeType };
  const generateBtn = () => {
   if(imageDesc && num && sizeType){
    setWel(false)
      setLoader(true)
      axios.post(`https://image-generator-now.onrender.com/postDetails`, details)
      .then((res) => {
        if (res.data.status) {
            setLoader(false)
          setItems(res.data.object);
          // console.log(items)
        } else {
            setLoader(false)
          alert(`${res.data.message}`);
        }
      })
      .catch((err) => {
        setLoader(false)
        alert("Network error");
      })
   }else{
    alert("Please fill all the filed!!!");
   } 
     
  };
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-lg-10 col-md-12 mx-auto shadow rounded-5">
          <section className="p-4 row">
            <div className="col-lg-4 col-md-7">
              <h2 className="text-center pb-4 text-warning">Image Generator</h2>
              <div>
                <label>What Image are you looking for?</label>
                <textarea
                  value={imageDesc}
                  onChange={(e) => setImageDesc(e.target.value)}
                  style={{ resize: "none" }}
                  className="form-control"
                  placeholder="Type: Dog kissing a lion image"
                />
              </div>
              <div className="mt-4">
                <div className="row">
                  <div className="col-6">
                    <label>Size your need?</label>
                    <select ref={sizeType_ref} className="form-control">
                      <option value="256x256">Small</option>
                      <option value="512x512">Medium</option>
                      <option value="1024x1024">Large</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <label>How many Image?</label>
                    <input
                      value={num}
                      onChange={(e) => setNum(e.target.value)}
                      placeholder="100?"
                      type="number"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => generateBtn()}
                  className="btn btn-warning rounded-4 col-12 text-white"
                >
                  Click to Generate Image
                </button>
              </div>
              <div className="mt-4">
                <small>
                  <i>
                    Adding portrait,thumbnail and color features will be
                    available soon.
                  </i>

                </small>
                <div className="text-center">
                    <small><i>@Seyi_Adedokun</i></small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-8 col-md-7"
              style={{ borderLeft: "5px dashed grey" }}
            >
                
              <div className="" style={{ overflow: "auto", height: "400px" }}>
                 
{
    loader?<div className="d-flex justify-content-center mt-5 pt-5">
    <HashLoader className="mt-5" color="red" loading={loader} size={120} />
    </div>:""
}
{
    wel?<div className="d-flex justify-content-center mt-5 pt-4">
    <img src={require("../img.png")} />
    </div>:""
}

                {items?.map((val, i) => {
                  return (
                    <div className="text-center py-3">
                      <img src={val.url}  />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ImageGenerator;
