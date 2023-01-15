import axios from "axios";
import { useState, useEffect } from "react";

const ActivityCard = () => {
  const [fetchedActivityData, setFetchedActivityData] = useState([]);
  const [activityDataUpdate, setActivityDataUpdate] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await axios.get("http://localhost:4000");
      setFetchedActivityData(fetchedData.data.users);
    };
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    await axios.delete("http://localhost:4000/" + id);
    const remainingData = fetchedActivityData.filter((item) => item._id !== id);
    setFetchedActivityData(remainingData);
  };
  const handleUpdate = (index) => {
    const editData = fetchedActivityData[index];
    setActivityDataUpdate(editData);
  };
  const handleChange = (e) =>{
    setActivityDataUpdate({...activityDataUpdate,[e.target.name]:e.target.value})
}
const handleSave = async (id) =>{
 await axios.put("http://localhost:4000/" + id,activityDataUpdate);
 const previousData = fetchedActivityData;
 const updated_list = previousData.map((item)=>{
  if(item._id === activityDataUpdate._id ){
    return activityDataUpdate;
  } 
  else{
    return item;
  }
 })
 setFetchedActivityData(updated_list)
}
  return (  
    <div className="row container col-md-12 col-sm-12 my-5 mx-auto bg-light p-5 rounded-5 activity-card-container">
      {fetchedActivityData.map((data, index) => {
        return (
          <div className="col-sm-4 my-3">
            <div key={index} className="card bg-white rounded-3 border-0">
              <div className="card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">{data.name}</p>
                <h5 className="card-title">Description</h5>
                <p className="card-text">{data.description}</p>
                <h5 className="card-title">Activity Type</h5>
                <p className="card-text">{data.activityType}</p>
                <h5 className="card-title">Duration</h5>
                <p className="card-text">{data.duration}</p>
                <h5 className="card-title">Date</h5>
                <p className="card-text">{data.date}</p>
                <div className="d-flex justify-content-between">
                  <button
                    type="submit"
                    onClick={() => handleDelete(data._id)}
                    className="btn btn-danger rounded-3"
                  >
                    Delete
                  </button>
                  <button
                    type="submit"
                    onClick={() => handleUpdate(index)}
                    className="btn btn-success rounded-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content border-0 bg-light">
            <div className="container col-md-12  col-sm-12 mx-auto  p-5 rounded-5 ">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control rounded-3"
                  name="name"
                  value={activityDataUpdate.name}
                  onChange={handleChange}
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control rounded-3"
                  id="description"
                  name="description"
                  onChange={handleChange}
                  placeholder="Description"
                  value={activityDataUpdate.description}
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="activity-type" className="form-label">
                  Activity Type
                </label>
                <select
                  className="form-select rounded-3"
                  name="activityType"
                  onChange={handleChange}
                  value={activityDataUpdate.activityType}
                  id="activity-type"
                  aria-label="Default activity-type"
                >
                  <option value="run">Run</option>
                  <option value="bicycle">Bicycle</option>
                  <option value="ride">Ride</option>
                  <option value="swim">Swim</option>
                  <option value="walk">Walk</option>
                  <option value="hike">Hike</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="duration" className="form-label">
                  Duration
                </label>
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="duration"
                  name="duration"
                  onChange={handleChange}
                  value={activityDataUpdate.duration}
                  placeholder="Duration"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control rounded-3"
                  onChange={handleChange}
                  value={activityDataUpdate.date}
                  name="date"
                  id="date"
                  placeholder="Date"
                />
              </div>
              <button type="submit" onClick={() => handleSave(activityDataUpdate._id)} className="btn btn-primary rounded-3 w-100" data-bs-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
