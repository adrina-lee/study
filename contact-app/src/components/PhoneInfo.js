import React, { Component, Fragment } from 'react';
import { thisTypeAnnotation } from '@babel/types';

class PhoneInfo extends Component {

    state = {
        editing : false,
        name : '',
        phone : ''
    }

    // 기존에 변하지 않는 건 굳이 렌더링하지 않아도 되므로. 최적화부분
    shouldComponentUpdate(nextProps, nextState) {
        // 기본값 true
        if(this.state !== nextState) {
            return true;
        }
        return this.props.info !== nextProps.info;
    }
    

    handleRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    // state.editing 값 반전 -> div가 아니라 input을 보여주도록 바꾸게
    handleToggleEdit = () => {
        // 수정할 기존 값 가져와서 세팅하는 로직 등
               
        const { info, onUpdate} = this.props;
            // ture -> false
            // onUpdate
        if(this.state.editing){
            onUpdate(info.id, {
                name : this.state.name,
                phone : this.state.phone
            });
        }else{
            // false -> true
            // state에 info 값을 넣어주기
            this.setState({
                name : info.name,
                phone : info.phone
            })
        }

        this.setState({
            editing : !this.state.editing,
        })

       
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    render() {
        const { name, phone } = this.props.info;
        const { editing } = this.state;
        const style = {
            border  : '1px solid black',
            padding : '8px',
            margin  : '8px'
        }

        console.log(name);
        

        return (
            <div style = {style}>
                {
                    editing ? (
                        <Fragment>
                           <div>
                               <input 
                                name = "name"
                                onChange={this.handleChange}
                                value ={this.state.name}
                               />
                           </div>
                           <div>
                               <input
                                name = "phone"
                                onChange={this.handleChange}
                                value ={this.state.phone}
                               />
                           </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                        <div><b>{name}</b></div>
                         <div>{phone}</div>
                        </Fragment>
                    )

                }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>
                    {editing ? '적용' : '수정'}
                </button>
                
            </div>
          );
    }
}

export default PhoneInfo;