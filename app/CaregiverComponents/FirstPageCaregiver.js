import * as React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

function FirstPageCaregiver() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {/* <View style={styles.row1}>
          <Image
            resizeMode="contain"
            source={{
              uri:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/960648d5d882e437ca59f98ea36ff6194169a3e18d689a1f03c6029a310abdaa?apiKey=12fbf716322d41b9b96b841cf19d799b&",
            }}
            style={styles.image1}
          />
          <Text style={styles.image1}>9:41</Text>
          <Image
            resizeMode="contain"
            source={require('../assets/network.png')}
            style={styles.image2}
          />
        </View> */}
        <View style={styles.row2}></View>
        <Text style={styles.greeting}>
          <Text style={styles.bold}>Good Morning,</Text>
          {"\n"}
          <Text style={styles.bold}>John</Text>
        </Text>
        <Image
          resizeMode="contain"
          source={require("../assets/first_page.png")}
          style={styles.image5}
        />
        <View style={styles.cardset}>
          <View style={styles.row3}>
            <TouchableOpacity
              onPress={() => navigation.navigate("DiagnosisOptions")}
            >
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Self-Diagnostics</Text>
                <View style={styles.cardContent}>
                  <Text style={styles.cardText}>Take the test</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("CalenderView");
              }}
            >
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Appointments</Text>
                <View style={styles.cardContent}>
                  <Text style={styles.cardText}>View and book</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row3}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CarouselCards")}
          >
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Educational Hub</Text>
              <View style={styles.cardContent}>
                <Text style={styles.cardText}>Find Helpful Blogs</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DementiaBot");
            }}
          >
            <View style={styles.card}>
              <Text style={styles.cardTitle}>KnowDementia Bot</Text>
              <View style={styles.cardContent}>
                <Text style={styles.cardText}>Questions answered</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row3}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AddPatient");
            }}
          >
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Add Patient</Text>
              <View style={styles.cardContent}>
                <Text style={styles.cardText}>Handle Patient List</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MediaPicker");
            }}
          >
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Make Collage</Text>
              <View style={styles.cardContent}>
                <Text style={styles.cardText}>Reenforce Memories</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row4}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PatientHealthRecordBot");
            }}
          >
            <View style={styles.card}>
              <Text style={styles.cardTitle}>MedicoBot</Text>
              <View style={styles.cardContent}>
                <Text style={styles.cardText}>Upload reports</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FamFaces");
            }}
          >
            <View style={styles.card}>
              <Text style={styles.cardTitle}>FamFaces</Text>
              <View style={styles.cardContent}>
                <Text style={styles.cardText}>Hear your fam</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.bottom}>
          <View style={styles.nav}>
            <Image
              resizeMode="contain"
              source={{
                uri:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/0988abf3b86b612a3b002fcb11a26da62acf2fdeb34ef21d086b12998ed65bed?apiKey=12fbf716322d41b9b96b841cf19d799b&",
              }}
              style={styles.navIcon}
            />
            <Image
              resizeMode="contain"
              source={{
                uri:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/62c18c05b754b4560aec45be23911a460f1127093cc54cc4c744544028369804?apiKey=12fbf716322d41b9b96b841cf19d799b&",
              }}
              style={styles.navIcon}
            />
          </View>
          <Text style={styles.navItem}>Home</Text>
          <Text style={styles.navItem}>Memory</Text>
        </View>
        <Text style={styles.sos}>SOS</Text>
        <View style={styles.bottom}>
          <Image
            resizeMode="contain"
            source={{
              uri:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/adbaaaef9e5366cff9754286897d97e75f9cc4566cbf7152e2960c622ed2fcbd?apiKey=12fbf716322d41b9b96b841cf19d799b&",
            }}
            style={styles.navIcon}
          />
          <Text style={styles.navItem}>Blogs</Text>
        </View>
        <View style={styles.bottom}>
          <Image
            resizeMode="contain"
            source={{
              uri:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/dcca18faeef1e2c627f86542f370823c0c02c4aac40bda993c0a3f661cb14491?apiKey=12fbf716322d41b9b96b841cf19d799b&",
            }}
            style={styles.navIcon}
          />
          <Text style={styles.navItem}>Account</Text>
        </View> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    maxWidth: 480,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 16,
  },
  cardset: {
    display: "flex",
    width: "100%",
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    // maxWidth: 355,
    width: "100%",
    paddingHorizontal: 16,
    height: 30,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    // maxWidth: 355,
    width: "100%",
    paddingHorizontal: 16,
  },
  row3: {
    flexDirection: "row",
    justifyContent: "space-around",
    // maxWidth: 355,
    width: "100%",
    // paddingHorizontal: 16,
    marginTop: 22,
  },
  row4: {
    flexDirection: "row",
    justifyContent: "space-around",
    maxWidth: 355,
    width: "100%",
    // paddingHorizontal: 16,
    marginTop: 22,
  },
  image1: {
    width: 60,
    height: "100%",
    fontFamily: "Gelion",
    fontSize: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image2: {
    width: 60,
    height: 40,
  },
  image3: {
    width: 40,
    height: 40,
  },
  column: {
    alignItems: "center",
  },
  logo: {
    color: "#5D45DB",
    fontSize: 18,
    fontFamily: "Outfit, sans-serif",
  },
  bold: {
    fontWeight: "700",
  },
  greeting: {
    width: "100%",
    color: "#5D45DB",
    fontSize: 40,
    lineHeight: 50,
    textAlign: "left",
    padding: 20,
    fontFamily: "Gelion",
    // fontSize: "xxx-large",
  },
  image5: {
    width: "100%",
    maxWidth: 317,
    height: 150,
    marginTop: 39,
  },
  card: {
    fontFamily: "Gelion",
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "rgba(93, 69, 219, 1)",
    backgroundColor: "#F7F7F7",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cardTitle: {
    color: "#5D45DB",
    fontSize: 16,
    fontFamily: "Gelion",
    fontWeight: "bold",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  cardText: {
    color: "#5D45DB",
    fontSize: 12,
    fontFamily: "Gelion",
    fontWeight: "bold",
  },
  image6: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  image7: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  sectionTitle: {
    color: "#5D45DB",
    fontSize: 16,
    textAlign: "left",
    marginTop: 40,
    marginBottom: 16,
    fontFamily: "Gelion",
  },
  calendar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  month: {
    flexDirection: "column",
    alignItems: "center",
  },
  monthText: {
    color: "#5D45DB",
    fontSize: 16,
    fontFamily: "Gelion",
  },
  days: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 8,
  },
  day: {
    backgroundColor: "#5D45DB",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
    marginVertical: 2,
  },
  help: {
    color: "#5D45DB",
    fontSize: 16,
    textAlign: "left",
    marginTop: 40,
    fontFamily: "Gelion",
  },
  description: {
    color: "#5D45DB",
    fontSize: 12,
    textAlign: "left",
    marginTop: 16,
    maxWidth: 440,
    width: "100%",
    paddingHorizontal: 20,
    fontFamily: "Gelion",
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 12,
  },
  navItem: {
    color: "#5D45DB",
    fontSize: 16,
    marginLeft: 8,
    fontFamily: "Gelion",
  },
  sos: {
    color: "#5D45DB",
    fontSize: 16,
    textAlign: "left",
    marginTop: 16,
    fontFamily: "Mulish, sans-serif",
  },
});

export default FirstPageCaregiver;
