// install react-navigation

//TODO: import four screens
import CustomerAPIScreen from "./CustomerAPIScreen";
import CustomerScreen from "./CustomerScreen";


// set up react navigation
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator(
    {
        Home: { screen: CustomerScreen },
        View: { screen: CustomerAPIScreen }
    },
    {
        defaultNavigationOptions: {
            headerTintColor: "#fff",
            headerStyle: {
                backgroundColor: "#ab62bd"
            },
            headerTitleStyle: {
                color: "#fff"
            },
            title: "MyBee API Test",



        }
    }
);

const App = createAppContainer(MainNavigator);


export default App;
