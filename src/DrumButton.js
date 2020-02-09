import   React  from 'react';


export default class DrumButton extends React.Component{
  
    constructor(){
        super();
        this.state = {
            play: false
        }
        this.control = React.createRef();
    };
  
    componentDidUpdate(prevProps, prevState){
        if(this.state.play && !prevState.play){
            /** Stop animation */
            const _self = this;
            setTimeout(function(){
                _self.setState({
                play: false
            })}, 180)
        }
    }

    playSound=()=>{
        // Show loading animation.
        var playPromise =  this.control.current.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
            // Automatic playback started!
            // Show playing UI.
            })
            .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
            });
        }
    }
    onClickPlay = (e) => {
        //aconsole.log("EVENT CLICK: ", e)
        /** Pass up code */
        e.preventDefault();
        e.stopPropagation();
        this.props.getCode(this.props.audioName);
        this.playSound();
        /** Play animation */
        this.setState({play:true});
        return;
    }
  
    onKeyPlay = (keyCode) => {
            this.props.getCode(this.props.audioName);
            this.playSound();
            this.setState({play:true});
            return;
    }

    //on key press move focus to that button and trigger it
    setFocus(keyCode) {
        this.refs[this.props.name].focus();
        this.onKeyPlay(keyCode)
      }

    render(){
      const {
        name,
        audioName,
        audioFile,
      } = this.props;

      const buttonStyle = this.state.play ? "drum-pad play-sound" : "drum-pad";

        return(
            <button className={buttonStyle} id={audioName} onClick={this.onClickPlay} value={name} ref={this.props.name}>
                {name}
                <audio id={name} ref={this.control} className="clip" src={audioFile}  />
            </button>  
          )
    }    
}