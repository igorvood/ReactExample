import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
    }

    render() {
        const {article} = this.props
        const body = this.state.isOpen && <section className="card-text">{article.text}</section>

        return (
            <div className="card mx-auto" style={{width: '80%'}}>
                <div className="card-header">
                    <h2>{article.title}
                        <button className="btn btn-primary btn-lg float-right" onClick={this.handleClick}>
                            {this.state.isOpen ? 'open' : 'close'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        creation date: {(new Date(article.date)).toDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        )

    }

    handleClick = () => {
        console.log('111111', 'clicked')
        this.setState({isOpen: !this.state.isOpen})
    }
}

export default Article