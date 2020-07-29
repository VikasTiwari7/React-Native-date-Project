import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, Text, TextInput, TouchableOpacity } from
    'react-native';
import { } from 'react-native-validator-form';
import { Value } from 'react-native-reanimated';
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Email: '',
            Password: '',
        }
    }
    validate = (text) => {
        const { Email } = this.state
        let reg = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
        if (Email == "") {
            alert('Please fill the Email-Id')
        }
        else if (reg.test(Email) === false) {
            alert('please provide valid Email id')
            this.setState({ Email: text })
            return false;
        }
        else {
            this.setState({ Email: text })
            console.log("Email is Correct");
            return true;
        }
    }

    logindetail = () => {
        const { Email, Password } = this.state
        if (this.validate()) {
            if (Email == "t@gmail.com" && Password == "Vikas") {
                this.props.navigation.navigate("Loginscreen")
            } else {
                alert('Login Credential Does not matched')
            }
        }
    }
    render() {
        return (
            <ImageBackground source={require('../assests/background.png')} style={styles.container}>
                <View style={{
                }}>
                    <Image source={require('../assests/logo.png')} style={{
                        width: 180, height: 200, justifyContent: "center", alignSelf: "center",
                        marginTop: "8.5%"
                    }}></Image>
                </View>
                <View style={{ margin: "7%" }}>

                    <View style={{ flexDirection: 'row', }}>
                        <Image source={require('../assests/e-mail.png')} style={{ height: 25, width: 25, alignSelf: "center" }}>

                        </Image>
                        <View style={{ width: "80%", marginLeft: "3%" }} >
                            <TextInput placeholder="E-mail" borderColor="white" placeholderTextColor="white"
                                onChangeText={(text) => this.setState({ Email: text })}
                                style={{ borderBottomWidth: 2, color: "white" }}></TextInput>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Image source={require('../assests/password.png')} style={{
                            height: 25, width: 25,
                            justifyContent: "center", alignSelf: "center"
                        }}>

                        </Image>
                        <View style={{ width: "80%", marginLeft: "3%" }}>
                            <TextInput placeholder="Password" borderColor="white"
                                onChangeText={(value) => this.setState({ Password: value })}
                                placeholderTextColor="white" style={{
                                    color: "white",
                                    marginRight: "10%",
                                    margin: "1%",
                                    borderBottomWidth: 2,
                                    width: "100%"
                                }}></TextInput>
                        </View>
                    </View>
                </View>
                <View style={{}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Forgotpassword")}>
                        <Text style={{
                            margin: "1%", marginLeft: "58%", color: "white", textDecorationLine: "underline",
                            fontSize: 17, fontWeight: 'bold'
                        }}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <View style={styles.login}>
                        <TouchableOpacity onPress={() => this.logindetail()}>
                            <Text style={{
                                color: "#42c5f5", margin: 10, justifyContent: "center", textAlign: "center",
                                fontSize: 16, fontWeight: "bold"
                            }}>Login</Text>
                        </TouchableOpacity>

                    </View>
                    <Text style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>OR</Text>
                    <View style={styles.loginwithfacebook}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Facebook")}>
                            <Text style={{
                                color: "white", margin: 10, justifyContent: "center", textAlign: "center",
                                fontSize: 16,
                                fontWeight: "bold"
                            }}>
                                Login with FaceBook</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: 'center', bottom: "-7.5%" }}>
                        <Text style={{ color: "white", fontSize: 16, }}>Not Registered Yet?</Text>

                        <View >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
                                <Text style={{
                                    color: "white", textDecorationLine: "underline",
                                    fontSize: 17, fontWeight: "bold",
                                }}>
                                    Register
                          </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground >
        )
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
});
