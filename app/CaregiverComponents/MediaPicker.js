import * as React from "react";
import {
  View,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  Text,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MediaPicker() {
  const [images, setImages] = React.useState([]);
  const [videoUrl, setVideoUrl] = React.useState(null);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const pickImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      base64: false,
    });

    if (!result.canceled) {
      console.log(result.assets);
      const uris = result.assets.map((asset) => asset.uri);
      setImages(uris);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Button title="Pick Images" onPress={pickImages} /> */}
      <TouchableOpacity style={styles.iconButton} onPress={pickImages}>
        <Icon name="photo" size={80} color="#5D45DB" />
      </TouchableOpacity>
      <Text style={styles.label1}>SELECT PHOTOS</Text>
      <View style={styles.container}>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          >
            <Text style={styles.buttonText}>
              {status.isPlaying ? "Pause" : "Create Collage"}
            </Text>
          </TouchableOpacity>
        </View>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://shotstack-api-stage-output.s3-ap-southeast-2.amazonaws.com/m779eqhccz/284594ec-aa8a-4b20-b00d-3a385c344745.mp4",
          }}
          useNativeControls="false"
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  label1: {
    fontFamily: "Gelion",
    fontWeight: "700",
    color: "#5D45DB",
    fontSize: 25,
  },
  iconButton: {
    marginTop: 60,
    marginBottom: 30,
  },
  video: {
    alignSelf: "center",
    width: 380,
    height: 250,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    backgroundColor: "#5D45DB", // Customize the color here
    padding: 15,
    borderRadius: 20, // Customize the radius here
    alignItems: "center",
    marginVertical: 10,
  },
  button2: {
    backgroundColor: "#5D45DB", // Customize the color here
    padding: 15,
    borderRadius: 20, // Customize the radius here
    alignItems: "center",
    marginVertical: 10,
    // width: "50%",
  },
  buttonText: {
    color: "white", // Customize the font color here
    fontWeight: "bold",
    fontFamily: "Gelion",
  },
  buttonText2: {
    color: "white", // Customize the font color here
    fontWeight: "bold",
    fontFamily: "Gelion",
  },
});
