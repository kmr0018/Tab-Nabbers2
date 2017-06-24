/**
 * Created by esterlingaccime on 6/24/17.
 */
var React = require("react");
var Header = require("./Header");


class Main extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
           <div className="container">
               <Header />
           </div>
        );
    }
}



module.exports = Main;