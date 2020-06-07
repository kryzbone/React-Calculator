import React from 'react';
import Display from './Display'


 let value;


function handleCalc(e) {
    value = e.target.innerText; 
    console.log(value)   
}




function Nums() {
    return (
        ['AC','-/+','%','7','8','9','4','5','6','1','2','3','0','.'].map(itm => <p key={itm} onClick={(e)=>handleCalc(e)}>{itm}</p>)  
    )
}  

function Ops() {
    return (
        ['/','*','-','+','='].map(itm => <p key={itm} onClick={handleCalc}>{itm}</p>)  
    )
}  



export default function Keys() {

    return (
        <React.Fragment>
            <Display value={value} />

            <div className='main'>
                <div className='num'>
                    <Nums />  
                </div>
                <div className='ops'>
                    <Ops />
                </div>
            </div>
        </React.Fragment>
        
    )
}


