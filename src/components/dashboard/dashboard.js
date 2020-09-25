import React, { Component } from 'react';
import { 
    View, 
    Text,
    Image, 
    TouchableOpacity,
} from 'react-native';

import { Redirect } from 'react-router-dom';

import Guests from './guests/guests';
import Employees from './employees/employees';
import Agenda from './agenda/agenda';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeMenuItem: 0,
        sideMenu: [
            {
                name: "Visits",
                icon: "guests.png",
            },
            {
                name: "Employees",
                icon: "employee.png",
            },
            {
                name: "Agenda",
                icon: "notebook.png",
            },
            {
                name: "Logout",
                icon: "logout.png",
            }
        ],
        isLogout: false,
    };
  }

  changeMenu = (index) => {
      this.setState({
          activeMenuItem: index,
      })
  }

  renderFullContent = () => {
      switch(this.state.activeMenuItem){
            case 0:
                return <Guests />
            case 1:
                return <Employees />
            case 2:
                return <Agenda />
            case 3:
                localStorage.clear();
                this.setState({
                    isLogout: true,
                });
                break;
            default: 
                return <Guests />
      }
  }

  render() {
      if(this.state.isLogout){
          return <Redirect to="/" />
      }
    return (
      <View style={{flex: 1, flexDirection: 'row', }}>
          <View style={{width: '20%', height: '100vh', backgroundColor: '#0984e3', }}>
            {/* code for displaying user information */}
            <View style={{width: '100%', height: 200, backgroundColor: '#0873c4', justifyContent: 'center', alignItems: 'center', cursor: 'pointer',}}>
                <Image source={require('../images/boy.png')} style={{width: 80, height: 80}} />
                <Text style={{fontSize: 20, color: '#ffffff', textAlign: 'center', paddingTop: 10,}}>Welcome, Gireesh venkata raghavendra</Text>
            </View>

            {/* Code for the options */}
            <View style={{flex: 1,}}>

                {
                    this.state.sideMenu.map((item, index) => {
                        return(
                            <TouchableOpacity key={index} 
                            style={{width: '100%', height: 50, borderBottomColor: '#85c7fa', borderBottomWidth: 1, alignItems: 'center', flexDirection: 'row', backgroundColor: this.state.activeMenuItem === index ? '#85c7fa' : '',}}
                            onPress={()=> this.changeMenu(index)}
                            >
                                <View style={{paddingLeft: 10, }}> 
                                    <Image source={require('../images/'+item.icon)} style={{width: 40,height: 40,}} />
                                </View>
                                <View style={{paddingLeft: 10,}}>
                                    <Text style={{color: '#ffffff', fontSize: 16,}}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }

            </View>
          </View>
          <View style={{width: '80%', height: '100vh', }}>
                {
                    this.renderFullContent()
                }
          </View>
      </View>
    );
  }
}

export default Dashboard;
