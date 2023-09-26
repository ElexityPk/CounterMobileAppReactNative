import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import Counter from './src/Counter';
import Header from './src/Header';

export default function App() {
  const [newCounterTitle, setNewCounterTitle] = useState('');
  const [counters, setCounters] = useState([]);
  // const [dataFromChild, setDataFromChild] = useState([]);

  // const handleDataFromChild = data => {
  //   setDataFromChild([...dataFromChild, data]);
  // };

  const addCounter = title => {
    const newCounter = {id: Date.now(), title: title, count: 0};
    setCounters([...counters, newCounter]);
    setNewCounterTitle('');
  };
  const total = counters.reduce((acc, counter) => acc + counter.count, 0);

  const handleIncrementCount = id => {
    const updatedCountersArr = counters.map(data => {
      if (data.id === id) {
        return {...data, count: data.count + 1};
      } else {
        return data;
      }
    });
    setCounters(updatedCountersArr);
  };

  const handleDecrementCount = id => {
    const updatedCountersArr = counters.map(data => {
      if (data.id === id) {
        return {...data, count: data.count - 1};
      } else {
        return data;
      }
    });
    setCounters(updatedCountersArr);
  };
  console.log(counters);
  // console.log(dataFromChild);

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <Header />
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.container}>
          <Text style={styles.total}>Total: {total}</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter item name"
            value={newCounterTitle}
            onChangeText={text => setNewCounterTitle(text)}
          />
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => addCounter(newCounterTitle)}>
            <Text style={styles.BtnTxt}>Add Counter</Text>
          </TouchableOpacity>
        </View>
        <View>
          {counters.map(counter => (
            <Counter
              key={counter.id}
              title={counter.title}
              id={counter.id}
              onDelete={id => setCounters(counters.filter(c => c.id !== id))}
              // sendDataToParentu={handleDataFromChild}
              counterIncr={handleIncrementCount}
              counterDecr={handleDecrementCount}
            />
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#F5F5F5',
    margin: 5,
  },
  input: {
    flex: 1,
    alignItems: 'flex-start',
    marginRight: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#333',
    backgroundColor: '#FFF',
  },
  addBtn: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#2F58CD',
    borderRadius: 4,
    alignItems: 'center',
  },
  BtnTxt: {
    color: '#fff',
    alignItems: 'center',
    fontSize: 18,
  },

  appContainer: {},
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
