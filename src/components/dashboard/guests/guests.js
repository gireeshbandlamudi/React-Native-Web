import React, { Component } from 'react';
import { 
    View, 
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import GuestsList from './guestsList';
import AddGuest from './addGuest';

const windowWidth = (Dimensions.get('window').width * 0.75);

class Guests extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeView: 0,
    };
  }

  renderActiveView = () => {
      switch(this.state.activeView){
            case 0:
                return <GuestsList />
            case 1:
                return <AddGuest onCancelForm={this.cancelActiveView}/>
            default:
                return <GuestsList />
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
            <Text style={{color: '#ffffff', fontSize: 20, position: 'absolute', top: 60, left: (windowWidth * 0.05),}}>{this.state.activeView === 0 ? 'Visits List' : 'Add Visit'}</Text>
            {this.state.activeView === 0 ? (
                <TouchableOpacity 
                style={{position: 'absolute',top: 60, right: (windowWidth * 0.06), borderWidth: 1, borderColor: '#ffffff', borderRadius: 5, width: 100, height: 30, justifyContent: 'center', alignItems: 'center',}}
                onPress={()=> this.toggleActiveView()}
                >
                    <Text style={{color: '#ffffff', fontSize: 20,}}>Add Visit</Text>
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

export default Guests;
