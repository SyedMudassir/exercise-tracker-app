import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ActivityForm = () => {
  const navigateTo = useNavigate()
    const [activityData,setActivityData]= useState({
        name:'',
        description:'',
        activityType:'',
        duration:'',
        date:''
    });
    const handleChange = (e) =>{
        setActivityData({...activityData,[e.target.name]:e.target.value})
    }
    const handleSubmit = () =>{
        console.log(activityData)
        axios.post('http://localhost:4000/activitydata',activityData);
        navigateTo('/activities')
    }
  return (
    <div className="container-fluid col-md-12 col-sm-12 my-3 py-5">
      <div className="row container m-auto">
        <div className="col-md-12 form-col col-sm-12 bg-white rounded-5 p-5">
        <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control rounded-3" name='name' value={activityData.name} onChange={handleChange} id="name" placeholder="Name" />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Description</label>
      <textarea
        className="form-control rounded-3"
        id="description"
        name='description'
        onChange={handleChange}
        placeholder="Description"
        value={activityData.description}
        rows="3"></textarea>
    </div>
    <div className="mb-3">
      <label htmlFor="activity-type" className="form-label">Activity Type</label>
      <select className="form-select rounded-3" name='activityType' onChange={handleChange} value={activityData.activityType} id="activity-type" aria-label="Default activity-type">
        <option value="run">Run</option>
        <option value="bicycle">Bicycle</option>
        <option value="ride">Ride</option>
        <option value="swim">Swim</option>
        <option value="walk">Walk</option>
        <option value="hike">Hike</option>
      </select>
    </div>
    <div className="mb-3">
      <label htmlFor="duration" className="form-label">Duration</label>
      <input
        type="text"
        className="form-control rounded-3"
        id="duration"
        name='duration'
        onChange={handleChange}
        value={activityData.duration}
        placeholder="Duration"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="date" className="form-label">Date</label>
      <input type="date" className="form-control rounded-3" onChange={handleChange} value={activityData.date} name='date' id="date"  />
    </div>
   <button type="submit" onClick={handleSubmit} className="btn w-100 btn-primary rounded-3">Submit</button>
        </div>
      </div>
    
  </div>
  )
}

export default ActivityForm;