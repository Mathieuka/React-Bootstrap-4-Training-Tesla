// index.js
import React from 'react';
import { render } from 'react-dom';


// components
import Header from './src/lib/header';
import Jumbotron from './src/lib/jumbotron';
import ProgressBar from './src/lib/progressBar';
import NavBar from './src/lib/navBar';
import Cards from './src/lib/cards';
import Form from './src/lib/contactForm';
import Footer from './src/lib/footer';


class Index extends React.Component{
    render(){
        return(
            
           <div>
              <Header bgColor='#525860' source='https://believemy.com/uploads/2f3811b9174e35a2d77902ffd36a9a37_4dfb82dd429edb6a11a81ff74e9abfc4.png'/>
              <Jumbotron
               title = 'Bienvenue.'
               titleFontSize = {80}
               message= 'Le site de Tesla vous permet de commander vos fusées et vos navette spaciale depuis votre canapé.'
               button='yes'
               buttonMessage='Un conseillé est en ligne.'
               imgUrl='https://believemy.com/uploads/126d05180ddf6f2ea67c8b669855bf89_e45c0e92710b43b3b938ed8fc4938f71.png'
               w={100}/>
               <ProgressBar now={70} isStriped={true}/>
               <Jumbotron
               head = 'Bienvenue sur Tesla. le site est en maintenance' 
               bgColor='aac4ef' 
               hr={true}
               h={25}
               ml={5}
               mr={5}
               btn={true}
               />
               <NavBar/>
               <Cards 
               nbCards={3} 
               head= {['','Information']}
               subtitle= {['Nouveautés','Nouveautés']}
               aImage={['https://believemy.com/uploads/c7fe8837368024dc01e1845337f167e9_18fb807dabb97a3e4f920d1b0c9176b1.png'
               ,"https://believemy.com/uploads/c7fe8837368024dc01e1845337f167e9_18fb807dabb97a3e4f920d1b0c9176b1.png"]}
               aText={['Nouveauté vous pourrez bientôt acheter des fusées pour allez sur la Lune',
               'Les 3O premiers acheteur de fusées auront moins 30%']}
               />
               <Form/>
               <Footer/>
           </div>
        )
    }
}

render(
      <Index/>,
      document.getElementById('root')
  )
  
