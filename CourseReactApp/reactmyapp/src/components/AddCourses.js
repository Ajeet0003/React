import axios from "axios";
import React, { Fragment,useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourses=()=>{
    useEffect(()=>{
        document.title="Add Courses";
     },[]);

     const [course, setCourse]=useState({});
     
     //form handle function
     const handleForm=(e)=>{
        console.log(course);
        postCourse(course);
        e.preventDefault();

     };

     //creating Funtion for posting data in server
     const postCourse=(data)=>{
        axios.post(`${base_url}/saveCourse`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Course Added");
                setCourse({id:"",title:"",description:""});
             }, (error)=>{
                    console.log(error);
                    console.log("error");
                    toast.error("Something went wrong");
                }
               );
     };

    return(
    <Fragment>
        <h1>Fill the Course Details</h1>
        <Form  onSubmit={handleForm}>
            <FormGroup>
                <label for="userId" > Course Id</label>
                <Input
                    type="text"
                    placeholder="Enter Id"
                    id="userId"
                    name="id"
                    onChange={(e)=>{
                        setCourse({...course,id:e.target.value});
                    }}
                />
            </FormGroup>
            <FormGroup>
                <label for="userId" > Course Title</label>
                <Input
                    type="text"
                    placeholder="Enter title here"
                    id="title"
                    name="title"
                    onChange={(e)=>{
                        setCourse({...course,title:e.target.value})
                    }}
                />
            </FormGroup>
            <FormGroup>
                <label for="userId" >Description</label>
                <Input
                    type="textarea"
                    placeholder="Enter description here"
                    id="description"
                    name="description"
                    style={{height:150}}
                    onChange={(e)=>{
                        setCourse({...course,description:e.target.value});
                    }}
                />
            </FormGroup>
            <Container className="text-center">
                <Button type="submit" color="success"> Add Course</Button>
                {'  '}
                <Button type="reset"  onClick={()=>{
                    setCourse({id:"",title:"",description:""});
                }} color="warning">Clear</Button>
            </Container>
        </Form>

    </Fragment>
    )
}

export default AddCourses;