import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LandingPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <Text style={styles.text1}>
          where HEALTH meets <Text style={styles.boldText}>tech.</Text>
        </Text>
      </View>
      <Image
        resizeMode="contain"
        source={require('./assets/landing_page.png')}
        style={styles.image1}
      />
      <View style={styles.view3}>
        <Pressable
          style={styles.view4}
          onPress={() => navigation.navigate("ChooseRole")}
        >
          <Text style={styles.text2}>Start your journey</Text>
        </Pressable>
        {/* <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/584107a3e9882104f36b973ce1bf4c5536a65ca4dd46dd0ca6f710db40fd98df?apiKey=12fbf716322d41b9b96b841cf19d799b&",
          }}
          style={styles.image2}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: "#5D45DB",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 50,
  },
  view2: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  text1: {
    color: "#FFF",
    fontSize: 36,
    lineHeight: 42,
    fontWeight: "600",
    fontFamily: "Gelion, sans-serif",
    textAlign: "center",
  },
  boldText: {
    fontWeight: "700",
  },
  image1: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.56,
    marginVertical: 20,
  },
  view3: {
    alignItems: "center",
    marginBottom: 20,
  },
  view4: {
    fontFamily: "Gelion, sans-serif",
    marginBottom: 10,
  },
  text2: {
    fontSize: 28,
    color: "#FAFAFA",
    fontWeight: "400",
    textAlign: "center",
    fontFamily: "Gelion, sans-serif",
  },
  image2: {
    borderColor: "rgba(255, 255, 255, 1)",
    borderStyle: "solid",
    borderWidth: 2,
    width: 30,
    height: 30,
  },
});
