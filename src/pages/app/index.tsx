import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import MapPin from '../../components/mapPin';

class App extends React.Component {
  render() {
    const bootstrap: any = {key: 'AIzaSyDxJdkXtvnHSVgG5DUMfv4f0QX1QSv2Yeo', region: 'cn'};
    return <div className="app-wrapper">
      <GoogleMapReact 
        bootstrapURLKeys={bootstrap}
        defaultCenter={{lat: 30.2965033, lng: 104.300964}}
        defaultZoom={16}
        options={{mapTypeId: 'satellite'}}
      >
        <MapPin lat={30.2965033} lng={104.300964} text="pin" />
      </GoogleMapReact>
    </div>
  }
}
export default App;