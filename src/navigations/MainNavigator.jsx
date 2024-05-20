import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WebViewPractice from "../screens/WebViewPractice";
import CameraPractice from "../screens/CameraPractice";

const MainStack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name={"CameraPractice"} component={CameraPractice} />

        <MainStack.Screen
          name={"WebViewPractice"}
          component={WebViewPractice}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
