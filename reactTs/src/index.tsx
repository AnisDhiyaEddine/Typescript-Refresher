import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps{
  color: string;
}

interface AppState{
  count: number
}
class App extends React.Component<AppProps, AppState> {
  
  constructor(props: AppProps) {
    super(props);
    this.state = {
      count : 0
    }
  }
  onClickInc = ():void => {
    this.setState({count:this.state.count + 1})
  }

  onClickDec = (): void => {
    this.setState({ count: this.state.count - 1 })
  }
   render() {
     return (
       <div>
         <button onClick={this.onClickInc}>Increment</button>
         <button onClick={this.onClickDec}>Decrement</button>
         <br />
         <div>Count is { this.state.count}</div>
       </div>
     )
  }
}

ReactDOM.render(<App color="red" />,document.querySelector('#root'))