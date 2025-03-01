import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer,toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Courses';
import Allcourses from './components/Allcourses';
import AddCourses from './components/AddCourses';
import Menu from './components/Menu';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App(){
  return(
  <div >
    <Router>
    <ToastContainer/>
      <Container>
      <Header/>
        <Row>
          <Col md={4}>
         <Menu/>
          
          </Col>
          <Col md={8}>
          <Routes>
            <Route path='/'  element={<Home/>} exact />
            <Route path='/add-course' element={<AddCourses/> } exact/>
            <Route path='/view-courses' element={<Allcourses />} exact/>
          </Routes>
          {/* <Home/> */}
          </Col>
        </Row>
      </Container>
    </Router>


    {/* <Home />
    <Allcourses/>

    <AddCourses/> */}
     
    {/* <Course course={{title:"Java Course",description:"This Course for a Beginner"}}/>
    <Course course={{title:"Python Course",description:"This Course for a Beginner"}}/> */}
  </div>
  )
}
export default App;

// function App() {
//   return (
//     <div >
//     <Footer/>
     
//   </div>
//   );
// };

// export default App;


// function App() {

  // const btnHandle=()=>{
  //   // toast.error("Done",{
  //   //   position:"top-center"
  //   // })
  //   toast.success("Done",{
  //     position:"top-center"
  //   })
  //   //toast.success("Done")
  //   // toast("first msg");
  // };
//   return (
//     <div>
//        <ToastContainer/>
//          <h1>Ajeet's Application</h1>
//          <Button color="primary" outline onClick={btnHandle}>Save</Button>
     
//    </div>
//   );
// }

//export default App;

// function App() {
//   return (
//     <div style={{background:'green',padding:20,width:400}}>
//       <Header name="Ajeet"title="Java"/>
//       <hr/>
//       <Header name="Rajat" title="Python"/>
//       <hr/>
//   <h1>Hi Ajeet</h1>
//   <h2>This is My React App </h2>
//   <Footer name="Archana"/>
//   </div>
//   );
// }

// export default App;