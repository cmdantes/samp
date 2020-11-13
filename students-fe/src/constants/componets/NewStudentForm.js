import React from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

import axios from "axios";

import {API_URL} from "../constants"

class NewStudentForm extends React.Component{
    state = {
        pk:0,
        name:"",
        email:"",
        document:"",
        phone:""
    };

    componentDidMount(){
        if (this.props.student){
            const{pk, name, document, email, phone} = this.props.student;
            this.setState({pk,document,email,phone});
        }
    }

    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    };

    createStudent = e =>{
        e.preventDefault();
        axios.post(API_URL, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    editStudent = e =>{
        e.preventDefault();
        axios.put(API_URL, this.state.pk, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    defaultIfEmpty = value =>{
        return value === "" ? "" : value;
    };

    render(){
        return(
            <Form onSubmit
        )

    }

}