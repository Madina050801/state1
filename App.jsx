import React from "react";

class Toshkent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count: 0,
      name: '',
      surname: '',
      data: {
        status: 'OK',
        dataList:[
          {
            id: 1,
            name: 'Eshmat',
            status: 'Mentor'
          },
          {
            id: 2,
            name: 'Toshmat',
            status: 'Mentor'
          },
          {
            id: 3,
            name: 'Eshmat',
            status: 'Mentor'
          },
          {
            id: 4,
            name: 'Gulmat',
            status: 'Mentor'
          },
        ]
      }
    }
  }
  render(){
    let count =0;
    const increment =(e) => {
      console.log(this.state.count, e.target.name);

      this.setState({count: this.state.count + 1});
    };
    const decrement =(e) => {
      console.log(this.state.count, e.target.name);

      this.setState({count: this.state.count - 1});
    };

    const onChange = (e) => {
      // console.log(e.target.value);
      console.log(e.target.value, e.target.name);
      this.setState({[e.target.name]: e.target.value});
    }

    const onDelete =(e) => {
      let res = this.state.data.dataList.filter((value) => value.id != e);
      this.setState({
        data: {
          ...this.state.data,
          dataList: res,
        }
      })
    }
    return(
      <div>
        <h1>Hi State {this.state.count}</h1>
        <h1>Name: {this.state.name}</h1>
        <h1>Surname: {this.state.surname}</h1>

        <button name='count' onClick={(e) =>increment(e)}>+</button>
        <button name='count' onClick={decrement}>-</button>
        <br />

        <input placeholder='name' name='name' onChange={onChange} type="text" />
        <input placeholder='surname' name='surname' onChange={onChange} type="text" />
        { !this.state.data.dataList.length ? (
          <h1>no data</h1>
        ) : (
          this.state.data.dataList.map((value)=>(
            <div key={value.id}>
              <h1>
              {value.id} {value.name} <button onClick={()=> onDelete(value.id) }>delete</button>
              </h1>
            </div>
          )))
        }
      </div>
      );  
    }
}


export default Toshkent;