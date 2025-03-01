import React from "react"
import { Card, CardBody } from "reactstrap"


function Header({name,title}){

    return(
        <div>
            <Card className="my-2 bg-warning" >
                <CardBody>
                <h1 className="text-center my-2">Welcome to Ajeet's Application</h1>
                </CardBody>
            </Card>
        
           
        </div>
    )
}
export default Header

// function Header({name,title}){

//     return(
//         <div>
//            <h1>{name}</h1>
//            <h2>{title}</h2>
//            <p1> This is Header Component for Learning purpose </p1>
//         </div>
//     )
// }
// export default Header