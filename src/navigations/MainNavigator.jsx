import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import WebViewPractice from "../screens/WebViewPractice";
import CameraPractice from "../screens/CameraPractice";
import ShoppingList from "../screens/shoppingList";
import Home from "../screens/home";
import { View } from "react-native";

const MainStack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen name={"Home"} component={Home} />

        <MainStack.Screen
          name={"WebViewPractice"}
          component={WebViewPractice}
        />

        <MainStack.Screen name={"ShoppingList"} component={ShoppingList} />

        <MainStack.Screen
          name={"CameraPractice"}
          component={CameraPractice}
          options={{
            title: "Take Your Selfie",
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="person" size={30} color={"white"} />
                <Ionicons name="settings" size={30} color={"white"} />
              </View>
            ),
            headerLeft: () => (
              <Ionicons name="arrow-back" size={30} color={"white"} />
            ),
            headerStyle: {
              backgroundColor: "red",
            },
            headerTitleStyle: {
              color: "white",
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
