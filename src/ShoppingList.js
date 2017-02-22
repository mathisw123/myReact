/**
 * Created by mathiswan on 2017-02-17.
 */
import React, { Component } from 'react';

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    {
                        this.generateContent()
                    }
                </ul>
                <hr/>
            </div>
        );
    }

    generateContent() {
        var content = this.props.params.checkboxNames.map(function (name, index) {
            return (
                <div id={index} key={index + "_div"}>
                    <CustomRow label={name} key={index + 1}>1</CustomRow>
                    <MyInput/>
                    <InputRow/><br/>
                    <Clock/>
                </div>
            )
        });
        return content;
    }
}

var Clock = React.createClass({

    render: function(){
        this.state = {date: new Date()};

       return (
           <div>
               <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
           </div>
       )
    },
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    },

    componentWillUnmount() {
        clearInterval(this.timerID);
    },

    tick() {
        this.setState({
            date: new Date()
        });
    }
})



var CustomRow = React.createClass({
    render: function(){
        return <li>CustomRow</li>
    },

    handleChange(event) {
        console.log(event.target.checked);
    }
})

var MyInput = React.createClass({
    render: function(){
        return <li>myinput</li>
    },
    handleChange(event) {
        console.log(event.target.value);
    }
})



class InputRow extends Component {
    render(){
        return <li>  InputRow</li>;
    }
}


export default  ShoppingList;