import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Folder name="Desktop" >
        <Folder name = "Music">
          <File name="allstar.mp4"/>
          <File name="express.mp4" />
        </Folder>
        <File name="cats.jpeg"/>
        <File name="dog.png" />
      </Folder>
      <Folder name="Applications"/>
    </div>
  );
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const {name, children} = props
  const direction = isOpen? 'down': 'right';
  const handleClick =() =>{
    setIsOpen(!isOpen)}

  return (
    <div >
      <span onClick={handleClick}>
        <i className=" blue folder icon" ></i>
        <i className={`caret ${direction} icon`} ></i>
        </span>{name}
      <div style={{marginLeft : '25px'}}>{isOpen ? children : null}</div>
     
    </div>
  )
}
const File = (props) => {
  const {name} = props;
  const fileExt = name.split('.')[1]
  const fileIcon = {
    mp4: "headphones",
    jpeg : "file image",
    png : " file image outline"
  }
  return <div>
    <i className={` ${fileIcon[fileExt]} icon`} ></i>{name}</div>
   
  
}

export default App;
