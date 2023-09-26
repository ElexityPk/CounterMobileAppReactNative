import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Counter from './Counter';

const CounterList = () => {
  const [counters, setCounters] = useState([]);

  const addCounter = title => {
    setCounters([...counters, {id: Date.now(), title, count: 0}]);
  };

  const deleteCounter = id => {
    setCounters(counters.filter(counter => counter.id !== id));
  };

  const incrementCounter = id => {
    setCounters(
      counters.map(counter =>
        counter.id === id ? {...counter, count: counter.count + 1} : counter,
      ),
    );
  };

  const decrementCounter = id => {
    setCounters(
      counters.map(counter =>
        counter.id === id && counter.count > 0
          ? {...counter, count: counter.count - 1}
          : counter,
      ),
    );
  };

  const total = counters.reduce((acc, counter) => acc + counter.count, 0);
  console.log(total);

  return (
    <View style={styles.container}>
      {counters.map(counter => (
        <Counter
          key={counter.id}
          title={counter.title}
          count={counter.count}
          onIncrement={() => incrementCounter(counter.id)}
          onDecrement={() => decrementCounter(counter.id)}
          onDelete={() => deleteCounter(counter.id)}
        />
      ))}
      <Text style={styles.total}>Total: {total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CounterList;
