import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Dimensions, Picker, TouchableOpacity } from 'react-native';

const windowWidth = (Dimensions.get('window').width * 0.75);

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cCompanyName: "",
        customerRegion: "",
        customerDetails: [
            {
                key: ["customerName", "customerDesignation", "customerEmail", "customerMobile"],
                customerName: "",
                customerDesignation: "",
                customerEmail: "",
                customerMobile: "",
            }
        ],
        startDate: "",
        isSDateOpen: false,
        endDate: "",
        isEndDateOpen: false,
        visitPurpose: "",
        formStatus: this.props.formSubmit,
    };
  }

  handleChange = (date)  => {
    this.setState({
        startDate: date
    }, ()=> {
        console.log(this.state.startDate);
    });
  }

  handleChange1 = (date) => {
    this.setState({
        endDate: date
    });
  }

  addNewRow = () => {
      var temp = this.state.customerDetails;
      temp.push({
        key: ["customerName", "customerDesignation", "customerEmail", "customerMobile"],
        customerName: "",
        customerDesignation: "",
        customerEmail: "",
        customerMobile: "",
      });
      this.setState({
          customerDetails: temp,
      })
  }

  deleteRow = (index) => {
      var temp = this.state.customerDetails;
      temp.splice(index, 1);
      this.setState({
          customerDetails: temp,
      })
  }

  setData = (a, b, c) => {
      var temp = this.state.customerDetails;
      temp[a][b] = c;
      this.setState({
        customerDetails: temp,
      })
  }

  submitForm = () => {
    console.log("From submitted");
  }

  render() {
    return (
        <View style={{ position: 'absolute', top: 100, left: (windowWidth * 0.05), width: '90%', height: 300, backgroundColor: '#b2bec3', borderRadius: 5, }}>
            <View style={{position: 'absolute',top: -45, right: 0, flexDirection: 'row',}}>
                <TouchableOpacity 
                style={{ borderWidth: 1, borderColor: '#d63031', borderRadius: 5, width: 100, height: 30, justifyContent: 'center', alignItems: 'center', marginRight: 10,}}
                onPress={()=> this.props.onCancelForm()}
                >
                    <Text style={{color: '#d63031', fontSize: 20,}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={{ borderWidth: 1, borderColor: '#ffffff', borderRadius: 5, width: 100, height: 30, justifyContent: 'center', alignItems: 'center',}}
                onPress={()=> this.submitForm()}
                >
                    <Text style={{color: '#ffffff', fontSize: 20,}}>Submit</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, paddingBottom: 35,}}>
            <ScrollView contentContainerStyle={{flex: 1, alignItems: 'center',}}>
                
                <View style={{width: '100%', height: 50, flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, justifyContent: 'space-around',}}>
                    <View style={{width: '45%', height: 50, borderRadius: 5,}}>
                        <TextInput 
                        placeholder="Employee Name"
                        style={{flex: 1, paddingLeft: 15, backgroundColor: '#ffffff', borderRadius: 5,}}
                        onChangeText={(text)=> this.setState({cCompanyName: text})}
                        value={this.state.cCompanyName}
                        placeholderTextColor="#7f8c8d"
                        />
                    </View>
                    <Picker
                    selectedValue={this.state.customerRegion}
                    style={{height: 50, width: '45%'}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({customerRegion: itemValue})
                    }>
                        <Picker.Item label="Employee Location" value="0"/>
                        <Picker.Item label="Singapore" value="Singapore" />
                        <Picker.Item label="Australia" value="Australia" />
                    </Picker>
                </View>

                <View style={{width: '100%', height: 50, flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, justifyContent: 'space-around',}}>
                    <View style={{width: '45%', height: 50, borderRadius: 5,}}>
                        <TextInput 
                        placeholder="Employee Designation"
                        style={{flex: 1, paddingLeft: 15, backgroundColor: '#ffffff', borderRadius: 5,}}
                        onChangeText={(text)=> this.setState({cCompanyName: text})}
                        value={this.state.cCompanyName}
                        placeholderTextColor="#7f8c8d"
                        />
                    </View>
                    <View style={{width: '45%', height: 50, borderRadius: 5,}}>
                        <TextInput 
                        placeholder="Employee Id"
                        style={{flex: 1, paddingLeft: 15, backgroundColor: '#ffffff', borderRadius: 5,}}
                        onChangeText={(text)=> this.setState({cCompanyName: text})}
                        value={this.state.cCompanyName}
                        placeholderTextColor="#7f8c8d"
                        />
                    </View>
                </View>

                <View style={{width: '100%', height: 50, flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, justifyContent: 'space-around',}}>
                    <View style={{width: '45%', height: 50, borderRadius: 5,}}>
                        <TextInput 
                        placeholder="Employee Mobile"
                        style={{flex: 1, paddingLeft: 15, backgroundColor: '#ffffff', borderRadius: 5,}}
                        onChangeText={(text)=> this.setState({cCompanyName: text})}
                        value={this.state.cCompanyName}
                        placeholderTextColor="#7f8c8d"
                        />
                    </View>
                    <View style={{width: '45%', height: 50, borderRadius: 5,}}>
                        <TextInput 
                        placeholder="Employee Emailid"
                        style={{flex: 1, paddingLeft: 15, backgroundColor: '#ffffff', borderRadius: 5,}}
                        onChangeText={(text)=> this.setState({cCompanyName: text})}
                        value={this.state.cCompanyName}
                        placeholderTextColor="#7f8c8d"
                        />
                    </View>
                </View>

            </ScrollView>
            </View>
        </View>
    );
  }
}

export default AddEmployee;
