import { SafeAreaView, Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {
  const gradePoints = { 'F': 0, 'D': 1.5, 'C': 2, 'C+': 2.75, 'B': 3, 'B+': 3.5, 'A': 4 };

  const [sswd, setSswd] = useState('D');
  const [ob, setOb] = useState('D');

  var gpa = 0;
  var credits = 5;
  var totalPossibleCredits = 10;
  var totalGradeScores = 0;

  function clickMe() {
    alert("this is the click me button"); //alert for web
    Alert.alert("this is the click me button"); //alert for phone

    totalGradeScores = gradePoints[sswd] * credits + gradePoints[ob] * credits;
    gpa = totalGradeScores / totalPossibleCredits;
    alert("Your GPA is " + gpa);
  }

  const styles = StyleSheet.create({
    container: {
      padding: '5%',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: '2%',
      marginRight: '2%',
      padding: '2%',
    },
    label: {
      flex: 2,
    },
    textInput: {
      flex: 1,
      borderWidth: 1,
      padding: '2%',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 24,
          textAlign: 'center',
          marginTop: '10%',
        }}>
          GPA Calculator
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Maths</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Grade"
          onChangeText={setSswd}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Organisational Behaviour</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Grade"
          onChangeText={setOb}
        />
      </View>

      <View style={styles.row}>
        <Button title="submit" onPress={clickMe} />
      </View>
    </SafeAreaView>
  );
}