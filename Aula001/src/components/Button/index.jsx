import {Component} from "react";

export class Button extends Component {
    render() {
        const {click, text} = this.props
        return (
            <button onClick={click}>
                {text}
            </button>
        )
    }
}