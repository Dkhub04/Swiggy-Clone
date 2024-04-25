import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Name : {this.props.name}</h2>
                <h2>Place : {this.props.location}</h2>
                <h2>Contact : karthik._.done</h2>
            </div>
        )
    }
}

export default UserClass;