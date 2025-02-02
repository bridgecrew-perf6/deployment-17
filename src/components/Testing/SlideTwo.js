import React  from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function SlideTwo({TestAnswers,setTestanswers}){
  
  const handleTestAnswers = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;    
    setTestanswers({ ...TestAnswers, [name]: value });
   
  };
  return(
  <div>
      <div className="Container">
          <div className="row justify-content-around py-4">
            <div className="col-sm-6 col-md-6 col-lg-5 col-xxl-6 col-xl-5">
              <img src="/Testing/Test2_Tumor.jpg"  alt="tumor" className="card-img-size img-fluid" ></img>
              <div className="d-flex justify-content-center my-5">
                <input type="radio" className="ms-3" name="Q2" value="C" onChange={handleTestAnswers} ></input>
                <label>C</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-5 col-xxl-6 col-xl-5">
              <img src="/Testing/Test2_No_Tumor.jpg" alt="no tumor" className="card-img-size img-fluid" ></img>
              <div className="d-flex justify-content-center my-5">
                <input type="radio" className="ms-3" name="Q2" value="D" onChange={handleTestAnswers}></input>
                <label>D</label>
              </div>
            </div>
          </div>
        </div> 
  </div>)
}



export default SlideTwo;
