import React from 'react';
import Clock from 'react-live-clock';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ToDoList = () => {
    return(
        <>

        <h1 className='text-capitalize text-center text-danger'>Welcome to bootstrap v5.0.2</h1>
        <h1 className='text-center text-danger'>In react this is API real/Restful</h1>


          {/* <h1 style={{color: 'white', display: 'flex', backgroundColor: 'grey', margin: '0px 15px', justifyContent: 'center'}}>
            <Clock format={'HH:mm:ss'} ticking={true} /> 
            <br />
          </h1>
          <button className="btn btn-success">AliCheema</button> */}
          {/* <form className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="validationDefault01" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                defaultValue="Mark"
                required=""
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="validationDefault02" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                defaultValue="Otto"
                required=""
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="validationDefaultUsername" className="form-label">
                Username
              </label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefaultUsername"
                  aria-describedby="inputGroupPrepend2"
                  required=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault03" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                required=""
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="validationDefault04" className="form-label">
                State
              </label>
              <select className="form-select" id="validationDefault04" required="">
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationDefault05" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault05"
                required=""
              />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="invalidCheck2"
                  required=""
                />
                <label className="form-check-label" htmlFor="invalidCheck2">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form> */}
        </>
    );
}

export default ToDoList;
