
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Loginscreen from '../Loginscreen';
import Login from "../Login"
import Forgotpassword from "../Forgotpassword"
import Register from "../Register"
import Facebook from "../Facebook";
// navigation stack
const AppStack = createStackNavigator(
    {
        Loginscreen: {
            screen: Loginscreen,
            navigationOptions: {
                header: null,
            },
        },
        Login: {
            screen: Login,
            navigationOptions: {
                header: null,
            },
        },
        Forgotpassword: {
            screen: Forgotpassword,
            navigationOptions: {
                header: null,
            },
        },
        Register: {
            screen: Register,
            navigationOptions: {
                header: null,

            },
        },
        Facebook: {
            screen: Facebook,
            navigationOptions: {
                header: null,
            },
        },
    },
    {
        initialRouteName: 'Login',
    },
);
const Routes = createAppContainer(
    createSwitchNavigator({
        App: AppStack,
    }),
);
export default Routes;