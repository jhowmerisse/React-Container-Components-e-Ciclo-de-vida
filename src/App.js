import React, { Component } from 'react';
import Header from './componentes/Header';
import Timeline from './componentes/Timeline';
import TimeLineStore from './logicas/TimeLineStore'


const timeLineStore = new TimeLineStore([]);

class App extends Component {
  render() {
    return (
    <div id="root">
      <div className="main">
        <Header/>
        <Timeline login={this.props.params.login} store={timeLineStore}/>
      </div>
    </div>
    );
  }
}

export default App;
