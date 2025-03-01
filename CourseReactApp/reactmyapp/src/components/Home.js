import React,{useEffect} from 'react';
import { Jumbotron,Container,Button } from 'reactstrap';

function Home(){
        useEffect(()=>{
           document.title="Home";
        },[]);
    return(
        <div className="text-center">
    <div class="jumbotron" >
            <h1>React's Application</h1>
            <p1>Full Stack Developer</p1>
         
            <Container>
                <Button color='primary' outline>
                    Start Learning
                </Button>
            </Container>
    </div>
    </div>
    );
};

export default Home;