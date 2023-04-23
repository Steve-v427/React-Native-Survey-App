import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import QuestionCard from "../components/QuestionCard";

const Questions = () => {
  return (
    <SafeAreaView style={styles.container}>
      <QuestionCard />
    </SafeAreaView>
  );
};

export default Questions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    // padding: 10,
  },
});
