import React from 'react'

import {GiPositionMarker} from 'react-icons/gi'
import {GrMail} from 'react-icons/gr'

function Map() {
    return (
        <div className="map-container">
          <div className="flex-spacer">
          </div>
          <div className="map-text-container">
              <GiPositionMarker/>
              <span>WorkFlo, 4th Floor, Umiya Emporium, Hosur Road, Koramangala, Bangalore - 560029</span>
          </div>
          <div className="map-text-container">
              <GrMail/>
              <span>hola@tyutee.com</span>
          </div>
          <iframe height="200" frameborder="0" style={{border: 0}} src="https://www.google.com/maps/embed/v1/place?q=WorkFlo%2C%204th%20Floor%2C%20Umiya%20Emporium%2C%20Hosur%20Road%2C%20Koramangala%2C%20Bangalore%20-%20560029&key=AIzaSyCq4atPJe5fiRjfnbglP9deEJ64IHhzdvM" allowfullscreen></iframe>
        </div>
    )
}

export default Map
