var React = require('react');
var Griddle = require('griddle-react');
var axios = require('axios');
var FontAwesome = require('react-fontawesome');

const tableMetaData =  [
  {
    "columnName": "mac_address",
    "order": 1,
    "locked": false,
    "visible": true,
    "displayName": "Mac Address"
  },
  {
    "columnName": "latest_timestamp",
    "order": 2,
    "locked": false,
    "visible": true,
    "displayName": "Latest Timestamp"
  },
  {
    "columnName": "location",
    "order": 3,
    "locked": false,
    "visible": true,
    "displayName": "Location"
  },
  {
    "columnName": "sensor_type",
    "order": 4,
    "locked": false,
    "visible": true,
    "displayName": "Sensor Type"
  },
  {
    "columnName": "current_status",
    "order": 5,
    "locked": false,
    "visible": true,
    "displayName": "Current Status"
  },
  {
    "columnName": "sensor_status",
    "order":  6,
    "locked": false,
    "visible": true,
    "sortable": true,
    "displayName": "Sensor Status"
  },
  {
    "columnName": "flapping",
    "order":  7,
    "locked": false,
    "visible": true,
    "sortable": true,
    "displayName": "Flapping"
  },
  {
    "columnName": "network_router",
    "order":  8,
    "locked": false,
    "visible": true,
    "sortable": true,
    "displayName": "Network Router"
  },
  {
    "columnName": "temperature",
    "order":  9,
    "locked": false,
    "visible": true,
    "sortable": true,
    "displayName": "Temperature"
  },
  {
    "columnName": "CPU_usage",
    "order":  10,
    "locked": false,
    "visible": true,
    "sortable": true,
    "displayName": "CPU Usage"
  },
  {
    "columnName": "RAM_total",
    "order":  11,
    "locked": false,
    "visible": true,
    "sortable": true,
    "displayName": "Total RAM"
  },
  {
    "columnName": "RAM_free",
    "order":  12,
    "locked": false,
    "visible": true,
    "sortable": true,
    "displayName": "RAM Free"
  },
  {
    "columnName": "RAM_used",
    "order":  13,
    "locked": false,
    "visible": true,
    "sortable": true,
    "displayName": "RAM used"
  },
  {
    "columnName": "RAM_available",
    "order":  14,
    "locked": false,
    "visible": true,
    "sortable": true,
    "displayName": "RAM Available"
  },
  {
    "columnName": "disk_space_total",
    "order":  15,
    "locked": false,
    "visible": true,
    "sortable": true,
    "displayName": "Total Disk Space"
  },
  {
    "columnName": "disk_space_free",
    "order":  16,
    "locked": false,
    "visible": true,
    "sortable": true,
    "displayName": "Disk Space Available"
  },
  {
    "columnName": "disk_space_used",
    "order":  17,
    "locked": false,
    "visible": true,
    "sortable": true,
    "displayName": "Disk Space Used"
  }
];

var dataList = [];

class Tableaux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    };
  }

  componentDidMount() {
    var baseUrl = 'http://52.74.119.147/PisaSchitt/php-websocket/0-sample-generators/sensor-data-generator.php?number=';
    var url = baseUrl + 30;
    axios.get(url).then(function(res) {

        var temp = res.data;

        for(var k in temp) {
          //  console.log(k, temp[k]);
           dataList.push(temp[k]);
        }

        this.setState({
          dataList: dataList
        });

        // console.log("axios data result 2", dataList['sensor1']);

    }.bind(this), function (e) {

      console.log("Error occurred: " +e);

    }.bind(this));
  }

  render() {

    return (
      <Griddle results={dataList}
        settingsIconComponent={<FontAwesome name='cog'inverse={true} size="2x" className="margin-left-small"/>}
        columnMetadata={tableMetaData}
        tableClassName="table"
        showFilter={true}
        columns={["mac_address", "RAM_available", "CPU_usage", "location"]}
        showSettings={true}/>
    );
  }
}

module.exports = Tableaux;
