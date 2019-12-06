import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import request from "superagent";

class GetRequestButton extends Component {

    render() {
        return (
            <div>
                <button className="btn" onClick={this.getRequest}>Get Request</button>
            </div>
        )
    }

    getRequest = () => {
        console.log("Get Request running")

        request.get('http://localhost:8088/users/oneByName')
            .query({name: 'Vood'})
            .end((err, resp) => {
                if (!err) {
                    console.log("Get Request response " + resp.text)
                }
            })
    }

}

export default GetRequestButton