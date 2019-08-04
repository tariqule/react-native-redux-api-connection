
import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { fetchCustomers } from "../actions/getCusomerActions";
import { Card, Header } from 'react-native-elements';
import GradientButton from 'react-native-gradient-buttons';
import { deleteCustomer } from "../actions/customerDeleteAction"
import PTRView from 'react-native-pull-to-refresh';

// export const transferId = CustomerAPIScreen.idStore.id;

class CustomerAPIScreen extends Component {
    state = {
        time: "",
        color: '#000000', // default button color goes here
        // id: "1"

    }


    static navigationOptions = {
        title: "MyBee API Test"
    };
    componentDidMount() {
        this.props.fetchCustomers;
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
        console.log(this.interval)

        // setInterval(this.props.fetchCustomers, 500)

        this.props.deleteCustomer
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    _keyExtractor = (datasource, index) => String(datasource.id);

    onButtonPress = () => {
        this.setState({ color: '#4287f5' });
    }

    _refresh = () => {
        return new Promise((resolve) => {
            setTimeout(() => { resolve() }, 2000)
        });

    }

    render() {
        const { error, loading, customers } = this.props;

        if (loading) {
            return (
                <View style={styles.progress}>
                    <ActivityIndicator size="large" color="#01CBC6" />
                    <Text>Loading...</Text>
                </View>
            );
        }
        if (error) {
            return (
                <View style={styles.progress}>
                    <Text>{error}</Text>
                </View>
            )
        }

        return (
            <PTRView onRefresh={this._refresh} >
                <View>
                    <Text style={styles.color}>refresh rate : {this.state.time}</Text>
                    <ScrollView>
                        <FlatList
                            data={customers}
                            keyExtractor={this._keyExtractor}
                            style={styles.margin}
                            extraData={customers}
                            renderItem={({ item }) => {
                                return (
                                    <Card>
                                        {
                                            <View>
                                                <Text style={color = this.state.color} onPress={() => {
                                                    console.log(item.id);
                                                    this.onButtonPress;
                                                    this.props.deleteCustomer(this.props.navigation.state.params.Data, item.id)

                                                }}>
                                                    {item.mybeeId} {item.password} {item.email} {item.firstName}
                                                </Text>
                                            </View>
                                        }
                                    </Card>
                                );
                            }}
                        />
                    </ScrollView>
                </View>
            </PTRView>
        );
    }
}

const mapStateToProps = state => ({
    customers: state.customers.items,
    loading: state.customers.loading,
    error: state.customers.error,
});

const mapDispatchToProps = dispatch => {
    return {
        fetchCustomers: dispatch(fetchCustomers()),
        deleteCustomer: (data, id) => {
            dispatch(deleteCustomer(data, id))
            console.log(`${data},${id}`)
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    margin: {
        marginTop: 20,
        marginBottom: 20
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

    },
    color: {
        color: '#a83232',
        textAlign: 'center'
    }

});


export default connect(mapStateToProps, mapDispatchToProps)(CustomerAPIScreen);