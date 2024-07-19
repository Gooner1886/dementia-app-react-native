import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import "deep-chat";

function DementiaBot() {
  const navigation = useNavigation();
  const [showChat, setShowChat] = useState(false);
  const initialMessages = [
    { role: "user", text: "Hey, how are you today?" },
    { role: "ai", text: "I am doing very well!" },
  ];
  const chatElementRef = useRef(null);

  useEffect(() => {
    if (chatElementRef.current) {
      chatElementRef.current.messageStyles = {
        html: {
          shared: {
            bubble: {
              backgroundColor: "unset",
              padding: "0px",
              width: "100%",
              textAlign: "right",
            },
          },
        },
      };
      chatElementRef.current.submitButtonStyles = {
        disabled: { container: { default: { opacity: 0, cursor: "auto" } } },
      };
      chatElementRef.current.onNewMessage = ({ message, isInitial }) => {
        if (!isInitial && message.role === "ai") {
          console.log("in ref : ", isInitial, message);
          // chatElementRef.current.responseInterceptor = (message) => {
          //   return message;
          // };
          // chatElementRef.current.responseInterceptor = () => {
          //   return { role: "ai", text: "feedback" };
          // };
          chatElementRef.current._addMessage({
            text: "Feedback dummy text",
            role: "ai",
          });
          chatElementRef.current._addMessage({
            role: "user",
            html: `
            <div class="deep-chat-temporary-message">
              <button class="deep-chat-button deep-chat-suggestion-button" style="border: 1px solid green">Yes</button>
              <button class="deep-chat-button deep-chat-suggestion-button" style="border: 1px solid #d80000">No</button>
            </div>`,
          });
        }
      };

      chatElementRef.current.responseInterceptor = (a) => {
        return a[0];
      };
    }
  }, []);

  return (
    <View style={styles.content}>
      <deep-chat
        style={styles.chat}
        messageStyles='{
        "user": {
          "shared": {
            "bubble": {
              "color": "#fff",
              "backgroundColor" : "#5d45db",
              "marginLeft" : 0,
              "marginRight" : auto
            }
          }
        }'
        introMessage='{"text": "Hi I am demdoc your Dementia Document Assistant, ask me anything!"}'
        connect='{"url": "http://127.0.0.1:5000/api/leaflet-chat", "method":"POST"}'
        speechToText='{"webSpeech": true,"translations": {"hello": "goodbye", "Hello": "Goodbye"},"commands": {"resume": "resume", "settings": {"commandMode": "hello"}},"button": {"position": "outside-left"}}'
      ></deep-chat>
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
    fontFamily: "Gelion, sans-serif",
    fontWeight: "400",
  },
  fontBold: {
    fontFamily: "Gelion, sans-serif",
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
    fontFamily: "Gelion, sans-serif",
    fontSize: 20,
    fontWeight: "700",
    color: "#FFF",
    textAlign: "center",
  },
  chat: {
    height: "90%",
    border: "1px solid #5d45db",
    fontFamily: "Gelion, sans-serif",
  },
});

export default DementiaBot;
