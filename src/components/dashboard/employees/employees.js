import React, { Component } from 'react';
import { 
    View, 
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import EmployeeList from './employeeList';
import AddEmployee from './addEmployee';

const windowWidth = (Dimensions.get('window').width * 0.75);

class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeView: 0,
    };
  }

  renderActiveView = () => {
      switch(this.state.activeView){
            case 0:
                return <EmployeeList />
            case 1:
                return <AddEmployee onCancelForm={this.cancelActiveView}/>
            default:
                return <EmployeeList />
      }
  }

  toggleActiveView = () => {
      this.setState({
          activeView: 1,
      })
  }

  cancelActiveView = () => {
    this.setState({
        activeView: 0,
    })
  }

  render() {
    return (
        <View style={{flex: 1, overflow: 'scroll',}}>
            <View style={{width: '100%', height: 200, backgroundColor: '#0984e3', }}></View>
            <Text style={{color: '#ffffff', fontSize: 20, position: 'absolute', top: 60, left: (windowWidth * 0.05),}}>{this.state.activeView === 0 ? 'Employees List' : 'Add Employees'}</Text>
            {this.state.activeView === 0 ? (
                <TouchableOpacity 
                style={{position: 'absolute',top: 60, right: (windowWidth * 0.06), borderWidth: 1, borderColor: '#ffffff', borderRadius: 5, width: 150, height: 30, justifyContent: 'center', alignItems: 'center',}}
                onPress={()=> this.toggleActiveView()}
                >
                    <Text style={{color: '#ffffff', fontSize: 20,}}>Add Employee</Text>
                </TouchableOpacity>
            ) : (
                <View />
            )}
            {
                this.renderActiveView()
            }
        </View>
    );
  }
}

export default Employees;
