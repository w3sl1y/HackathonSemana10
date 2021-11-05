import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { View, StyleSheet, Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const Location = () => {
    const [location, setLocation] = useState();

useEffect(() => {
    if(Platform.OS === 'ios') {
        Geolocation.requestAuthorization('always');
    }
    if(Platform.OS === 'android') {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
    }

    Geolocation.getCurrentPosition(
        (position) => {
            const {latitude, longitude} = position.coords;
            setLocation({
                latitude,
                longitude,
            });
        },
        (error) => {
            console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
}, []);

    return (
        <>
          {location && (
              <View style={styles.container}>
              <MapView
                  style={styles.map}
                  provider={PROVIDER_GOOGLE}
                  initialRegion={{
                      latitude: -12.085,
                      longitude: -76.9755,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                  }}
              >
                <Marker coordinate={{
                    latitude: -12.0854,
                    longitude: -76.9755,
                }} />
              </MapView>
          </View>
          )}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map:{
        width: '100%',
        height: '100%',
    },
})
export default Location