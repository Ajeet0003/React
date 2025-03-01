import React, { useState, useEffect } from "react";
import Course from "./Courses";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses=()=>{

    useEffect(()=>{
       document.title="All Courses";
        // alert("testing")
    },[]);

    const getCourse=()=>{
        axios.get(`${base_url}/getCourse`).then(
            (response)=>{
                console.log(response.data);
                setCourses(response.data);
                toast.success("Api called successfully!");
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong!");
            }
        )
    }

    //Calling Api
    useEffect(()=>{
        getCourse();
    },[]);

    const [courses, setCourses]=useState([
        // {id:"1",title:"Java Course", description:"This course for beginner"},
        // {id:"2",title:"Python Course", description:"This course for beginner"},
        // {id:"3",title:"Angular Course", description:"This course for beginner"}
    ])

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
    }

    return(
        <div>
            <h1>All Courses</h1>
            <p1>List of All courses as follows</p1>

            {
                courses.length>0?courses.map((item)=>
                <Course key={item.id} course={item} update={updateCourses} />
                ):"No Courses"
            }
        </div>
    );
};

export default Allcourses;