import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TotalCount = ({counters}) => {
  const totalCount = counters
    ? counters.reduce((total, counter) => {
        return (total += counter.count);
      })
    : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.totalText}>Total: {totalCount}</Text>
    </View>
  );
};

export default TotalCount;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  totalText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
