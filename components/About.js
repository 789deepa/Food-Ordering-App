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
        <div className="min-h-screen flex justify-center py-12">
        <div className="max-w-3xl w-full px-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">About</h1>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">This is Deepsly</h2>
            <h2 className="text-gray-800 text-base mb-4">This is my Portfolio</h2>     
            <div className="bg-gray-200 border border-gray-200 rounded-xl shadow-sm">
            <UserClass name = {"Attuu"} location = {"Mumbai"} />
            </div>
        </div>
        </div>
        )
    };
}

{ /* const About = () => {
    return (
       <div className="about">
        <h1>About</h1>
        <h2>This is Deepsly</h2>
        <h2>This is my Portfolio</h2>
        <UserClass name = {"Attuu"} location = {"Mumbai"} />
       </div>
    );
}; */ }

export default About;