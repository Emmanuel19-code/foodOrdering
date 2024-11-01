import { Colors } from "@/src/constants/Colors";
import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Pepperonic Piza</Text>
      <Text style={styles.price}>$24.22</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: "600",marginVertical:10 },
  price:{color:Colors.light.tint}
});
