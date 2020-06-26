import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
              // numberOfGuessing va randomNumber duoc truyen tu thang Cha xuong
              //su dung toan tu 3 ngoi, neu dieu kien true thi text red
            <div>
               <div style={ this.props.numberOfGuessing >= 7 ? {color: 'red'} : {}} className="jumbotron text-center">
                    <h1>Get Random Number </h1>
                    <p>Random number from 1 to 100</p>
                </div>
            </div>
        );
    }
}

export default Header;