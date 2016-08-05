var React = require('react');
var Nav = require('Nav');
var SensorDetails = require('SensorDetails');
var Dashboard = require('Dashboard');

class Main extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        BuildingOverview: []
      }
    }

    componentDidMount() {
        $(document).foundation();

        var conn = new ab.Session('ws://52.74.119.147:9000', function() {
            conn.subscribe('', function(topic, data) {
                console.log(data);



            });
        }, function() {
            console.warn('WebSocket connection closed');
        }, {'skipSubprotocolCheck': true});
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
                                <div className="columns medium-12 large 12">
                                    
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
