import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  state = {
    counter: 1,
    error : false
  };
  // 부모컴포넌트에서사용해야함
  componentDidCatch(error, info){
    console.log(error);
    console.log(info);
    this.setState({
      error : true,
    });
    // API를 통해서 서버로 오류내용 날리기
  }

  // 컴포넌트가 새로 만들어질 때마다 호출
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  
  componentDidMount() {
    console.log('componentDidMount');
    
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    if(this.state.error){
      return(
        <div>에러났다!</div>
      )
    }
    return (
      <div >
        {this.state.counter < 10 && <MyComponent value={this.state.counter} />}
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default App;
