import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import request from "superagent";

class PostRequestButton extends Component {

    render() {
        return (
            <div>
                <button className="btn" onClick={this.getRequest}>Post Request</button>
            </div>
        )
    }

    getRequest = () => {
        console.log("Post Request running")

        request.post('http://localhost:8088/users/byName')
            .set('Content-Type', 'application/json')
            .send('{"name":"Vood","age":37,"relation":[]}')
            .end((err, resp) => {
                if (!err) {
                    console.log("Get Request error " + resp.text)
                }
            })
    }
}

export default PostRequestButton