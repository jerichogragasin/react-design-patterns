import { SplitScreen } from './SplitScreen';


const LeftHandComponent = ({name})=> {
  return <h1 style={{backgroundColor: 'green'}}>Left! {name}</h1>
}

const RightHandComponent = ({message}) => {
  return <p style={{backgroundColor: "red"}}>Right {message}</p>
}

 
function App() {
  return (
    //Passing children instead of using props indicating the children
    <SplitScreen leftWeight={1}  rightWeight={1}>
      <LeftHandComponent  name="shaun"/>
      <RightHandComponent message="hello"/>
    </SplitScreen>
  );
}

export default App;
