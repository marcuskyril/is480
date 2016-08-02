import firebase, {firebaseRef} from 'app/firebase/';
var axios = require('axios');

export var fetchSensorData = (numRows) => {
    return (dispatch, getState) => {
        dispatch(startSensorDataFetch());

        var baseUrl = 'http://52.74.119.147/sensor-data-generator.php?number=';
        var url = baseUrl + numRows;

        axios.get(url).then(function(res) {
            var data = res.data;

            dispatch(completeSensorDataFetch(data));
        });
    };
};

export var startSensorDataFetch = () => {
    return {type: 'START_SENSOR_DATA_FETCH'};
};

export var completeSensorDataFetch = (data) => {
    return {type: 'COMPLETE_SENSOR_DATA_FETCH', data};
};

export var login = (uid) => {
    return {type: 'LOGIN', uid};
};

export var logout = () => {
    return {type: 'LOGOUT'};
};

export var startAddSensor = (inputMac, inputRegion, inputLocationLevel, inputLocationID, inputBuilding) => {
    console.log("Start add sensor process");

    return (dispatch, getState) => {
        var baseUrl = "http://52.74.119.147/PisaSchitt/insert-new-sensor.php";

        axios.get(baseUrl, {
            MAC: inputMac,
            "geo-region": inputRegion,
            "sensor-location-level": inputLocationlevel,
            "sensor-location-id": inputLocationID,
            "building": inputBuilding
        }).then(function(response) {
            console.log(response);
        }).catch(function(error) {
            console.log("Problem siol", error);
        });

    };
};

export var startLogin = (inputEmail, inputPassword) => {
    console.log("start login");
    return (dispatch, getState) => {
        return firebase.auth().signInWithEmailAndPassword(inputEmail, inputPassword).then((result) => {
            console.log('Authentication worked!', result);
        }, (error) => {
            console.log('Problem siol', error);
        });
    };
};

export var startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            console.log('Logged out!');
        });
    };
};

export var startCreateAccount = () => {
    return (dispatch, getState) => {
        return firebase.auth().createUserWithEmailAndPassword('admin@live.com', 'asdf0000').then((res) => {
            console.log('What do you want? A medal?', res);
        }, (error) => {
            console.log('Piss off.', error);
        });
    };
};
