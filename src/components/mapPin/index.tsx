import * as React from 'react';

import './style.less';
import { Coords } from 'google-map-react';

interface Props extends Coords {
  text: string,
}

class MapPin extends React.Component<Props> {
  render() {
    const { text } = this.props;
    return <div className="map-pin-wrapper">
      <div className="container">
        <i className="iconfont icon-pin" />
        <span>{text}</span>
      </div>
    </div>
  }
}
export default MapPin;