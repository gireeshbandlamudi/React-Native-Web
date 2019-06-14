import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Dimensions, Picker, TouchableOpacity } from 'react-native';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const windowWidth = (Dimensions.get('window').width * 0.75);

class AddGuest extends Component {
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
        <View style={{ position: 'absolute', top: 100, left: (windowWidth * 0.05), width: '90%', height: 550, backgroundColor: '#b2bec3', borderRadius: 5, }}>
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
                        placeholder="Customer Company Name"
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
                        <Picker.Item label="Region" value="0"/>
                        <Picker.Item label="Singapore" value="Singapore" />
                        <Picker.Item label="Australia" value="Australia" />
                    </Picker>
                </View>

                <View style={{width: '95%', borderWidth: 1, borderColor: '#ffffff', borderRadius: 5, marginTop: 10, backgroundColor: '#74b9ff', marginBottom: 10,}}>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginBottom: 10,}}>
                        <View style={{marginLeft: 10,}}>
                            <Text style={{color: '#ffffff', fontSize: 20,}}>Add Customer Details</Text>
                        </View>
                        <TouchableOpacity 
                        style={{ borderRadius: 5,backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', marginRight: 10,}}
                        onPress={()=> this.addNewRow()}
                        >
                            <Text style={{fontSize: 15, padding: 5, }}>ADD ROW</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        this.state.customerDetails.map((item, index) => {
                            return(
                                <View key={index} style={{width: '100%', height: 50, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 10, marginBottom: 10, alignItems: 'center',}}>
                                    <View style={{width: '24%', height: 50, borderRadius: 5,}}>
                                        <TextInput 
                                        placeholder="Customer Name"
                                        style={{flex: 1, paddingLeft: 15, backgroundColor: '#ffffff', borderRadius: 5,}}
                                        onChangeText={(text)=> this.setData(index, item.key[0], text)}
                                        value={item.customerName}
                                        placeholderTextColor="#7f8c8d"
                                        />
                                    </View>
                                    <View style={{width: '24%', height: 50, borderRadius: 5,}}>
                                        <TextInput 
                                        placeholder="Customer Designation"
                                        style={{flex: 1, paddingLeft: 15, backgroundColor: '#ffffff', borderRadius: 5,}}
                                        onChangeText={(text)=> this.setData(index, item.key[1], text)}
                                        value={item.customerDesignation}
                                        placeholderTextColor="#7f8c8d"
                                        />
                                    </View>
                                    <View style={{width: '24%', height: 50, borderRadius: 5,}}>
                                        <TextInput 
                                        placeholder="Customer EmailID"
                                        style={{flex: 1, paddingLeft: 15, backgroundColor: '#ffffff', borderRadius: 5,}}
                                        onChangeText={(text)=> this.setData(index, item.key[2], text)}
                                        value={item.customerEmail}
                                        placeholderTextColor="#7f8c8d"
                                        />
                                    </View>
                                    <View style={{width: '22%', height: 50, borderRadius: 5,}}>
                                        <TextInput 
                                        placeholder="Customer Mobile Number"
                                        style={{flex: 1, paddingLeft: 15, backgroundColor: '#ffffff', borderRadius: 5,}}
                                        onChangeText={(text)=> this.setData(index, item.key[3], text)}
                                        value={item.customerMobile}
                                        placeholderTextColor="#7f8c8d"
                                        />
                                    </View>
                                    <TouchableOpacity 
                                    style={{width: 30, height: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d63031', borderRadius: 15,}}
                                    onPress={()=> this.deleteRow(index)}
                                    >
                                        <Text style={{color: '#ffffff', fontSize: 15}}>X</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </View>

                <View style={{width: '95%', height: 200, backgroundColor: '#ffffff', borderRadius: 5,}}>
                    <TextInput 
                        style={{flex: 1,padding: 10, fontSize: 20,}}
                        multiline={true}
                        placeholder="Purpose of visit"
                        onChangeText={(text)=> this.setState({
                            visitPurpose: text
                        })}
                        value={this.state.visitPurpose}
                    />
                </View>

                <View style={{width: '100%', flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, justifyContent: 'space-around', marginBottom: 10,}}>
                    <View style={{width: '34%', height: 50, borderRadius: 5,}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff',}}>Start Date</Text>
                        <DatePicker
                            inline
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="MMMM d, yyyy h:mm aa"
                            timeCaption="time"
                        />
                    </View>
                    <View style={{width: '34%', height: 50, borderRadius: 5,}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff',}}>End Date</Text>
                        <DatePicker
                            inline
                            selected={this.state.endDate}
                            onChange={this.handleChange1}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="MMMM d, yyyy h:mm aa"
                            timeCaption="time"
                        />
                    </View>
                </View>

            </ScrollView>
            </View>
        </View>
    );
  }
}

export default AddGuest;
