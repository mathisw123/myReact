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
                        this.props.params.checkboxNames.map(function(name,index){
                            return   (
                                <div id={index}>
                                <CustomRow label={name} key={index+1}></CustomRow>
aaaa{index}
                                    <myInput key={name}></myInput>
                                </div>
                            )

                        })


                    }

                </ul>
                <hr/>
            </div>

        );
    }



}


var CustomRow = React.createClass({
    render: function(){
        return <li>abc</li>
    },

    handleChange(event) {
        console.log(event.target.checked);
    }
})

var myInput = React.createClass({
    render: function(){
        return 123
    }
})


class inputRow extends React.Component {
    render(){
        return <li>  def</li>
    }
}


export default  ShoppingList;