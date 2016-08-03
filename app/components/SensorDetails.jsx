var React = require('react');
var axios = require('axios');
var FontAwesome = require('react-fontawesome');
var BarChart = require('react-d3-components').BarChart;

var data = [{
    label: 'Top 5 Processes',
    values: [{x: '', y: 0}, {x: '', y: 0}, {x: '', y: 0}, {x: '', y: 0}]
}];

class SensorDetails extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      mac_address: '',
      building_name: '',
      building_level: '',
      area_id: '',
      CPU_usage: '',
      days: '',
      flapping: '',
      hours: '',
      last_reboot: '',
      mins: '',
      ram: '',
      status: '',
      storage: '',
      temperature: '',
      uptime_percentage: ''
    };
  }

  componentWillReceiveProps() {
    var baseUrl = 'http://52.74.119.147/PisaSchitt/php-websocket/0-sample-generators/get-sensor-info-sample.php';
    axios.get(baseUrl).then(function(res) {
      var res = res.data;

      console.log("sensor data", res);

      this.setState({
        mac_address: res.mac_address,
        building_name: res.building_name,
        building_level: res.building_level,
        area_id: res.area_id,
        CPU_usage: res.cpu,
        days: res.days,
        flapping: res.flapping,
        hours: res.hours,
        last_reboot: res.last_reboot,
        mins: res.mins,
        ram: res.ram,
        status: res.status,
        storage: res.storage,
        temperature: res.temperature,
        uptime_percentage: res.uptime_percentage
      })

    }.bind(this));
  }

  render() {
    return (
      <div className="sensor-details">
        <div className="header textAlignCenter">{this.state.mac_address}</div>
        <hr/>
        <div className="sub-header textAlignCenter" style={{marginTop: '-1rem'}}>{this.state.building_name}</div>
        <div className="sub-header textAlignCenter">{this.state.building_level}</div>
        <div className="sub-header textAlignCenter">{this.state.building_area}</div>
        <div className="header textAlignCenter">{this.state.status}</div>
        <div className="sub-header textAlignCenter">Since {this.state.hours}hrs, {this.state.mins}mins ({this.state.last_reboot})</div>
        <table className="sensor-details-table">
          <tbody>
            <tr>
              <td>
                <FontAwesome name='arrow-up'/> Uptime
              </td>
              <td>
                {this.state.uptime_percentage}%
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesome name='fire'/> Temperature
              </td>
              <td>
                {this.state.temperature}&deg;C
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesome name='hdd-o'/> CPU Usage
              </td>
              <td>
                {this.state.CPU_usage}%
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesome name='database'/> Storage
              </td>
              <td>
                {this.state.storage}%
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesome name='tachometer'/> RAM
              </td>
              <td>
                {this.state.ram}%
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesome name='arrows-v'/> Flapping
              </td>
              <td>
                {this.state.flapping ? "true" : "false"}
              </td>
            </tr>
          </tbody>
        </table>

        <button className="button hollow expanded">Pin to watch list</button>
      </div>
    );
  }
};

module.exports = SensorDetails;
