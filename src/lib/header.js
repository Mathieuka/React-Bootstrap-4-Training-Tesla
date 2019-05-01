import React from 'react';


const Header = (props) => {
    return ( 
        <div className='p-5 text-center' style={{backgroundColor:`${props.bgColor}`}} >
            <img src={props.source} className='w-25'/>
        </div>
     );
}

export default Header;