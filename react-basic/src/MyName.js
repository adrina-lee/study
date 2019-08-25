import React from 'react';
/*
class MyName extends Component {
  static defaultProps = {
    name: '기본이름'
  };
  render() {
    return (
      <div>
        안녕하세요? 제 이름은 <b>{this.props.name}</b>입니다.
      </div>
    );
  }
}
*/
// 함수형 컴포넌트를 만들면 시간이 조금은 적게 걸린다
const MyName = ({name}) => {
 return <div>안녕하세요! 제 이름은 {name} 입니다.</div>
};

MyName.defaultProps = {
  name : 'adrina'
};

export default MyName;
