import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput, ScrollView } from 'react-native';

const windowWidth = (Dimensions.get('window').width * 0.75);

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchText: "",
        EmployeeList: [],
        isLoading: true,
    };
  }

  render() {
    return (
        <View style={{ position: 'absolute', top: 100, left: (windowWidth * 0.05), width: '90%', height: 550, backgroundColor: '#b2bec3', borderRadius: 5, marginBottom: 10,}}>
            {/* code for search bar */}
            <View style={{width: '100%', height: 60, backgroundColor: '#ffffff', borderTopLeftRadius: 5, borderTopRightRadius: 5,}}>
                <TextInput 
                    placeholder="Search with Employee Name"
                    style={{flex: 1, fontSize: 20, paddingLeft: 20,}}
                    onChangeText={(text)=> this.setState({searchText: text})}
                    value={this.state.searchText}
                />
            </View>
            <View style={{flex: 1,}}>

                {/* Code to display table heading */}
                <View style={{width: '100%', height: 40, flexDirection: 'row',}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 0.5, borderRightColor: '#636e72', }}>
                        <Text style={{fontSize: 20, }}>Employee ID</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 0.5, borderRightColor: '#636e72', }}>
                        <Text style={{fontSize: 20, }}>Employee Name</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{fontSize: 20, }}>Employee Designation</Text>
                    </View>
                </View>

                <ScrollView>
                    {/* code for table cell */}
                    <View style={{width: '100%', height: 60, borderBottomColor: '#ecf0f1', borderBottomWidth: 0.5, flexDirection: 'row', backgroundColor: '#dfe6e9', cursor: 'pointer',}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 0.5, borderRightColor: '#ecf0f1', }}>
                            <Text style={{fontSize: 16, }}>1186150</Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 0.5, borderRightColor: '#ecf0f1', }}>
                            <Text style={{fontSize: 16, }}>Gireesh Bandlamudi</Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{fontSize: 16, }}>Systems Engineer</Text>
                        </View>
                    </View>
                    
                </ScrollView>

                {/* Code for Error message */}
                {
                    (this.state.EmployeeList.length === 0 && !this.state.isLoading) ? (
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 20}}>Sorry!!! No data found</Text>
                    </View>
                    ) : (
                        <View />
                    )
                }
            </View>
        </View>
    );
  }
}

export default EmployeeList;
