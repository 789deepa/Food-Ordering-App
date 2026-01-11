import React from "react";

class UserClass extends React.Component {

    constructor (props){
        super(props);
        
        this.state = {
            userInfo: {
                name: "Dummy",
                login: "Default",
                avatar_url: "dummy",
            },
        }                       
        ;
        //console.log("child constructor");
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    };

    async componentDidMount() {
    //console.log("Parnet component mount");

    const data = await fetch("https://api.github.com/users/789deepa");
    const json = await data.json();
    this.setState ({
        userInfo: json,
    })
    
};
    componentDidUpdate() {
        console.log("component did updat")
    }

    componentWillUnmount() {
        console.log(" will unmount")
    }

    render() {  //Never update State var directly 

        const {name, login, avatar_url} = this.state.userInfo;
        
        return (
            <div className="user-class">
            {/* <button className="button" onClick={this.increment}>Count {this.state.count}</button> */}
            <img className="avatar-img" src={avatar_url} /> 
            <h1>Hellow This is {name}</h1>
            <h3>My username is "{login}" </h3>
            
        </div>
        )
    }
}

export default UserClass;