var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
      e.preventDefault();

      var location = this.refs.location.value;

      if(location.length > 0) {
        this.refs.location.value="";
        this.props.onSearch(location);
      }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location"/>
                    <label>Display Period
                        <select>
                            <option value="">Display Period</option>
                            <option value="husker">Husker</option>
                            <option value="starbuck">Starbuck</option>
                            <option value="hotdog">Hot Dog</option>
                            <option value="apollo">Apollo</option>
                        </select>
                    </label>
                    <label>Interval
                        <select>
                          <option value="">Interval</option>
                            <option value="husker">Husker</option>
                            <option value="starbuck">Starbuck</option>
                            <option value="hotdog">Hot Dog</option>
                            <option value="apollo">Apollo</option>
                        </select>
                    </label>
                    <input type="reset" className="button hollow" value="Reset"/>
                    <input type="submit" className="button hollow" value="Bite me"/>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;
