import React, { Component } from 'react';

class PhoneForm extends Component {

    //ref를 위한 설정
    input = React.createRef();

    // input 상태 관리하기
    state = {
        name : '',
        phone : '',
    }

    handleChange = (e) => {
        this.setState({
            // e.target은 밑의 input, 즉 input의 value가 state의 name값이 된다는 것
            //name : e.target.value
            //input이 여러개인 경우 구분자를 줘서 각각의 값을 찾아가도록 한다.
            // 각각 input의 이름에 따라 다르게 들어감
            [e.target.name] : e.target.value
        });
    }

    // submit이 되면 자동으로 새로고침되는 기능이 필요없어서 막는 부분
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name : '',
            phone : '',
        })
        this.input.current.focus();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name = "name"
                    placeholder="이름" 
                    onChange={this.handleChange} 
                    value = {this.state.name} 
                    ref = {this.input}
                />
                <input
                    name = "phone" 
                    placeholder="전화번호" 
                    onChange={this.handleChange} 
                    value ={this.state.phone} />
                <button type="submit">등록</button>
            </form>
        ); 
    }
}

export default PhoneForm;