import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TextInput,
    TouchableOpacity,
    Image,
    ActivityIndicator,
} from 'react-native';

import * as axios from 'axios';
import { LOGIN_URL } from '../config';

import { Redirect } from 'react-router-dom';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: "",
        isLoading: false,
        isRedirect: false,
    };
  }

  componentDidMount(){
    var storage = localStorage.getItem("userDetails");
    if(storage != null){
      this.setState({
        isRedirect: true,
      })
    }
  }

  loginUser = () => {
    if(this.state.username === ""){
      alert("Please provide valid Username");
      return;
    }
    if(this.state.password === ""){
      alert("Please provide valid password");
      return;
    } else{
      this.setState({
        isLoading: true,
      }, ()=> {
        axios.post(LOGIN_URL, {
          username: this.state.username,
          password: this.state.password
        })
        .then((response) => {
          localStorage.setItem("userDetails", JSON.stringify(response.data));
          this.setState({
            isRedirect: true,
            isLoading: false,
          }, ()=> {
            console.log(this.state.isLoading, this.state.isRedirect);
          })
        })
        .catch((error) => {
          this.setState({
            isLoading: false,
            username: "",
            password: "",
          }, ()=> {
            alert("Please try aftersome time");
            return;
          })
        })
      })
    }
  }

  toggleUI = () => {
    if(this.state.isLoading){
      return(
        <View style={{width: '80%', height: 40, borderWidth: 1, borderColor: '#ffffff', borderRadius: 5, margin: 10, justifyContent: 'center', alignItems: 'center', }}>
            <ActivityIndicator color="#ffffff" size="small" />
        </View>
      )
    } else {
      return(
        <TouchableOpacity 
        style={{width: '80%', height: 40, borderWidth: 1, borderColor: '#ffffff', borderRadius: 5, margin: 10, justifyContent: 'center', alignItems: 'center', }}
        onPress={()=> this.loginUser()}
        >
            <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 20,}}>Login</Text>
        </TouchableOpacity>
      )
    }
  }

  render() {
    if(this.state.isRedirect){
      return <Redirect to="/dashboard" />
    }
    return (
      <View style={{flex: 1, backgroundColor: '#0984e3', justifyContent: 'center', alignItems: 'center', }}>
          <View style={{width: 500, height: 500, borderRadius: 5, justifyContent: 'center', alignItems: 'center', }}>
            <Image source={require('../images/logo.png')} style={{width: 200, height: 200, marginBottom: 10,}}/>
            <View style={{width: '80%', height: 40, borderWidth: 1, borderColor: '#ffffff', borderRadius: 5, margin: 5,}}>
                <TextInput 
                style={{flex: 1, paddingLeft: 10, color: '#ffffff', fontWeight: 'bold', fontSize: 20, }}
                placeholder="Username"
                onChangeText={(text)=> this.setState({username: text})}
                value={this.state.username}
                placeholderTextColor="#dddddd"
                editable={!this.state.isLoading}
                />
            </View>
            <View style={{width: '80%', height: 40, borderWidth: 1, borderColor: '#ffffff', borderRadius: 5, margin: 5,}}>
                <TextInput 
                style={{flex: 1, paddingLeft: 10, color: '#ffffff', fontWeight: 'bold', fontSize: 20, }}
                placeholder="Password"
                onChangeText={(text)=> this.setState({password: text})}
                value={this.state.password}
                placeholderTextColor="#dddddd"
                secureTextEntry={true}
                editable={!this.state.isLoading}
                />
            </View>
            {
              this.toggleUI()
            }
          </View>
      </View>
    );
  }
}

export default LoginScreen;
