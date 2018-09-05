import React, { Component } from 'react';
import { Button } from 'reactstrap';
class App extends Component {
  constructor(){
    super();
    this.state = {
      gambar:'',
      gambar1:'',
    }
  }
  generate(){
    var gambar1 = this.refs.img.value;
    var url = `https://robohash.org/${gambar1}`;

    this.setState({gambar:url})
  }
  render() {
    const lay = 
    {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'400px'
    };
    return ( 
    <center>
      <div style={lay}>
      <style>{'body { background-color: #ff4d4d; }'}</style>
        <div>
          <div><img  src={this.state.gambar} gambar1={this.img}style={{borderRadius: '50%', background:'white',justifyContent: 'center',
            alignItems: 'center'}}/></div>
          <br></br>
          <input style={{maxWidth:"500px"}} ref='img'  type="text" placeholder="Ketik nama Anda..."/>
          <br/><br/>
          <button color="danger" onClick={()=>{this.generate()}}>Buat Profile Picture</button>
        </div>
        
      </div>
    </center>
    );
  }
}

export default App;