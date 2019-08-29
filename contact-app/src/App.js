import React, {Component} from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 3;

  // 배열
  // 리액트에서는 불변성이 중요하므로 push같은 것 말고 새로 만들어서 넣던가 하는 방법을 써야한다.
  state = {
    information : [
      {
        id    : 0,
        name  : '김종대',
        phone : '010-1992-0921'
      },      
      {
        id    : 1,
        name  : '변백현',
        phone : '010-1992-0506'
      },      
      {
        id    : 2,
        name  : '김준면',
        phone : '010-1991-0522'
      },
    ],
    keyword : '',
  }

handleChange = (e) => {
  this.setState({
    keyword : e.target.value,
  })
}

  handleCreate = (data) => {
    // const inoformation = this.state.information 과 같음
    const {information} = this.state;
    this.setState({
      information : information.concat(Object.assign({}, data, {
        id : this.id++
      }))
    })
  }

  handleRemove = (id) => {
    const {information} = this.state;
    // 새로 받은 info의 id가 기존의 id와 다른 것만
    this.setState({
      information : information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information : information.map(
        info => {
          // info값을 파라미터로 가져와서 만약에 info.id값이 파라미터로 가져온 id값과 같으면
          if(info.id === id){
            return {
              id,
              ...data,
            };
          }
          return info;
        }
      )
    });
  }

  render(){
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <input 
          value ={this.state.keyword}
          onChange ={this.handleChange}
          placeholder ="검색"
        />
        <PhoneInfoList 
          data = {this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove = {this.handleRemove}
          onUpdate = {this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
