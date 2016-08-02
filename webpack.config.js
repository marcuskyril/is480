var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {

}

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    'script!foundation-sites/js/foundation.dropdownMenu.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET)
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,

    alias: {
      app: 'app',
      AccountSettings: 'app/components/AccountSettings.jsx',
      Nav: 'app/components/Nav.jsx',
      AddSensor: 'app/components/AddSensor.jsx',
      PageNotFound: 'app/components/PageNotFound.jsx',
      Main: 'app/components/Main.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      applicationStyles: 'app/styles/app.scss',
      navStyles: 'app/styles/nav.scss',
      griddleStyles: 'app/styles/griddle.scss',
      sensorBlock: 'app/styles/sensorblock.scss',
      verticalNavStyles: 'app/styles/verticalMenu.scss',
      SensorHealthOverview: 'app/components/SensorHealthOverview.jsx',
      GeneralMetrics: 'app/components/GeneralMetrics.jsx',
      SensorStatus: 'app/components/SensorStatus.jsx',
      Uptime: 'app/components/Uptime.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      piSensorOverview: 'app/api/piSensorOverview.jsx',
      Login: 'app/components/Login.jsx',
      Overview: 'app/components/Overview.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx',
      loginStyles: 'app/styles/login.scss',
      Tableaux: 'app/components/Tableaux.jsx',
      Notifications: 'app/components/Notifications.jsx',
      WebsocketHandler: 'app/components/WebsocketHandler.jsx',
      DataStore: 'app/components/DataStore.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
