import React from 'react';
import {Link} from 'react-router-dom';
import validator from 'validator';
import {Card,CardBody , Button, Form, FormGroup, Label, Input,Small} from 'reactstrap';

class Register extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Card  style ={{backgroundColor:'rgb(71, 123, 202)', width:'60%',minHeight:'50%',padding:'30px'}}>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for =" inputName" style ={{color:'#ebf0ec'}}>Name</Label>
                                <Input type="text" className="form-control" id="inputName" placeholder="Enter your Name"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="inputEmail" style ={{color:'#ebf0ec'}} >Email address</Label>
                                <Input type="email" className="form-control" id="inputEmail"  placeholder="Enter your email"/>
                      
                            </FormGroup>
                            <Button >submit</Button> 
                        </Form>
                    </CardBody>
                   
                </Card>
            
            
            </React.Fragment>
            // 
            //     <CardBody>
            //         <Form>
            //         <FormGroup>
            //             <Label for="inputName" style={{color: "#ebf0ec"}}> Name</Label>
            //             <Input type="text" className="form-control" id="inputName" placeholder="Enter your Name"/>
            //         </FormGroup>
            //         <FormGroup>
            //             <Label for="inputEmail" style={{color: "#ebf0ec"}}>Email address</Label>
            //             <Input type="email" className="form-control" id="inputEmail"  placeholder="Enter your email"/>
            //              <Small id="emailHelp" className="form-text"  style={{color: "#ebf0ec"}}>We'll never share your email with anyone else.</Small>
            //         </FormGroup>
            //         <Button type="submit" id ="submitBtn"  style ={{backgroundColor:" rgb(33, 46, 107)" , boxShadow:"rgb(46, 44, 44) 5px 5px 5px" , color:"#ebf0ec"}} >Submit</Button>
            //       </Form>
            //     </CardBody> 
            // </Card>
        )
    }
}

export default Register

