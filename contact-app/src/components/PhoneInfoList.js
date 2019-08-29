import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';
 
class PhoneInfoList extends Component {

    static defaultProps = {
        data : []
    }

    render() {
        // const data = this.props.data;
        const { data, onRemove, onUpdate }  = this.props;

        console.log('rendering list');

        // 만약 data를 받지 못하면 map을 할 수 없어 오류가 뜸 
        //if(!data) return null;
        const list      = data.map(
            info => (
            <PhoneInfo 
                onRemove = {onRemove} 
                onUpdate = {onUpdate}
                info = {info}
                key = {info.id} 
            />
            )
        );
        /*
        key의 역할
        없다면 자리밀림 현상이 생김
        키값은 고유하니까 생기든 지워지든 해당 값을 가지고 다님
        즉 효율적으로 작동하게 하는 값
        index랑은 다른 점. id값이 제거하면 index랑 달라짐. 1을 삭제한다고 해서 뒤의 2가 1이 되진 않으니까.
        */

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;