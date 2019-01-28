/* eslint-disable */
import React, {Component} from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lat_lngs: [],
            bus_info: []
        };

        this.callLocationsApi = this.callLocationsApi.bind(this);
    }

    async componentDidMount() {
        try {
            let busStops = await this.callLocationsApi('http://localhost:8080/locations');
            let busInformation = [];
            for (let index in busStops) {
                const latLng = busStops[index];
                busInformation.push(await this.callLocationsApi(`http://localhost:8080/locations?lat=${parseFloat(latLng['lat'])}&lng=${parseFloat(latLng['lng'])}`));
            }
            this.setState({lat_lngs: busStops, bus_info: busInformation});
        } catch (e) {
            console.log(e);
        }
    }

    async callLocationsApi(url) {
        const response = await fetch(url);
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    }

    render() {
        return (
            <Map
                google={this.props.google}
                style={{width: '100%', height: '100%', position: 'relative'}}
                initialCenter={{
                    lat: 44.5676048,
                    lng: -123.2788444
                }}
                zoom={15}>
                {this.state.lat_lngs && this.state.lat_lngs.map((lat_lng, index) => {
                    return (<Marker
                                key={index}
                                title={JSON.stringify(this.state.bus_info[index], null, 2)}
                                name={JSON.stringify(lat_lng, null, 2)}
                                position={{lat: lat_lng['lat'], lng: lat_lng['lng']}} />);
                })}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_API_KEY
})(MapContainer)
