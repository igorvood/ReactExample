import React, {Component} from "react";
import ArticleList from "./ArticleList";
import articles from "../fixtures"
import 'bootstrap/dist/css/bootstrap.css'
import GetRequestButton from "./GetRequestButton/GetRequestButton";
import PostRequestButton from "./PostRequest/PostRequestButton";

class App extends Component {
    state = {
        reverted: false
    }

    render() {
        return (
            <div className="container">
                <GetRequestButton/>
                <PostRequestButton/>
                <div className="jumbotron">
                    <h1 className="display-3">
                        App name
                        <button className="btn" onClick={this.revert}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles={this.state.reverted ? articles.reverse() : articles}/>
            </div>
        )
    }

    revert = () => {
        this.setState({
                reverted: !this.state.reverted
            }
        )

    }
}

export default App