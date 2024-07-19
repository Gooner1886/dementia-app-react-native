import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";
import { useNavigation } from '@react-navigation/native';


// const windowWidth = Dimensions.get('window').width;

function LoginCaregiver() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require('./assets/login.png')}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Log in</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} secureTextEntry />
        </View>
        <Pressable style={styles.button} onPress={() => navigation.navigate('FirstPageCaregiver')}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <View style={styles.footer}>
          <Text style={styles.link}>Forgot password?</Text>
          <Text style={styles.text}>or continue with</Text>
          <Pressable style={styles.googleButton}>
            <Image
              source={require('./assets/google.png')}
              style={styles.googleImage}
            />
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
          </Pressable>
          <Text style={styles.text}>Need an account?</Text>
          <Text style={styles.link}>Sign up</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 2.7,
    marginBottom: 20,
  },
  content: {
    width: '80%', // Adjust the width as per your design needs
    maxWidth: 400, // Maximum width for larger screens
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#5D45DB",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#B5B5B5",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DCDCE8",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#FFF",
    marginBottom: 16,
    width: "100%",
  },
  button: {
    backgroundColor: "#5D45DB",
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 60,
    alignItems: "center",
    marginTop: 24,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "700",
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
  },
  link: {
    color: "#5D45DB",
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 10,
  },
  text: {
    color: "#B5B5B5",
    fontSize: 16,
    marginBottom: 10,
  },
  googleButton: {
    backgroundColor: "#F1F1F1",
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  googleImage: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  googleButtonText: {
    color: "#000",
    fontWeight: "500",
  },
});

export default LoginCaregiver;
