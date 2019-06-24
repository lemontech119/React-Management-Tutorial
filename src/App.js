import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birtday': '961212',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동2',
    'birtday': '961212',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동3',
    'birtday': '961212',
    'gender': '남자',
    'job': '대학생'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return (
              <Customer
                //map을 사용할떄는 key값을 사용  
                key={c.id} 
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birtday}
                gender={c.birthday}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}


export default App;
