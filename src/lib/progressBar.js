import React from 'react';
import {ProgressBar} from 'react-bootstrap';



const ProgBar = (props) => {
    let isStriped = props.isStriped
    return ( 
       <div className='ml-5 mr-5'>
           {isStriped 
           ?  <ProgressBar variant='danger' now={props.now} striped animated/>
           :  <ProgressBar variant='danger' now={props.now} />}
           
       </div>
     );
}
 
export default ProgBar;