import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function Survey2() {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.view1}>
        {/* <View style={styles.view2}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/960648d5d882e437ca59f98ea36ff6194169a3e18d689a1f03c6029a310abdaa?apiKey=12fbf716322d41b9b96b841cf19d799b",
            }}
            style={styles.image1}
          />
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/98f24414a49f4dc4e94e4e8d547c24f544d708e3b07d1cb7340e39c637de3d9c?apiKey=12fbf716322d41b9b96b841cf19d799b",
            }}
            style={styles.image2}
          />
        </View> */}
        {/* <View style={styles.view3}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ab1af6453bbf581b80df826936a57664d5f42eaba48593b66dff06e5090bf22?apiKey=12fbf716322d41b9b96b841cf19d799b",
            }}
            style={styles.image3}
          />
          <View style={styles.view4}>
            <View style={styles.view5}>
              <Text style={styles.text}>Dementia App</Text>
            </View>
            <View style={styles.view6}>
              <Image
                resizeMode="contain"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/aefbcf58bd9b5c6fe084e0aa03c4d49b1ab59c7c806d975880a81eae9ebebbe8?apiKey=12fbf716322d41b9b96b841cf19d799b",
                }}
                style={styles.image4}
              />
            </View>
          </View>
        </View> */}
        <View style={styles.view7}>
          <Text style={styles.text2}>
            Answer the questions below to help us understand how you feel and
            help you on this journey to be better :)
          </Text>
        </View>
        <View style={styles.view8}>
          <View style={styles.question}>
            <Text style={styles.text2}>
              4. Have you experienced significant changes in mood, such as
              increased anxiety?
            </Text>
          </View>
          <View style={styles.option}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1cda2c13ec79677d393de86e584d008962e7f1d20cdb7a06465b9d6785e4c77e?apiKey=12fbf716322d41b9b96b841cf19d799b",
              }}
              style={styles.image5}
            />
            <Text style={styles.text}>Never</Text>
            <Text style={styles.text}>Sometimes</Text>
            <Text style={styles.text}>Often</Text>
            <Text style={styles.text}>Always</Text>
          </View>
          {/* Repeat similar blocks for other options */}
        </View>
        <View style={styles.view8}>
          <View style={styles.question}>
            <Text style={styles.text2}>
              5. Do you get lost in familiar places or have trouble finding your
              way back home?
            </Text>
          </View>
          <View style={styles.option}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1cda2c13ec79677d393de86e584d008962e7f1d20cdb7a06465b9d6785e4c77e?apiKey=12fbf716322d41b9b96b841cf19d799b",
              }}
              style={styles.image5}
            />
            <Text style={styles.text}>Never</Text>
            <Text style={styles.text}>Sometimes</Text>
            <Text style={styles.text}>Often</Text>
            <Text style={styles.text}>Always</Text>
          </View>
          {/* Repeat similar blocks for other options */}
        </View>
        <View style={styles.view8}>
          <View style={styles.question}>
            <Text style={styles.text2}>
              6. Have you noticed a difficulty in understanding spatial
              relationships?
            </Text>
          </View>
          <View style={styles.option}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1cda2c13ec79677d393de86e584d008962e7f1d20cdb7a06465b9d6785e4c77e?apiKey=12fbf716322d41b9b96b841cf19d799b",
              }}
              style={styles.image5}
            />
            <Text style={styles.text}>Never</Text>
            <Text style={styles.text}>Sometimes</Text>
            <Text style={styles.text}>Often</Text>
            <Text style={styles.text}>Always</Text>
          </View>
          {/* Repeat similar blocks for other options */}
        </View>
        <View style={styles.view36}>
          <Pressable onPress={() => navigation.navigate("Survey")}>
            <View style={styles.button}>
              <Text style={styles.text2}>Back</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Survey3")}>
            <View style={styles.button}>
              <Text style={styles.text2}>Next</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    paddingVertical: 21,
  },
  view1: {
    width: "100%",
    maxWidth: 480,
    paddingHorizontal: 15,
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 327,
    marginVertical: 20,
  },
  image1: {
    width: 100,
    height: 100, // Adjust height as needed
  },
  image2: {
    width: 100,
    height: 100, // Adjust height as needed
  },
  view3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  image3: {
    width: 100,
    height: 100, // Adjust height as needed
  },
  view4: {
    flexDirection: "row",
    alignItems: "center",
  },
  view5: {
    marginRight: 10,
  },
  view6: {
    flex: 1,
    alignItems: "flex-end",
  },
  image4: {
    width: 50,
    height: 50, // Adjust height as needed
  },
  view7: {
    marginVertical: 20,
  },
  view8: {
    // maxWidth: 343,
    backgroundColor: "#4B9CF2",
    borderRadius: 12,
    paddingVertical: 20,
    marginBottom: 15,
  },
  question: {
    marginBottom: 10,
    marginLeft: 10,
  },
  option: {
    flexDirection: "column",
    // alignItems: "center",
    marginLeft: 40,
    marginBottom: 10,
  },
  view36: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    // maxWidth: 305,
  },
  button: {
    backgroundColor: "#DADADA",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  text: {
    color: "#000",
    fontFamily: "Gelion, sans-serif",
    // textAlign: "center",
    fontSize: 16,
    // marginLeft: 40
  },
  text2: {
    color: "#000",
    fontFamily: "Gelion, sans-serif",
    // textAlign: "center",
    fontSize: 16,
  },
});

export default Survey2;
