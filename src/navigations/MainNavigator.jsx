import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import WebViewPractice from "../screens/WebViewPractice";
import CameraPractice from "../screens/CameraPractice";
import ShoppingList from "../screens/shoppingList";
import Home from "../screens/home";
import { View } from "react-native";
import Register from "../screens/register";
import Login from "../screens/login";
import StoragePractice from "../screens/storagePractice";
import PokemonListing from "../screens/pokemonListing";
import PokemonDetails from "../screens/pokemonDetails";

const MainStack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="PokemonListing">
        <MainStack.Screen name={"PokemonListing"} component={PokemonListing} />
        <MainStack.Screen name={"PokemonDetails"} component={PokemonDetails} />

        <MainStack.Screen
          name={"StoragePractice"}
          component={StoragePractice}
        />
        <MainStack.Screen name={"Login"} component={Login} />
        <MainStack.Screen name={"Register"} component={Register} />

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
