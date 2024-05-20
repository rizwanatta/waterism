import { View } from "react-native";
import { WebView } from "react-native-webview";

export default function WebViewPractice() {
  return (
    <View style={{ flex: 1 }}>
      <WebView style={{ flex: 1 }} source={{ uri: "https://www.google.com" }} />
    </View>
  );
}
