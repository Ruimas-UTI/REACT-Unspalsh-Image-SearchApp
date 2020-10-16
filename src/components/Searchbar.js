import React from "react";

class Searchbar extends React.Component {
    state = {term: " "};
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    } 
    render(){
        return (
            <div className="ui container">
                <div className="ui segment">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                            <div className="ui search">
                                <input className="prompt" type="text" placeholder="Make Search"
                                value={this.state.term} 
                                onChange={(e)=> this.setState({term: e.target.value})}/>
                                <div className="results"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Searchbar;