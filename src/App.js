import logo from './logo.svg';
import './App.css';
import MenuItem from './Components/MenuItem';
import StyleComp from './Components/StyleComp';
import VideoDetails from './Components/VideoDetails';
// import Form from './Components/Form';
import NewForm from './Components/NewForm';

function App() {
  return (
    <div>
      {/* <MenuItem dish={'taco'} price={12}  likes={10}>
        i love food

        </MenuItem>
      <MenuItem dish={'pizza'} price={20} likes={10}/>
      <MenuItem dish={'sub'} price={10} likes={10}/>
      <MenuItem dish={'tacoPizza'} price={10}  likes={10}/>
      */}

      {/* <StyleComp/>
      <hr/>
      <VideoDetails title='shilagha' views={10} hashtags={['qwsedrfghj','wertyui','awsedrtyu']} />
      <VideoDetails title='sahil' views={10} hashtags= {['qwsedrfghj','wertyui','awsedrtyu']}/>
      <VideoDetails title='Charvi' views={20} hashtags={['qwsedrfghj','wertyui','awsedrtyu']}/>
      <VideoDetails title='Vihaan' views={20} hashtags={['qwsedrfghj','wertyui','awsedrtyu']}/>

      
      */}

      {/* <Form/> */}
      <NewForm/>
    </div>
  )
  
    
  
}

export default App;
