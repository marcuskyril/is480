var React = require('react');
var SensorStatus = require('SensorStatus');
var axios = require('axios');
var Griddle = require('griddle-react');
var Menu = require('react-burger-menu').slide;

var dataList = [];

class LinkComponent extends React.Component{
  constructor(props) {
    super(props);
  }

  handleClick(data) {
    console.log("click", data);

  }

  render() {
    return (
        <a onClick={this.handleClick(this.props.data)} data-toggle="offCanvas">{this.props.data}</a>
    );
  }
};

const tableMetaData =  [
  {
    "columnName": "mac_address",
    "order": 1,
    "locked": false,
    "visible": true,
    "displayName": "Mac Address",
    "customComponent": LinkComponent
  },
  {
    "columnName": "building_name",
    "order": 2,
    "locked": false,
    "visible": true,
    "displayName": "Building"
  },
  {
    "columnName": "building_level",
    "order": 3,
    "locked": true,
    "visible": true,
    "displayName": "Level"
  },
  {
    "columnName": "area_id",
    "order": 4,
    "locked": true,
    "visible": true,
    "displayName": "Area ID"
  }
];

class NoDataComponent extends React.Component{
    constructor(props) {
      super(props);
    }

    render(){
      return (
        <div>
          <h1>No data is available</h1>
        </div>
      );
    }
};

class GeneralMetrics extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        dataList: []
      };
    }

    componentDidMount() {
        $(document).foundation();

        var baseUrl = 'http://52.74.119.147/PisaSchitt/php-websocket/0-sample-generators/regionmall-sample.php?number=';
        var numRows = 30;
        axios.get(baseUrl+numRows).then(function(res) {

          dataList = res.data;

          this.setState({
            dataList: dataList
          });

        }).catch(function(error) {
            console.log("Problem siol", error);
        }.bind(this));
    }

    render() {
        return (
            <div>
                <Griddle
                  results={dataList}
                  initialSort="building_name"
                  tableClassName="piOverviewTable"
                  columnMetadata={tableMetaData}/>
            </div>
        );
    }
}

module.exports = GeneralMetrics;



// <ul className="tabs" data-tabs id="example-tabs">
//     <li className="tabs-title is-active">
//         <a href="#panel1" aria-selected="true">Central</a>
//     </li>
//     <li className="tabs-title">
//         <a href="#panel2">North</a>
//     </li>
//     <li className="tabs-title">
//         <a href="#panel3">South</a>
//     </li>
//     <li className="tabs-title">
//         <a href="#panel4">East</a>
//     </li>
//     <li className="tabs-title">
//         <a href="#panel5">West</a>
//     </li>
// </ul>
//
// <div className="tabs-content" data-tabs-content="example-tabs">
//     <div className="tabs-panel is-active" id="panel1">
//         <strong>Orchard Central</strong>
//         <SensorStatus/>
//
//         <strong>313@Somerset</strong>
//         <SensorStatus/>
//     </div>
//     <div className="tabs-panel" id="panel2">
//         <p>Suspendisse dictum feugiat nisl ut dapibus. Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
//     </div>
//     <div className="tabs-panel" id="panel3">
//         <p>Suspendisse dictum feugiat nisl ut dapibus. Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
//     </div>
//     <div className="tabs-panel" id="panel4">
//         <p>Suspendisse dictum feugiat nisl ut dapibus. Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
//     </div>
//     <div className="tabs-panel" id="panel5">
//         <p>Suspendisse dictum feugiat nisl ut dapibus. Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
//     </div>
// </div>
