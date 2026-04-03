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
            <div className="user-class p-6 text-center">
            <img className="avatar-img w-24 h-24 rounded-full mx-auto mb-4 border-2 border-brand-accent" src={avatar_url} />
            <h1 className="text-xl font-semibold text-brand-text mb-2">Hello, This is <span className="text-brand-accent">{name}</span></h1>
            <h3 className="text-brand-text-secondary">My username is <span className="text-brand-accent font-medium">"{login}"</span></h3>
        </div>
        )
    }
}

export default UserClass;