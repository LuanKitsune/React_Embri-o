import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Feed from "../screens/Feed";
import New from "../screens/New";


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="New" component={New} />
        </Tab.Navigator>
    );
}