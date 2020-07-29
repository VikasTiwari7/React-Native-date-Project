import React, { Component } from 'react';
import { ScrollView, View, Image, Text, DateTimePicker, DatePickerIOSBase, DatePickerIOS } from 'react-native';

import DatePicker from 'react-native-date-picker'
import { color } from 'react-native-reanimated';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date(),
      datt2: new Date(),
      date3: new Date()
    }
  }
  render() {
    const { date, datt2, date3, } = this.state;
    return (
      <ScrollView>
        <View>
          <View style={{ margin: 20 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Back</Text>
          </View>
          <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
            <Text style={{ fontSize: 25, color: 'blue', fontWeight: 'bold' }}>
              bridged
            </Text>
          </View>
          <View style={{ marginTop: '5%', marginLeft: '10%' }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
              What's your date of birth?
            </Text>
          </View>
          <View style={{ margin: '10%', justifyContent: 'center', alignSelf: 'center' }}>
            <View>
              <DatePicker
                style={{ height: 50 }}
                date={this.state.date}
                mode="date"
                fadeToColor="true"
                locale='en'
                minimumDate="31-january-2000"
                maximumDate="31-December-2100"
                onDateChange={(e) => { this.setState({ date: e }) }}
              // onDateChange={setDate}
              />
            </View>
            <View>
              <DatePicker
                style={{ height: 50 }}
                date={this.state.datt2}
                mode="date"
                fadeToColor="true"
                minimumDate="31-january-2000"
                maximumDate="31-December-2100"
                locale='en'
                onDateChange={(e) => { this.setState({ datt2: e }) }}
              />
            </View>
            <View>
              <DatePicker
                style={{ height: 50, }}
                date={this.state.date3}
                mode="date"
                locale='en'
                fadeToColor="true"
                minimumDate="31-january-2000"
                maximumDate="31-December-2100"
                onDateChange={(e) => { this.setState({ date3: e }) }}

              />
            </View>

          </View>
          <View style={{ justifyContent: 'center', alignSelf: 'center' }}>

            <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Age 20</Text>
          </View>
          <View style={{ justifyContent: 'center', alignSelf: 'center' }}>

            <Text style={{ fontSize: 20, color: 'grey' }}>This can't be changed Later</Text>
          </View>
          <View style={{ marginTop: '15%', marginLeft: '80%' }}>
            <Image source={require('./assests/downarrow.png')} style={{ height: 40, width: 40 }}>

            </Image>
          </View>

        </View >
      </ScrollView>

    );
  }
}