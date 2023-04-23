import { StyleSheet, Text, View } from "react-native";
import React from "react";

//imports for selectors
import { useSelector } from "react-redux";
import {
  selectRatingOptionHorrible,
  selectRatingOptionNSatisfied,
  selectRatingOptionSatisfied,
  selectRatingOptionExcellent,
  selectServiceOptionLandscaping,
  selectServiceOptionConcrete,
  selectServiceOptionPavers,
  selectServiceOptionDesign,
  selectOptionalTextInput,
} from "../Slices/questionSlice";

const AnswerCard = () => {
  const RatingOptionHorrible = useSelector(selectRatingOptionHorrible);
  const RatingOptionNSatisfied = useSelector(selectRatingOptionNSatisfied);
  const RatingOptionSatisfied = useSelector(selectRatingOptionSatisfied);
  const RatingOptionExcellent = useSelector(selectRatingOptionExcellent);
  const ServiceOptionLandscaping = useSelector(selectServiceOptionLandscaping);
  const ServiceOptionConcrete = useSelector(selectServiceOptionConcrete);
  const ServiceOptionPavers = useSelector(selectServiceOptionPavers);
  const ServiceOptionDesign = useSelector(selectServiceOptionDesign);
  const OptionalTextInput = useSelector(selectOptionalTextInput);
  return (
    <View>
      <Text style={styles.textcss}>
        Valued Customer, Your feedback was submitted:{" "}
      </Text>

      <View style={styles.sectionWrapper}>
        <Text style={styles.textcss}>Selected Company Rating: </Text>
        {RatingOptionHorrible && <Text style={styles.Anstxt}>Horrible</Text>}
        {RatingOptionNSatisfied && (
          <Text style={styles.Anstxt}>Not Satisfied</Text>
        )}
        {RatingOptionSatisfied && <Text style={styles.Anstxt}>Satisfied</Text>}
        {RatingOptionExcellent && <Text style={styles.Anstxt}>Excellent</Text>}
      </View>

      <View style={styles.sectionWrapper}>
        <Text style={styles.textcss}>Selected Services: </Text>
        {ServiceOptionLandscaping && (
          <Text style={styles.Anstxt}>Landscaping</Text>
        )}
        {ServiceOptionConcrete && <Text style={styles.Anstxt}>Concrete</Text>}
        {ServiceOptionPavers && <Text style={styles.Anstxt}>Pavers</Text>}
        {ServiceOptionDesign && <Text style={styles.Anstxt}>Design</Text>}
      </View>

      <View style={styles.sectionWrapper}>
        <Text style={styles.textcss}>Customer Feedback: </Text>
        {OptionalTextInput !== "" && (
          <Text style={styles.Anstxt}>{OptionalTextInput}</Text>
        )}
      </View>
    </View>
  );
};

export default AnswerCard;

const styles = StyleSheet.create({
  sectionWrapper: {
    margin: 5,
    padding: 10,
    alignItems: "center",
    gap: 20,
  },
  textcss: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
    margin: 5,
    padding: 10,
  },
  Anstxt: {
    fontSize: 20,
  },
});
