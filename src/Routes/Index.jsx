import { Home } from "../Pages/Home";
import { History } from "../Pages/History";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


export function Index(){
    const {Navigator, Screen} = createNativeStackNavigator()
    return(
        <NavigationContainer>
            <Navigator>
                <Screen name="Home" component={Home} options={{headerShown:false}}/>
                <Screen name="History" component={History}/>
            </Navigator>
        </NavigationContainer>
    )
}