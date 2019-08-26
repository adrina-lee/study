import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    value: 0
  };
  // static 이어야 함.
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }
  // 다음값을 가져와서 업데이트를 막음
  shouldComponentUpdate(nextProps, nextState) {
    // false일 경우 업데이트 안함
    if (nextProps.value === 10) return false;
    return true;
  }
  // 실제 업데이트 되고 난 후 호출
  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      console.log('value 값이 바뀌었다!', this.props.value);
    }
  }

  componentWillUnmount() {
    console.log('Good Bye');
  }

  render() {
    return (
      <div>
        {/*this.props.missing.something */}
        <p>props: {this.props.value}</p>
        <p>state: {this.state.value}</p>
      </div>
    );
  }
}

export default MyComponent;
