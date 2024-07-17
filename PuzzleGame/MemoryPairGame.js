import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
const randomArrFunction = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
const gameCardsFunction = () => {
  const icons = [
    "paw",
    "paw",
    "heart",
    "heart",
    "tree",
    "tree",
    "star",
    "star",
    "bell",
    "bell",
    "gift",
    "gift",
  ];
  const randomIcons = randomArrFunction(icons);
  return randomIcons.map((icon, index) => ({
    id: index,
    symbol: icon,
    isFlipped: false,
  }));
};
const MemoryPairGame = () => {
  const [cards, setCards] = useState(gameCardsFunction());
  const [selectedCards, setSelectedCards] = useState([]);
  const [matches, setMatches] = useState(0);
  const [winMessage, setWinMessage] = useState(new Animated.Value(0));
  const [gameWon, setGameWon] = useState(false);
  const cardClickFunction = (card) => {
    if (!gameWon && selectedCards.length < 2 && !card.isFlipped) {
      const updatedSelectedCards = [...selectedCards, card];
      const updatedCards = cards.map((c) =>
        c.id === card.id ? { ...c, isFlipped: true } : c
      );
      setSelectedCards(updatedSelectedCards);
      setCards(updatedCards);
      if (updatedSelectedCards.length === 2) {
        if (updatedSelectedCards[0].symbol === updatedSelectedCards[1].symbol) {
          setMatches(matches + 1);
          setSelectedCards([]);
          if (matches + 1 === cards.length / 2) {
            geekWinGameFunction();
            setGameWon(true);
          }
        } else {
          setTimeout(() => {
            const flippedCards = updatedCards.map((c) =>
              updatedSelectedCards.some((s) => s.id === c.id)
                ? { ...c, isFlipped: false }
                : c
            );
            setSelectedCards([]);
            setCards(flippedCards);
          }, 1000);
        }
      }
    }
  };
  const geekWinGameFunction = () => {
    Animated.timing(winMessage, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };
  useEffect(() => {
    if (matches === cards.length / 2) {
      geekWinGameFunction();
      setGameWon(true);
    }
  }, [matches]);
  const msg = `Matches: ${matches} /
			${cards.length / 2}`;
  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Memory Pair Game</Text>
      <Text style={styles.matchText}>{msg}</Text>
      {gameWon ? (
        <View style={styles.winMessage}>
          <View style={styles.winMessageContent}>
            <Text style={styles.winText}>Congratulations mate</Text>
            <Text style={styles.winText}>You Won!</Text>
          </View>
          <Button
            title="Restart"
            onPress={() => {
              setCards(gameCardsFunction());
              setSelectedCards([]);
              setMatches(0);
              setWinMessage(new Animated.Value(0));
              setGameWon(false);
            }}
          />
        </View>
      ) : (
        <LinearGradient
          colors={["#6190e8", "#ffffff", "#5D45DB"]}
          locations={[0, 0.6, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.linearGradient}
        >
          <View style={styles.grid}>
            {cards.map((card) => (
              <TouchableOpacity
                key={card.id}
                style={[styles.card, card.isFlipped && styles.cardFlipped]}
                onPress={() => cardClickFunction(card)}
              >
                {card.isFlipped ? (
                  <Icon name={card.symbol} size={40} style={styles.cardIcon} />
                ) : null}
              </TouchableOpacity>
            ))}
          </View>
        </LinearGradient>
      )}
      <View style={styles.fixToText}>
        <Icon.Button
          name="home"
          backgroundColor="#3b5998"
          onPress={() => Alert.alert("Home button pressed")}
        >
          Home
        </Icon.Button>
        <Icon.Button
          name="repeat"
          backgroundColor="#3b5998"
          onPress={() => {
            setCards(gameCardsFunction());
            setSelectedCards([]);
            setMatches(0);
            setWinMessage(new Animated.Value(0));
            setGameWon(false);
          }}
        >
          Restart
        </Icon.Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 500,
    width: 360,
  },
  header1: {
    fontSize: 36,
    marginBottom: 10,
    color: "green",
  },
  header2: {
    fontSize: 18,
    marginBottom: 20,
    color: "black",
    fontWeight: "bold",
  },
  matchText: {
    fontSize: 18,
    color: "black",
  },
  board: {
    borderRadius: 5,
    // box-shadow: 0 25px 50px rgb(33 33 33 / 25%);
    //  background: linear-gradient(135deg,  #6f00fc 0%,#fc7900 50%,#fcc700 100%);
    // transition: transform .6s cubic-bezier(0.4, 0.0, 0.2, 1);
    // backface-visibility: hidden;
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: 80,
    height: 80,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282A3A",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },

  cardFlipped: {
    backgroundColor: "white",
  },
  cardIcon: {
    color: "blue",
  },
  winMessage: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  winMessageContent: {
    backgroundColor: "rgba(255, 215, 0, 0.7)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  winText: {
    fontSize: 36,
    color: "white",
  },
  fixToText: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    display: "flex",
  },
  buttonStyle: {
    background: "#282A3A",
    color: "#282A3A",
    borderRadius: 5,
    border: 0,
    //cursor: pointer,
    fontSize: 18,
  },
});
export default MemoryPairGame;
