var React = require('react');

class Building extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Hello
            </div>
        );
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange() {
        this.props.onUserInput(this.refs.filterTextInput.value,);
    }
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange}/>
            </form>
        );
    }
};

class BuildingList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div>
          hello
        </div>
      );
    }
}

class BuildingOverview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: ''
        };
    }

    handleUserInput(filterText) {
        this.setState({filterText: filterText});
    }

    render() {
        return (
            <div>
                <SearchBar
                  filterText={this.state.filterText}
                  onUserInput={this.handleUserInput}
                  />
                <BuildingList/>
            </div>
        );
    }
}

module.exports = BuildingOverview;
