import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, CheckBox, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
// import { TextInput, ScrollView } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
var radio_props = [
    { label: ' I am  Vender', value: 1 },
    { label: 'I am  Customer', value: 1 },
];
const [isSelected, setSelection] = false;
export default class Register extends Component {
    state = {
        value: 0,
    }
    render() {
        return (
            <ImageBackground source={require('../assests/background.png')} style={{ width: "100%", height: '100%' }}>
                <ScrollView>
                    <View>
                        <Image source={require('../assests/logo.png')} style={{
                            width: 150, height: 180, justifyContent: "center", alignSelf: "center",
                            marginTop: "1%"
                        }}></Image>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "center" }}>

                        <View style={{ flexDirection: "row", }}>
                            <RadioForm
                                radio_props={radio_props}
                                buttonColor={'white'}
                                labelColor={'white'}
                                selectedButtonColor={'white'}
                                selectedLabelColor={'white'}
                                formHorizontal={true}
                                // buttonStyle={{ margin: 20 }}
                                radioStyle={{ paddingRight: 8 }}
                                buttonSize={15}
                                buttonOuterSize={25}
                                radioStyle={{ margin: 10 }}
                                onPress={(value) => { this.setState({ value: value }) }}

                            />
                        </View>

                    </View>
                    <View style={{ marginLeft: "10%", marginRight: "15%" }}>
                        <View style={{
                            flexDirection: "row"
                        }}>
                            <View style={{ alignSelf: "center" }}>
                                <Image source={require('../assests/e-mail.png')} style={{ height: 25, width: 25, alignSelf: "center" }}></Image>
                            </View>
                            <View style={{
                                justifyContent: 'space-evenly',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                width: "50%",
                                marginLeft: 10
                            }}>
                                <TextInput placeholder="First Name" borderColor="white" placeholderTextColor="white" style={styles.font}></TextInput>
                            </View>
                            <View >
                                <TextInput placeholder="Last Name" borderColor="white" placeholderTextColor="white" style={styles.font}></TextInput>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }} >
                            <Image source={require('../assests/e-mail.png')} style={{ height: 25, width: 25, alignSelf: "center" }}></Image>
                            <TextInput placeholder="Mobile" borderColor="white" placeholderTextColor="white" style={styles.font}></TextInput>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../assests/e-mail.png')} style={{ height: 25, width: 25, alignSelf: "center" }}></Image>
                            <TextInput placeholder="E-mail Id" borderColor="white" placeholderTextColor="white" border style={styles.font}></TextInput>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={require('../assests/password.png')} style={{ height: 25, width: 25, alignSelf: "center" }}></Image>
                            <TextInput placeholder="Password" borderColor="white" placeholderTextColor="white" style={styles.font}></TextInput>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={require('../assests/password.png')} style={{ height: 25, width: 25, alignSelf: "center" }}></Image>
                            <TextInput placeholder="Confirmed Password" borderColor="white" placeholderTextColor="white" style={styles.font}></TextInput>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: "5%" }}>
                            <CheckBox
                                // value={option.item.selected}
                                value={isSelected}
                                onValueChange={setSelection}
                                onValueChange={() => { }}
                                tintColors={{ true: 'white', false: 'black' }}
                            ></CheckBox>
                            <Text style={{ color: "white", marginTop: 6, textDecorationLine: 'underline' }}>Terms And condition</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: "10%", marginRight: "5%" }}>
                        <View >
                            <View style={styles.login} >
                                <TouchableOpacity >
                                    <Text style={{
                                        color: "#42c5f5", margin: 10, justifyContent: "center", textAlign: "center",
                                        fontSize: 16, fontWeight: "bold"
                                    }} >Register</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={styles.or}>OR</Text>
                            </View>
                            <View style={styles.loginwithfacebook}>
                                <TouchableOpacity >
                                    <Text style={{
                                        color: "white", margin: 10, justifyContent: "center", textAlign: "center",
                                        fontSize: 16, fontWeight: "bold"
                                    }} >Signup With Facebook</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: "center", margin: '5%' }}>
                            <View  >
                                <Text style={styles.statement}>Are You Have Account?</Text>
                            </View>
                            <View>
                                <Text style={styles.statementlog}>Login</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground >
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null, elevation: 3,
    },
    login: {
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 10,
        fontSize: 25,
        borderRadius: 20,
        borderColor: 'white',
        backgroundColor: "white",
        borderWidth: 1,
    },
    loginwithfacebook: {
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 10,

        borderRadius: 20,
        borderColor: "#42c5f5",
        backgroundColor: "#42c5f5",
        borderWidth: 1,
    },
    login: {
        color: "#42c5f5",
        margin: 5,
        justifyContent: "center",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: "white",
        borderRadius: 20
    },
    loginwithfacebook: {
        color: "white",
        margin: 5,
        justifyContent: "center",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: "#42c5f5",
        borderRadius: 20
    },
    or: {
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
    },
    statement: {
        color: "white",
        justifyContent: "center",
        textAlign: "center",
        fontWeight: 'bold'
    },
    statementlog: {

        color: "white",
        justifyContent: "center",
        textAlign: "center",
        fontWeight: 'bold',
        textDecorationLine: "underline"
    },
    font: {
        color: "white",
        marginRight: "15%",
        margin: 1.5,
        borderBottomWidth: 2,
        width: "100%"
    }
});