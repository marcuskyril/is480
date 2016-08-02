var React = require('react');

var AccountSettings = React.createClass({
  render: function() {
    return (
      <div className="large-5 large-centered columns" id="updateForm">
            <div className="row">
                <h3 className="header textAlignCenter">Update Profile</h3>
            </div>
            <div className="row">
                <div className="row">
                    <br/>
                    <h3 className="header">Personal Particulars</h3>
                    <hr/>
                </div>

                <div className="row">
                    <div className="small-4 large-4 columns">
                        First name:
                    </div>
                    <div className="large-8 small-8 columns">
                        <input type="text" name="newfullname" />
                    </div>
                </div>
                <div className="row">
                    <div className="large-4 small-4 columns"></div>
                    <div className="large-8 small-8 columns">
                        <button className="expanded button">Update</button>
                    </div>
                </div>
                <div className="row">
                    <br/>
                    <h3 className="header">Email</h3>
                    <hr/>
                </div>
                <div className="row">
                    <div className="small-4 large-4 columns">
                        Old Email:
                    </div>
                    <div className="large-8 small-8 columns">
                        <input type="text" name="oldemail" />
                    </div>
                </div>
                <div className="row">
                    <div className="small-4 large-4 columns">
                        New Email:
                    </div>
                    <div className="large-8 small-8 columns">
                        <input type="text" name="newemail" />
                    </div>
                </div>
                <div className="row">
                    <div className="large-4 small-4 columns"></div>
                    <div className="large-8 small-8 columns">
                        <button className="expanded button">Update</button>
                    </div>
                </div>

                <div className="row">
                    <br/>
                    <h3 className="header">Password</h3>
                    <hr/>
                </div>
                <div className="row">
                    <div className="small-4 large-4 columns">
                        Old Password:
                    </div>
                    <div className="large-8 small-8 columns">
                        <input type="password" name="oldpassword" />
                    </div>
                </div>
                <div className="row">
                    <div className="small-4 large-4 columns">
                        New Password:
                    </div>
                    <div className="large-8 small-8 columns">
                        <input type="text" name="newpassword1" />
                    </div>
                </div>
                <div className="row">
                    <div className="small-4 large-4 columns">
                        Confirm Password:
                    </div>
                    <div className="large-8 small-8 columns">
                        <input type="password" name="newpassword2" />
                    </div>
                </div>
                <div className="row">
                    <div className="large-4 small-4 columns"></div>
                    <div className="large-8 small-8 columns">
                        <button className="expanded button">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
});

module.exports = AccountSettings;
