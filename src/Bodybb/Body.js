import React from 'react';
import './Body.css'
import Side from './Side'
import  Middle from './Middle'
import Aside from './Aside'



// const Hide = () => {
//     return(
//         <div className='bet-body'>
//             <h1>No</h1>
//             <Middle />
//             <Aside />
//         </div>

//     )

// }
// const whole = () => {
//     return(
//         <div className='bet-body'>
//             <Side />
//             <Middle />
//             <Aside />

//         </div>
//     )
// }

class Body extends React.Component{
    constructor(props) {
        super(props);
        this.state = {  }

    }
    
    render() { 
        return ( <div className="bet-body">
            <Side />
            <Middle />
            <Aside  />
        </div> );
    }
}
 
export default Body
;
        // const toggle = true
        // if (toggle){
        //     return <Show />
        // }else{
        //     return <Hide />
        // }


