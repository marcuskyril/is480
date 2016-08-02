export var websocketInit = () => {
    var returnEvt = null;
    var connection = new WebSocket('ws://52.74.119.147:9000/PHPMongo');

    return connection;
};


export var websocketSend = (connection, message) => {

  var returnEvt = null;

  setInterval(function(){
    connection.send(message);
  }, 10000);

  connection.onmessage = evt =>{
    console.log("Here's your wonderful event: ", evt);
    console.log("returnEvt, ", evt);

    return evt;

  }
  // return returnEvt;
};

export var websocketClose = () => {
  this.connection.close();
};
