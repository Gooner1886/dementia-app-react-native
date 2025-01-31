import * as React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';

function ChooseRole() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          <Text style={styles.fontMedium}>Choose your </Text>
          <Text style={styles.fontBold}>role</Text>
        </Text>
      </View>
      <View style={styles.content}>
        <Image
          source={require('./assets/landing_role.png')}
          style={styles.image}
        />
       <Pressable style={styles.button} onPress={() => navigation.navigate('LoginCaregiver')}>
          <Text style={styles.buttonText}>Caregiver</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('LoginPatient')}>
          <Text style={styles.buttonText}>Patient</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    marginHorizontal: "auto",
    width: "100%",
    maxWidth: 480,
    backgroundColor: "#5D45DB",
    alignItems: "center",
  },
  header: {
    marginLeft: 16,
    width: 289,
  },
  headerText: {
    fontSize: 36,
    fontWeight: "600",
    lineHeight: 64,
    color: "#FFF",
  },
  fontMedium: {
    fontFamily: 'Gelion',
    fontWeight: "400",
  },
  fontBold: {
    fontFamily: 'Gelion',
    fontWeight: "700",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 20,
    marginTop: 44,
    width: "100%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 29,
    borderTopRightRadius: 29,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 0,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 20,
    width: "90%",
    maxWidth: 344,
    backgroundColor: "#5D45DB",
    borderRadius: 50,
  },
  buttonText: {
    fontFamily: 'Gelion',
    fontSize: 20,
    fontWeight: "700",
    color: "#FFF",
    textAlign: "center",
  },
});

export default ChooseRole;
