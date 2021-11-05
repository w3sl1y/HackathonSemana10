/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import Location from './src/scenes/location';

const Pelicula = require ('./src/assets/images/portada.jpeg')
const App = () => {
  return (
    <View style={styles.container}>
    <View style={styles.block1}>
      <View style={styles.top}>
      <Image style={styles.pelicula} source={Pelicula} />
      </View>
      <View style={styles.bottom}>
      <TouchableOpacity style={styles.button}><View><Text style={styles.stars}>★</Text></View><Text style={styles.textMin}>8.2/10</Text><Text style={styles.little}>150.212</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button2}><View><Text style={styles.stars}>✰</Text></View><Text style={styles.textMin}>Rate This</Text><Text style={styles.little}></Text></TouchableOpacity>
      <TouchableOpacity style={styles.button2}><View style={styles.green}><Text style={styles.greenText}>86</Text></View><Text style={styles.textMin}>Metascore</Text><Text style={styles.little}>62 critic reviews</Text></TouchableOpacity>
      </View>
    </View>

    <View style={styles.block2}>
    <Location />
    </View>
    
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map:{
    width: '100%',
    height: '100%',
  },
  block1:{
    flex: 0.3,
    marginTop: -4,
    marginHorizontal: -11,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 26,
    backgroundColor: '#f8f9fa'
  },
  block2:{
    flex: 0.7,
  },
  top:{
    flex: 0.7,
    flexDirection: 'row',
    backgroundColor: '#e9ecef',
    alignItems: 'center',
  },
  pelicula:{
    width: '100%',
    height: '100%',
    borderRadius: 60,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    backgroundColor: '#e9ecef',
  },
  bottom:{
    flex: 0.3,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#e9ecef',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  stars:{
    color: '#ffba08',
    fontSize: 20
  },
  green:{
    backgroundColor: '#29bf12',
    borderRadius: 4,
  },
  greenText:{
    margin: 4,
    marginHorizontal: 9,
    color: '#fff'
  },
  textMin:{
    color: '#212121',
    fontWeight: '500',
  },
  little:{
    fontSize: 10.6,
    fontWeight: '500'
  },
  button:{
    backgroundColor: '#fff',
    borderRadius: 30,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    width: 120,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    marginTop: -20
  },
  button2:{
    backgroundColor: '#fff',
    borderRadius: 0,
    width: 120,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    marginTop: -20
  }
});

export default App;
