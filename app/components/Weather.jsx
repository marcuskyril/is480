var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var piSensorOverview = require('piSensorOverview');
var Uptime = require('Uptime');
var SensorHealthOverview = require('SensorHealthOverview');
var GeneralMetrics = require('GeneralMetrics');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');
var Tableaux = require('Tableaux');
var Notifications = require('Notifications');
var AddSensor = require('AddSensor');
var FontAwesome = require('react-fontawesome');

var Weather = React.createClass({
    getInitialState: function() {

        return {
          isLoading: false
        }
    },
    launchAddSensor: function() {

        var modal = new Foundation.Reveal($('#add-sensor-modal'));
        modal.open();
    },

    handleSearch: function(location) {
        var that = this;

        this.setState({
          isLoading: true,
          errorMessage: undefined
        });

        // openWeatherMap.getTemp(location).then(function(temp) {
        //     that.setState({
        //       location: location,
        //       temp: temp,
        //       isLoading: false
        //     });
        // }, function(e) {
        //     that.setState({
        //       isLoading: false,
        //       errorMessage: e.message
        //     });
        // });
    },
    render: function() {
        var {
            isLoading,
            temp,
            location,
            ok,
            danger,
            warning,
            down,
            errorMessage
        } = this.state;

        function renderError () {
          if (typeof errorMessage === 'string') {
            return (
              <ErrorModal/>
            )
          }
        }

        function renderOverview() {
            return <SensorHealthOverview ok={ok} danger={danger} warning={warning} down={down}/>
        }

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching information...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        return (

            <div className="dashboard margin-top-md">
                <div className="row">
                  <div className="columns medium-8">
                    <h4 className="header">At a Glance</h4>
                    <div className="callout callout-dark">
                      {renderOverview()}
                    </div>

                    <div>
                      <h4 className="header">Pi Health Overview</h4>
                      <button onClick={this.launchAddSensor}>
                        <FontAwesome name='plus-circle'/> ADD PI
                      </button>
                      <AddSensor/>
                      <div className="callout callout-dark">
                        <GeneralMetrics/>
                      </div>
                    </div>

                    <div>
                      <h4 className="header">Abnormal Behaviour</h4>
                      <div className="callout callout-dark">
                      <WeatherForm onSearch={this.handleSearch}/>
                      {renderMessage()}
                      {renderError()}
                      </div>
                    </div>

                  </div>

                  <div className="columns medium-4">
                    <h4 className="header">Notifications</h4>
                    <div className="callout callout-dark">
                      <Notifications/>
                    </div>
                  </div>
                </div>

                <div className = "column row">
                  <h4 className="header">All Sensors</h4>
                  <div className="callout callout-dark">
                    <Tableaux/>
                  </div>
                </div>
            </div>
        );
    }
});

module.exports = Weather;
