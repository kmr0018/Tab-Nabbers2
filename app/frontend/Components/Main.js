/**
 * Created by esterlingaccime on 6/24/17.
 */
var React = require("react");
var Header = require("./Header");
var Home = require("./Home");


class Main extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
           <div className="main--app">
               <Header />
               <Home />
           </div>
        );
    }
}



module.exports = Main;