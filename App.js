import React, {} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      panjang:0,
      lebar:0,
      tinggi:0,
      volume:0
    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#FF8A80'}}>

        <View style={{backgroundColor:'#F44336'}}>
           <Text style = {{padding: 20, fontSize: 25, color: 'white', textAlign:'center'}} >
            Menghitung Volume Balok
          </Text>
         </View>

        <View style={{margin:30,padding: 20, backgroundColor:'#e3f2fd'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang)=>this.setState({panjang})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Lebar"
              onChangeText={(lebar)=>this.setState({lebar})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
            />

            <Button
              onPress={()=>this.setState({
                volume: (this.state.panjang*this.state.lebar*this.state.tinggi)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{margin:30, backgroundColor:'#FFCDD2'}}>
          <Text style = {{padding: 20, fontSize: 25}} >
              Panjang =  {this.state.panjang} {"\n"}
              Lebar =  {this.state.lebar} {"\n"}
              Tinggi =  {this.state.tinggi} {"\n"}
              Volume = {this.state.volume}
          </Text>
         </View>

   </View>

    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok);
