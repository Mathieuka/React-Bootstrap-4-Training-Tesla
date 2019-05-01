import React from 'react';
import { Jumbotron, Button} from 'react-bootstrap';



const jumbo = (props) => {
    const { imgUrl, hr, head, btn  } = props;
    
    return ( 
        <Jumbotron className={`h-${props.h} w-${props.w} mr-${props.mr} ml-${props.ml} text-white`} 
        style={{backgroundImage: 'url(' + imgUrl + ')' , backgroundSize:'cover',backgroundPosition:'center', backgroundColor:`${props.bgColor}`}}>
            {head ? <div className='text-primary'>{head}</div> : false} 
            {hr ? <hr/> : false}
            {btn ? 
            <div>
                <Button className='w-50 btn btn-danger'>Suivre les avancements</Button>
                <Button className='btn btn-success w-50' >Suivre les avancements</Button>
            </div> 
            : false}  
            <h1 className='p-5 text-left' style={{fontSize:`${props.titleFontSize}`}}>{props.title}</h1>
            <h2 className='p-5 text-left'>{props.message} {props.button === 'yes' ? <Button className=' btn btn-success'>{props.buttonMessage}</Button> : false}</h2>
        </Jumbotron>


     );
}
 
export default jumbo;

