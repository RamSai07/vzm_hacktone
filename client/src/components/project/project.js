import React, { useEffect, useState } from "react";
import axios from 'axios';

export const Addproject = () => {
    const [error, setError] = useState([]);
    const [proType, setProType] = useState([]);
    const [proTitle, setProTitle] = useState([]);
    const [proDesc, setProDesc] = useState([]);
    const [proTech, setProTech] = useState([]);
    const [proPhoto, setProPhoto] = useState([]);
    const [proDoc, setProDoc] = useState([]);
    const [proLink, setProLink] = useState([]);

    const SubmitProject = async () => {
        if (proType === "soft") {
            await axios.post("http://localhost:8000/addsoftproject", { proType, proTitle, proDesc, proTech, proPhoto, proDoc, proLink })
                .then((result) => {
                    if (result) {
                        setError("Successfully added software project");
                    } else {
                        setError("Try again");
                    }
                })
                .catch((e) => setError(e.data));
        } else if (proType === "hard") {
            await axios.post("http://localhost:8000/addhardproject", { proType, proTitle, proDesc, proTech, proPhoto, proDoc, proLink })
                .then((result) => {
                    if (result) {
                        setError("Successfully added hardware project");
                    } else {
                        setError("Try again");
                    }
                })
                .catch((e) => setError(e.data));
        } else {
            setError("Select one either hardware or software");
        }
    }

    return (
        <>
            <div className="position-relative">
                <div className="alert alert-danger z-3 position-absolute top-0 end-0">{error}</div>
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center"> <h1 style={{ fontSize: "24px" }}>Add Project</h1></div>
                        <form>
                            <div className="form-group mb-2">
                                <label style={{ fontSize: "18px" }}>Project Type</label>
                                <select className="form-control" onChange={(e) => { setProType(e.target.value) }}>
                                    <option>Choose type of project</option>
                                    <option value='soft'>Software</option>
                                    <option value='hard'>Hardware</option>
                                </select>
                            </div>
                            <div className="form-group mb-2">
                                <label style={{ fontSize: "18px" }}>Project Title</label>
                                <input type="text" className="form-control" placeholder="Enter your project title" onChange={(e) => { setProTitle(e.target.value) }} />
                            </div>
                            <div className="form-group mb-2">
                                <label style={{ fontSize: "18px" }}>Project Description</label>
                                <textarea className="form-control" onChange={(e) => { setProDesc(e.target.value) }}></textarea>
                            </div>
                            <div className="form-group mb-2">
                                <label style={{ fontSize: "18px" }}>Technologies used in Project</label>
                                <textarea className="form-control" onChange={(e) => { setProTech(e.target.value) }}></textarea>
                            </div>
                            <div className="form-group mb-2">
                                <label style={{ fontSize: "18px" }}>Project Title Photo</label>
                                <input type="file" className="form-control form-control-md" onChange={(e) => { setProPhoto(e.target.files[0]) }} />
                            </div>
                            <div className="form-group mb-2">
                                <label style={{ fontSize: "18px" }}>Project Documentation</label>
                                <input type="file" className="form-control form-control-md" onChange={(e) => setProDoc(e.target.files[0])} />
                            </div>
                            <div className="form-group mb-2">
                                <label style={{ fontSize: "18px" }}>Project Photos</label>
                                <input className="form-control form-control-sm mb-1" id="formFileLg" type="file" onClick={(e) => { setProPhoto(e.target.files[0]) }} />
                                <input type="file" className=" form-control form-control-sm mb-1" id="formFileLg" onClick={(e) => { setProPhoto(e.target.files[0]) }} />
                                <input type="file" className=" form-control form-control-sm mb-1" id="formFileLg" onClick={(e) => { setProPhoto(e.target.files[0]) }} />
                                <input type="file" className=" form-control form-control-sm mb-1" id="formFileLg" onClick={(e) => { setProPhoto(e.target.files[0]) }} />
                                <input type="file" className=" form-control form-control-sm mb-1" id="formFileLg" onClick={(e) => { setProPhoto(e.target.files[0]) }} />
                            </div>
                            <div className="form-group mb-2">
                                <label style={{ fontSize: "18px" }}>Project Link</label>
                                <input type="text" className="form-control mb-2" onChange={(e) => { setProLink(e.target.value) }} />
                            </div>
                            <div className=" text-center">
                            <button type="button" className="btn btn-primary" onClick={SubmitProject} style={{ fontSize: "18px" }}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
