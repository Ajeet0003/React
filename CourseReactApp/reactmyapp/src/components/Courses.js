import axios from "axios";
import React from "react";
import {
    Card, 
    CardBody, 
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course=({course, update})=>{

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/deleteCourse/${id}`).then(
            (response)=>{
                toast.success("Course Deleted ");
                update(id);
            },
            (error)=>{
                toast.error("Course Not Deleted !! Server Challenge ")
            }
        )
    }

    return(
        <Card className='text-center'>
            <CardBody>
                <CardSubtitle tag='h5'>{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className='text-center'>
                    <Button color="danger" 
                     onClick={()=>{
                        deleteCourse(course.id);
                    }}
                    >Delete</Button>
                 {'  '}
                    <Button color="warning">Update</Button>
                </Container>
            </CardBody>

        </Card>
    )

}

export default Course;