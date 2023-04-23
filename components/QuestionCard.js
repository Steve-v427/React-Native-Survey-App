import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  store,
} from "react-native";
import React from "react";

// Import react native checkbox package
import Checkbox from "expo-checkbox";

//redux hook import to call dispatch to execute the reducers
import { useDispatch } from "react-redux";

// import all the reducers from question slice
import {
  setRatingOptionHorrible,
  setRatingOptionNSatisfied,
  setRatingOptionSatisfied,
  setRatingOptionExcellent,
  setServiceOptionLandscaping,
  setServiceOptionConcrete,
  setServiceOptionPavers,
  setServiceOptionDesign,
  setOptionalTextInput,
} from "../Slices/questionSlice";

//import all the selectors from question slice
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

//import for navigation
import { useNavigation } from "@react-navigation/native";

const QuestionCard = () => {
  const dispatch = useDispatch();
  const RatingOptionHorrible = useSelector(selectRatingOptionHorrible);
  const RatingOptionNSatisfied = useSelector(selectRatingOptionNSatisfied);
  const RatingOptionSatisfied = useSelector(selectRatingOptionSatisfied);
  const RatingOptionExcellent = useSelector(selectRatingOptionExcellent);
  const ServiceOptionLandscaping = useSelector(selectServiceOptionLandscaping);
  const ServiceOptionConcrete = useSelector(selectServiceOptionConcrete);
  const ServiceOptionPavers = useSelector(selectServiceOptionPavers);
  const ServiceOptionDesign = useSelector(selectServiceOptionDesign);
  const OptionalTextInput = useSelector(selectOptionalTextInput);

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.questionWrapper}>
        <Text style={{ fontSize: 24, paddingBottom: 15 }}>
          Welcome, Valued Customer!
        </Text>

        <View>
          <Text style={styles.questionText}>
            How would you rate your Customer Experience?
          </Text>

          <View style={styles.questionOptions}>
            <Checkbox
              disabled={false}
              value={RatingOptionHorrible}
              onValueChange={(newValue) => {
                dispatch(setRatingOptionHorrible(newValue));
              }}
            />
            <Text>Horrible</Text>

            <View style={styles.questionOptions}>
              <Checkbox
                disabled={false}
                value={RatingOptionNSatisfied}
                onValueChange={(newValue) => {
                  dispatch(setRatingOptionNSatisfied(newValue));
                }}
              />
              <Text>Not Satisfied</Text>
            </View>

            <View style={styles.questionOptions}>
              <Checkbox
                disabled={false}
                value={RatingOptionSatisfied}
                onValueChange={(newValue) => {
                  dispatch(setRatingOptionSatisfied(newValue));
                }}
              />
              <Text>Satisfied</Text>
            </View>

            <View style={styles.questionOptions}>
              <Checkbox
                disabled={false}
                value={RatingOptionExcellent}
                onValueChange={(newValue) => {
                  dispatch(setRatingOptionExcellent(newValue));
                }}
              />
              <Text>Excellent</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.questionText}>
            Choose all the Job types that apply:
          </Text>

          <View style={styles.questionOptions}>
            <Checkbox
              disabled={false}
              value={ServiceOptionLandscaping}
              onValueChange={(newValue) => {
                dispatch(setServiceOptionLandscaping(newValue));
              }}
            />
            <Text>Landscaping</Text>
          </View>

          <View style={styles.questionOptions}>
            <Checkbox
              disabled={false}
              value={ServiceOptionConcrete}
              onValueChange={(newValue) => {
                dispatch(setServiceOptionConcrete(newValue));
              }}
            />
            <Text>Concrete</Text>
          </View>

          <View style={styles.questionOptions}>
            <Checkbox
              disabled={false}
              value={ServiceOptionPavers}
              onValueChange={(newValue) => {
                dispatch(setServiceOptionPavers(newValue));
              }}
            />
            <Text>Pavers</Text>
          </View>

          <View style={styles.questionOptions}>
            <Checkbox
              disabled={false}
              value={ServiceOptionDesign}
              onValueChange={(newValue) => {
                dispatch(setServiceOptionDesign(newValue));
              }}
            />
            <Text>Design</Text>
          </View>
        </View>

        <View style={styles.textInput}>
          <TextInput
            value={OptionalTextInput}
            placeholder="Tell us about your experience "
            onChangeText={(text) => {
              dispatch(setOptionalTextInput(text));
            }}
          />
        </View>

        <Button
          style={styles.answerbutton}
          title="Submit"
          color="#7B68EE"
          onPress={() => navigation.navigate("AnswerScreen")}
        />
      </View>
    </SafeAreaView>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  questionWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  questionText: {
    fontSize: 15,
    paddingRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  questionOptions: {
    flexDirection: "column",
    gap: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 8,
  },
  answerbutton: {
    flexDirection: "row",
    padding: 15,
    gap: 5,
    fontSize: 24,
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 5,
    padding: 10,
  },
});
