
import React from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { fetchCustomers } from "../actions/getCusomerActions";
import { Hoshi } from 'react-native-textinput-effects';
import { Card, ListItem, Divider, Header, Input } from 'react-native-elements';
import GradientButton from 'react-native-gradient-buttons';
import { postRequest } from "../actions/customerPostAction";
// import { Card, CardItem } from "native-base";
class CustomerScreen extends React.Component {
    state = {

        mybeeId: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",

    }

    _keyExtractor = (datasource, index) => datasource.id;



    static navigationOptions =
        {
            title: 'MyBee API Test'

        };

    render() {

        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={() => {
                        // dismiss the keyboard if touch any other area then input
                        Keyboard.dismiss();
                    }}
                >

                    <ScrollView>

                        <GradientButton
                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 24, marginLeft: 40, }}
                            textStyle={{ fontSize: 20 }}
                            gradientBegin="#3c7a2a"
                            gradientEnd="#bf97b7"
                            gradientDirection="diagonal"
                            height={60}
                            width={300}
                            radius={15}
                            impact
                            impactStyle='Light'
                            onPressAction={() => {
                                this.props.navigation.navigate("View", {
                                    Data: this.state
                                });


                            }}>
                            Check Data
                            </GradientButton>

                        <Divider style={{ backgroundColor: 'blue' }} />
                        <Hoshi
                            label={'First Name'}
                            // this is used as active border color
                            borderColor={'#b76c94'}
                            // active border height
                            borderHeight={3}
                            inputPadding={16}
                            // this is used to set backgroundColor of label mask.
                            onChangeText={mybeeId => this.setState({ mybeeId })} />
                        <Hoshi
                            label={'Last Name'}
                            borderColor={'#4287f5'}
                            // active border height
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={password => this.setState({ password })}

                        ></Hoshi>
                        <Hoshi
                            label={'Email'}
                            borderColor={'#f542d1'}
                            // active border height
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={email => this.setState({ email })}

                        ></Hoshi>
                        <Hoshi
                            label={'Phone'}
                            borderColor={'#f54242'}
                            // active border height
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={firstName => this.setState({ firstName })}
                        ></Hoshi>
                        <Hoshi
                            label={'Address'}
                            borderColor={'#42f5b9'}
                            // active border height
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={lastName => this.setState({ lastName })}

                        ></Hoshi>
                        <GradientButton
                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 24, marginLeft: 40, }}
                            textStyle={{ fontSize: 20 }}
                            gradientBegin="#42154d"
                            gradientEnd="#b36ec2"
                            gradientDirection="diagonal"
                            height={60}
                            width={300}
                            radius={15}
                            impact
                            impactStyle='Light'
                            onPressAction={() => {
                                // this.props.postRequest;
                                console.log(this.props.post)
                                // console.log(JSON.stringify(this.props.postRequest))
                                alert(`${this.state.firstName} We have sent your data`)
                                console.log(this.state)
                                // console.log(`${this.state.firstName}`,`${this.state.lastName}`,`${this.state.email}`,`${this.state.phone}`,`${this.state.address}`)
                                this.props.postRequest(this.state);

                            }}
                        ><Text>Send</Text></GradientButton>
                        <GradientButton
                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 24, marginLeft: 40, }}
                            textStyle={{ fontSize: 20 }}
                            gradientBegin="#42154d"
                            gradientEnd="#b36ec2"
                            gradientDirection="diagonal"
                            height={60}
                            width={300}
                            radius={15}
                            impact
                            impactStyle='Light'
                            onPressAction={() => {
                                alert("Feature not available!")

                            }}
                        ><Text>Update</Text></GradientButton>

                    </ScrollView>

                </TouchableWithoutFeedback>
            </View >
        );


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    margin: {
        marginTop: 50
    },

    profilepic: {
        flex: 2,
        height: 100,
        width: 100,
        marginEnd: 10
    },
    userinfo: {
        flex: 5,
        flexDirection: "column",
        marginStart: 25
    },
    progress: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        alignItems: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "#590d70",
        marginTop: 50,
        marginLeft: 30,

    }
});
const mapStateToProps = state => ({
    customers: state.customers.items,
    loading: state.customers.loading,
    error: state.customers.error,
    post: state.postCustomers.data,
    postLoading: state.postCustomers.isLoading,
    postError: state.postCustomers.error
});


const mapDispatchToProps = dispatch => {
    return {
        fetchCustomers: dispatch(fetchCustomers()),
        postRequest: (Project) => {
            dispatch(postRequest(Project))
        }
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(CustomerScreen);