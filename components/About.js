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
        <div className="min-h-screen flex justify-center py-12 bg-brand-dark">
        <div className="max-w-3xl w-full px-6 animate-slideUp">
            <h1 className="text-4xl font-bold text-brand-text mb-4" style={{fontFamily:"'Playfair Display',serif"}}>About</h1>
            <h2 className="text-2xl font-semibold text-brand-accent mb-2">This is Deepsly</h2>
            <h2 className="text-brand-text-secondary text-base mb-6">This is my Portfolio</h2>
            <div className="bg-brand-card border border-brand-border rounded-xl shadow-card hover:shadow-elevated transition-shadow duration-200">
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