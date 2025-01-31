import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Pressable
} from "react-native";
import { useNavigation } from '@react-navigation/native';


function LoginPatient() {
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
          <Text style={styles.label}>Phone Number</Text>
          <TextInput style={styles.input} keyboardType="phone-pad" />
          <Text style={styles.label}>Enter OTP</Text>
          <TextInput style={styles.input} keyboardType="number-pad" secureTextEntry />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => navigation.navigate('FirstPage')}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
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
    aspectRatio: 2,
    marginBottom: 20,
    marginTop: -270
  },
  content: {
    width: '80%', // Adjust width as per your design needs
    maxWidth: 400, // Maximum width for larger screens
    alignItems: "center",
    fontFamily: 'Gelion'
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#5D45DB",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: 'Gelion'
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#B5B5B5",
    marginBottom: 8,
    fontFamily: 'Gelion'
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
  buttonContainer: {
    alignItems: "center",
    marginTop: 24,
  },
  button: {
    backgroundColor: "#5D45DB",
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 60,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    fontFamily: 'Gelion'
  },
});

export default LoginPatient;
