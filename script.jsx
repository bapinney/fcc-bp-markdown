console.log("Inside script.js");

var AppContainer = React.createClass({
    getInitialState: function() {
        return null;
    },
    
    uiReceived: function() {
        console.log("user input received");
        this.renderedMD.foo();
    },
    
    render: function() {
        return (
            <div className="maincontainer">
               <div className="editor">
                   <UserInput ref={(input) => this.userInput = input} cbParent={this.uiReceived}></UserInput>
               </div>
                   <RenderedMD ref={(md) => this.renderedMD = md} ></RenderedMD>
            </div>
        )
    }
});

var UserInput = React.createClass({
    
    handleInput: function(e) {
        this.props.cbParent();
    },
    
    render: function() {
        return (<textarea onChange={this.handleInput}></textarea>)
    }
})

var RenderedMD = React.createClass({
    getInitialState: function() {
        return {displayData: "Update the text to the right to preview the rendered Markdown"}
    },
    
    foo: function() {
        console.log("bar");
    },
    
    render: function() {
        return (
            <div className="preview">{this.state.displayData}</div>
        )
    }
    
});

ReactDOM.render(
    <AppContainer />,
    document.getElementById("app"));