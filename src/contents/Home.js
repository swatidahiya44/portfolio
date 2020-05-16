import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/IMG_1109.jpg';
class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img height="500vh" width="500vh" src={profilepic} className="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={['Hi, This is Swati here', 'I am a web developer']} speed={100} eraseDelay={700} />
            </div>
        )
    }
}
export default Home