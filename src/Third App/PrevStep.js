
import React from 'react'
import { Component } from 'react';

export class View extends Component
{
    render(){
        return(
            <>
                <div className='viewdata'>
                    <h1 id='header'>EMPLOYEE DATAS</h1>
                <br/>

                <div id='datas'>
                    {
                        this.props.viewdata.map((value,index)=>{
                            return(
                                <p id='detail'>
                                    
                                    Name:{value.Name} || department:{value.Department} || rate:{value.Rate}
                                    </p>
                            );
                        })
                    }
                    </div>
                    <br/>


                    <div className='backbtn'>
                        <button id='back' onClick={() => this.props.backbtn()}>Go Back</button>
                        </div>
                    </div>
                    
            </>
        );
    }
}

export default View;