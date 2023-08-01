import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Image, Text,SafeAreaView,TextInput,TouchableOpacity} from 'react-native';
import Icon from '../../assets/icon.png';
export default function Sendemail() {
  const [name, setname] = useState("");
  const [no,setno] = useState("")
  const [email,setemail] = useState("");
  const [msg,setmsg] = useState("");
  const handleonpress= async() =>{
    const data = {
      email:"info@redpositive.in",
      name: name,
      no: no,
      email1: email,
      message: msg,
    };

    await fetch("https://mailbox-61q6.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error occurred while sending the email.");
      });
  }
  return (
    <View >
      <Text style={styles.header}>
        Send Email
      </Text>
      <TextInput
        value={name}
        onChangeText={(text) => setname(text)} 
        style={styles.input}
        placeholder="Name"
      />
       <TextInput
         value={no}
         onChangeText={(text) => setno(text)} 
        style={styles.input}
        placeholder="Mobile Number"
      />
       <TextInput
         value={email}
         onChangeText={(text) => setemail(text)} 
        style={styles.input}
        placeholder="Email"
      />
       <TextInput
         value={msg}
         onChangeText={(text) => setmsg(text)} 
        style={styles.input}
        placeholder="message"
      />
      <TouchableOpacity
        onPress={handleonpress}
        style={styles.button} 
        >
        <Text style={styles.txtcolor}>Summit</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
   header:{
    fontSize:50,
    marginBottom:46,
    textAlign:'center',
    fontWeight:'600',
    color:'black',
   },
   input:{
    marginTop:30,
    fontSize:25,
    color:"black",
    borderBottomWidth:1,
   },
   button: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#322653',
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#2c3e50', 
  },
  txtcolor:{
    color:'#fff'
  }
});
