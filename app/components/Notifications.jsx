var React = require('react');
var FontAwesome = require('react-fontawesome');

var Notifications = React.createClass({
    render: function() {
        return (
            <table className="notificationsTable">
                <thead>
                  <tr>
                    <th></th>
                    <th>
                        Notification
                    </th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="textAlignCenter">
                            <FontAwesome name='exclamation-triangle' size='2x'/>
                        </td>
                        <td>
                            <div>
                                <b>Problem on Sensor007</b>
                            </div>
                            <div>
                                CPU load too high (95%)
                            </div>
                            <div>
                                2 minutes ago
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="textAlignCenter">
                            <FontAwesome name='exclamation-triangle' size='2x'/>
                        </td>
                        <td>
                            <div>
                                <b>Sensor003 is Down</b>
                            </div>
                            <div>
                                Connection Lost
                            </div>
                            <div>
                                2 minutes ago
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="textAlignCenter">
                            <FontAwesome name='thumbs-up' size='2x'/>
                        </td>
                        <td>
                            <div>
                                <b>Sensor 12 is Ok</b>
                            </div>
                            <div>
                                Flapping stopped at 14:21
                            </div>
                            <div>
                                1 hour ago
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="textAlignCenter">
                            <FontAwesome name='thumbs-up' size='2x'/>
                        </td>
                        <td>
                            <div>
                                <b>Sensor 3 is Ok</b>
                            </div>
                            <div>
                                Flapping stopped at 14:21
                            </div>
                            <div>
                                1 hour ago
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="textAlignCenter">
                            <FontAwesome name='thumbs-up' size='2x'/>
                        </td>
                        <td>
                            <div>
                                <b>Sensor 2 is Ok</b>
                            </div>
                            <div>
                                Flapping stopped at 14:21
                            </div>
                            <div>
                                1 hour ago
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="textAlignCenter">
                            <FontAwesome name='exclamation-triangle' size='2x'/>
                        </td>
                        <td>
                            <div>
                                <b>Problem on Sensor002</b>
                            </div>
                            <div>
                                CPU load too high (91%)
                            </div>
                            <div>
                                1 hour ago
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
});

module.exports = Notifications;
