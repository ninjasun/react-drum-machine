import React from 'react';
import './App.css';
import DrumButton from './DrumButton';

const board = [{
  code: "Q",
  audioFile: "./horse.mp3",
  type: "audio/mpeg",
  audioName: "audio-name-Q"
}, 
{
  code: "W",
  audioFile: "./horse.mp3",
  type: "audio/mpeg",
  audioName: "audio-name-W"
},
{
  code: "E",
  audioFile: "./horse.mp3",
  type: "audio/mpeg",
  audioName: "audio-name-E"
}, 
{
  code: "A",
  audioFile: "./horse.mp3",
  type: "audio/mpeg",
  audioName: "audio-name-A"
},
{
  code: "S",
  audioFile: "./horse.mp3",
  type: "audio/mpeg",
  audioName: "audio-name-S"
},
{
  code: "D",
  audioFile: "./horse.mp3",
  type: "audio/mpeg",
  audioName: "audio-name-D"
},
{
  code: "Z",
  audioFile: "./horse.mp3",
  type: "audio/mpeg",
  audioName: "audio-name-Z"
},
{
  code: "X",
  audioFile: "./horse.mp3",
  type: "audio/mpeg",
  audioName: "audio-name-X"
},
{
  code: "C",
  audioFile: "./horse.mp3",
  type: "audio/mpeg",
  audioName: "audio-name-C"
},
];

const bankOne = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
{
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
{
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
{
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
{
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
{
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
{
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
{
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
{
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];




class  App extends React.Component {
  constructor(){
    super();
    this.state = {
      action: ""
    }
  }


  getCode=(padCode)=>{
    this.setState({
      action: padCode
    })
  }

  handleKeyUp=(e)=>{
    e.preventDefault();
    e.stopPropagation();
    this.refs[e.keyCode].setFocus(e.keyCode);
  }
  

  render(){
    return (
      <div className="App" onKeyUp={this.handleKeyUp}>
        <div id="drum-machine">
          <div id="controls" >
            {bankOne.map( item => <DrumButton key={item.keyCode} ref={item.keyCode} name={item.keyTrigger} getCode={this.getCode} audioName={item.keyCode} audioFile={item.url} />)}
          </div>
          <div id="display-container">
            <div id="display">
              {this.state.action}
            </div>
          </div>
         </div> 
       </div>
    );
  }
}

export default App;





