var React = require('react');
var Nav = require('Nav');
var SensorDetails = require('SensorDetails');

class Main extends React.Component {

    componentDidMount() {
        $(document).foundation();

        console.log("this.props.macAdd", this.props);
    }
    render() {
        return (
            <div>
                <div className="off-canvas-wrapper">
                    <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
                        <div className="off-canvas position-right" data-position="right" id="offCanvas" data-off-canvas>
                            <SensorDetails/>
                        </div>

                        <div className="off-canvas-content" data-off-canvas-content>
                            <Nav/>
                            <div className="row">
                                <div className="columns medium-12 large 8">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

module.exports = Main;
