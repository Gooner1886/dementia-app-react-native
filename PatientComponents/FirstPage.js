import * as React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";

function FirstPage() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.row1}>
          <Image
            resizeMode="contain"
            source={{
              uri:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/960648d5d882e437ca59f98ea36ff6194169a3e18d689a1f03c6029a310abdaa?apiKey=12fbf716322d41b9b96b841cf19d799b&",
            }}
            style={styles.image1}
          />
          <Image
            resizeMode="contain"
            source={{
              uri:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/81bb5f6d512ac51fc5ffce0d23e62c8ecab20f6bfd25f18f3b027454daa2c50b?apiKey=12fbf716322d41b9b96b841cf19d799b&",
            }}
            style={styles.image2}
          />
        </View>
        <View style={styles.row2}>
          {/* <Image
            resizeMode="contain"
            source={{
              uri:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/da60e6448b35cf0b08515911e92df6d947bbc950b16a2894004ab52990a603c6?apiKey=12fbf716322d41b9b96b841cf19d799b&",
            }}
            style={styles.image3}
          /> */}
          {/* <View style={styles.column}>
            <Text style={styles.logo}>
              neuro<Text style={styles.bold}>nest</Text>
            </Text>
            <Image
              resizeMode="contain"
              source={{
                uri:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/2254b99443441f3a222958f5c552b1fc69d37bd74e8857d1548fdfe05c863979?apiKey=12fbf716322d41b9b96b841cf19d799b&",
              }}
              style={styles.image4}
            />
          </View> */}
        </View>
        <Text style={styles.greeting}>
          <Text style={styles.bold}>Good morning,</Text>
          {"\n"}
          <Text style={styles.bold}>Ruth</Text>
        </Text>
        <Image
          resizeMode="contain"
          source={{
            uri:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/989244dd22d3e2c02298623ed6d057080c307886f296d182b60446f3052d69c8?apiKey=12fbf716322d41b9b96b841cf19d799b&",
          }}
          style={styles.image5}
        />
        <View style={styles.row3}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Self Diagnostics</Text>
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Take the test</Text>
              <Image
                resizeMode="contain"
                source={{
                  uri:
                    "https://cdn.builder.io/api/v1/image/assets/TEMP/7356b63c2c350ad57987ce7e79241c155c5f9a50acfd4ff3cd1ddc7f5327cd74?apiKey=12fbf716322d41b9b96b841cf19d799b&",
                }}
                style={styles.image6}
              />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Manage Appointments</Text>
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>View and book</Text>
              <Image
                resizeMode="contain"
                source={{
                  uri:
                    "https://cdn.builder.io/api/v1/image/assets/TEMP/9a7472876fa78194070934767bf6d4146df6e66ca11e21b8f7d170c2349399c2?apiKey=12fbf716322d41b9b96b841cf19d799b&",
                }}
                style={styles.image7}
              />
            </View>
          </View>
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
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 16,
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 355,
    width: "100%",
    paddingHorizontal: 16,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 355,
    width: "100%",
    paddingHorizontal: 16,
  },
  row3: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 355,
    width: "100%",
    // paddingHorizontal: 16,
    marginTop: 22,
    fontFamily: "Gelion, sans-serif"

  },
  image1: {
    width: 60,
    height: 40,
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
    fontSize: 24,
    lineHeight: 50,
    textAlign: "left",
    padding: 20,
    fontFamily: "Gelion, sans-serif",
    fontSize: "xxx-large"
  },
  image5: {
    width: "100%",
    maxWidth: 317,
    height: 150,
    marginTop: 39,
  },
  card: {
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "rgba(93, 69, 219, 1)",
    backgroundColor: "#F7F7F7",
    width: "48%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cardTitle: {
    color: "#5D45DB",
    fontSize: 16,
    fontFamily: "Mulish, sans-serif",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  cardText: {
    color: "#5D45DB",
    fontSize: 12,
    fontFamily: "Mulish, sans-serif",
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
    fontFamily: "Mulish, sans-serif",
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
    fontFamily: "Mulish, sans-serif",
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
    fontFamily: "Mulish, sans-serif",
  },
  description: {
    color: "#5D45DB",
    fontSize: 12,
    textAlign: "left",
    marginTop: 16,
    maxWidth: 440,
    width: "100%",
    paddingHorizontal: 20,
    fontFamily: "Mulish, sans-serif",
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
    fontFamily: "Mulish, sans-serif",
  },
  sos: {
    color: "#5D45DB",
    fontSize: 16,
    textAlign: "left",
    marginTop: 16,
    fontFamily: "Mulish, sans-serif",
  },
});

export default FirstPage;
