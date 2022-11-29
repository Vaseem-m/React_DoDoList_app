import React from "react";
class FormElements extends React.Component {
    
    constructor(){
        super();
        this.state = {
            name:"",
            
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

handleOnSubmit(e){
e.preventDefault();

this.setState({
    name: e.target[0].value,
    
})
}
    
render(){
    
   console.log(this.state.name)

    return(
        <>
            <h1 >To Do List</h1>
            <p>Task is {this.arr}</p>
            <p>{this.arr}</p>
            <form onSubmit={this.handleOnSubmit} >
                <input type="text" name="name"></input>
                <input type="submit"/>
            </form>
        </>
    )
}

}

export default FormElements;
