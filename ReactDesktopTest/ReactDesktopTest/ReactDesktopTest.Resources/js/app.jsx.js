var React = React || require("react"), module = module || {}, HelloWorld = React.createClass({ displayName: "HelloWorld", handleHello: function (e) { e.preventDefault(); var t = this.refs.yourName.getDOMNode().value.trim(), l = this; $.ajax({ url: "hello/" + t, dataType: "json", type: "GET", success: function (e) { l.setState({ yourName: e.Result }) } }) }, getInitialState: function () { return { yourName: "" } }, render: function () { return React.createElement("div", null, React.createElement("input", { type: "text", placeholder: "Your name", ref: "yourName", className: "form-control", onChange: this.handleHello }), React.createElement("h3", null, this.state.yourName)) } }); module.exports = HelloWorld, React.render(React.createElement(HelloWorld, null), document.getElementById("demo"));