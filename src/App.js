import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      sideDrawerOpen: false
    };
  }
  
  drawerToggleClickHandler=()=>{
    this.setState(prevState=>{
      return{
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };

  backdropClickHandler=()=>{
    this.setState({
      sideDrawerOpen: false
    });
  };

  render(){

    let sideDrawer;
    let backdrop;
    if(this.state.sideDrawerOpen){
      backdrop=<Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <p>This is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
