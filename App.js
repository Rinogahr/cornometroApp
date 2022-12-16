import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App(){
  const [contage, setContage] = useState(0);
  const [text, setText] = useState('Iniciar');
  const [ultima, setUltima] = useState(null);

  function iniciar(){
    setText('Parar');
    if(timer !== null){
      clearInterval(timer);
      timer = null;
      setText('Iniciar');
    }else{
      timer = setInterval(() => {
        ss++;

        if( ss == 60){
          ss = 0;
          mm++;
        }
        if( mm == 60){
          mm = 0;
          hh++
        }
        let format = 
        (hh < 10 ? '0' + hh : hh) + ':'
        + ( mm < 10 ? '0' + mm : mm) + ':'
        + ( ss < 10 ? '0' + ss : ss);
        setContage( format );
      }, 1000);
    }
  }

  function resetar(){
    if( timer !== null){
      clearInterval(timer);
      timer = null
    }
    setUltima(contage);
    setContage(0);
    ss = 0;
    mm = 0;
    hh = 0;
    setText('Iniciar');
  }
  return(
    <View style={styles.container}>
      
      <Image
        source={require('./img/crono.png')}/>

        <Text style={styles.timer}> {contage} </Text>

        <View style={styles.btsContainer}>
            <TouchableOpacity style={styles.btsIniciar} onPress={iniciar}>
              <Text style={styles.iniciarTxt}>{text}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btsReset} onPress={resetar}>
              <Text style={styles.resetTxt}>Resetar</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.ultimaCorridaContainer}>
          <Text style={styles.ultimaCorridaTxt}>{ ultima ?'Ultima Corrida ' + ultima : ''}</Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff'
  },
  btsContainer:{
    flexDirection: 'row',
    marginTop: 130,
    height: 40,
  },
  btsIniciar:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#fff',
    margin: 17,
    borderRadius: 9,
  },
  btsReset:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#fff',
    margin: 17,
    borderRadius: 9,
  },
  iniciarTxt:{
   fontSize: 20,
   fontWeight: 'bold',
   color: '#00aeef',
  },
  resetTxt:{
   fontSize: 20,
   fontWeight: 'bold',
   color: '#00aeef',
  },
  ultimaCorridaContainer:{
    marginTop: 50,
  },
  ultimaCorridaTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fafafa',
    fontStyle: 'italic'
  }
});