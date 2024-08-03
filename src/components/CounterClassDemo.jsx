import React, { Component } from 'react';


class CounterClassDemo extends Component{
            constructor(props){
                super(props);
                this.state={
                    count : 0,
                    nature : "Odd" || "Even",
                }

                this.increment = this.increment.bind(this);
                this.decrement = this.decrement.bind(this);
                this.incrementBy5 = this.incrementBy5.bind(this);
                this.reset = this.reset.bind(this);
            }
            
            updateNature(count) {
                return count % 2 === 0 ? "Even" : "Odd";
            }
        
            increment() {
                this.setState((prevState) => ({
                    count: prevState.count + 1,
                    nature: this.updateNature(prevState.count + 1),
                }));
            }
        
            decrement() {
                this.setState((prevState) => ({
                    count: prevState.count - 1,
                    nature: this.updateNature(prevState.count - 1),
                }));
            }
        
            incrementBy5() {
                this.setState((prevState) => ({
                    count: prevState.count + 5,
                    nature: this.updateNature(prevState.count + 5),
                }));
            }

            reset() {
                this.setState({
                    count: 0,
                    nature: "Odd",
                });
            }

            render(){
                return (
                    <>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.increment}>Again Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.incrementBy5}>Increment By 5</button>
                    <button onClick={this.reset}>Reset</button>
                    <h1>CounterClassDemo: {this.state.count}</h1>
                    <h2>Nature: {this.state.nature}</h2>
                    </>
                );
            };
}

export default CounterClassDemo;