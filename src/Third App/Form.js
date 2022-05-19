import React,{ Component } from 'react';
import {View} from './PrevStep';
import './Style.css';

  
class Form extends Component{
    state = {Name:'', Department:'', Rate:'',user:[],viewform:true};
  handleSubmit(event){
    event.preventDefault()
    const obj= {
      Name : this.state.Name,
      Department: this.state.Department,
      Rate : this.state.Rate,
      Viewform: this.state.viewform,
    };

    const tArr = this.state.user;
    tArr.push(obj);
    this.setState({user:tArr, viewform: !this.state.viewform});
  }
  handleChange=(event)=>{
    this.setState({
      [event.target.name] : event.target.value
    })

    
  }
  goback = () =>
    {
        this.setState({
            viewform : !this.state.viewform,
        });
    
    }
  render(){
    return(
        <>
        {this.state.viewform ? (
            <div className='container'>
            <h1>EMPLOYEE FORM</h1>
            <br/>
      <form>
       
         <div>
          <label htmlFor='Name'>
          <input
            name='Name' 
            placeholder='Name'
            value={this.state.Name}
            onChange={this.handleChange}
            required
          />
          </label>
        </div>
        <div>
          <label htmlFor='Department'></label>
          <input
            name='Department' 
            placeholder='Department'
            value={this.state.Department}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='Rate'></label>
          <input
            name='Rate' 
            placeholder='Rate'
            value={this.state.Rate}
            onChange={this.handleChange}
            required
          />
        </div>
       
        <div>
          <button onClick={this.handleSubmit.bind(this)}>Click Me</button>
        </div>
       
      </form>
      </div>
      ):(
            <View viewdata={this.state.user} backbtn={this.goback}/>       
        )}
        </>
    )
  }
}
  
export default Form;