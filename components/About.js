import { Component } from "react";
import UserClass from "./UserClass";


class About extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
    //console.log("Parnet component mount");
}

    render() {
        //console.log("Parent render");

        return(
        <div className="about">
            <h1>About</h1>
            <h2>This is Deepsly</h2>
            <h2>This is my Portfolio</h2>
            <UserClass name = {"Attuu"} location = {"Mumbai"} />
        </div>
        )
    }
}

// const About = () => {
//     return (
//        <div className="about">
//         <h1>About</h1>
//         <h2>This is Deepsly</h2>
//         <h2>This is my Portfolio</h2>
//         <UserClass name = {"Attuu"} location = {"Mumbai"} />
//        </div>
//     );
// };

export default About;