import React from 'react';
import {Link} from 'react-router-dom';
import validator from 'validator';
import {Card,CardBody , Button, Form, FormGroup, Label, Input,Alert} from 'reactstrap';

import {registerPost,allSubjectsPost} from '../services/api'




class Register extends React.Component{
    componentDidMount(){
        allSubjectsPost().then(data =>{
            console.log(data);
            this.setState({...this.state,subjectArray:data})
        })
    }
    //
state ={
    email:'',
    name:'',
    subjectArray:[]
    
   
}
//creat click function for submit btn

onRegisterClick =(e)=>{
    e.preventDefault();
    if(this.state.email.trim() ===''|| this.state.name ==='' || !validator.isEmail(this.state.email.trim())){
       alert("chick your info" )
    }else{
        registerPost(this.state.email.trim(),this.name.trim()).then(data =>{
            console.log(data);
        })
    }
};

//creat options element

    render(){
        const optionsElement =this.state.subjectArray.map( subject =>{
            return(
                <option key ={subject.id}>{subject.name}</option>
            )
        }
            
        );
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
                            <FormGroup>
                                <Label for="subject" style ={{color:'#ebf0ec'}}>Choose the Subject</Label>
                                <Input type="select" name="select" id="subject">
                                        <option></option>
                                        {optionsElement}
                                </Input>
                            </FormGroup>
                            <Button onClick ={this.onRegisterClick} style={{ boxShadow:'rgb(46,4,44) 5px 5px 5px', color:'#ebf0ec',backgroundColor:'rgb(33,46,107)'}} >submit</Button> 
                        </Form>
                    </CardBody>
                   
                </Card>
            
            
            </React.Fragment>
           
        )
    }
}

export default Register

