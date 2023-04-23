import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AnswerCard from "../components/AnswerCard";

const Answers = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AnswerCard />
    </SafeAreaView>
  );
};

export default Answers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
