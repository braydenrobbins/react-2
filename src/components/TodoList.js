import React, { Component } from 'react';

class TodoList extends Component {

  state = {
      todos: [],
    inputValue: '',
    time: 0
  }

  componentDidUpdate(prevProps, prevState) {
    const { inputValue } = this.state

    if (inputValue !== prevState.inputValue) {
        console.log('new inputValue')
    }
  }

  timer = null;

  componentWillUnmount() {
    console.log('todo list unmounting');
    clearInterval(this.timer);
  }

  handleChange = (event) => {
      this.setState({
          inputValue: event.target.value
      });
  }

  componentDidMount() {
    this.timer = setInterval(() => {
        this.setState(prevState => ({
            time: prevState.time + 1,
        }))
    }, 1000);
  }
    render() {

        const { inputValue, time } = this.state;
        return (
            <>
                <h1>Todos- current time: {time}</h1>
                <form>
                    <input value={inputValue} onChange={this.handleChange} />
                </form>
            </>
        )
    }
};

export default TodoList;