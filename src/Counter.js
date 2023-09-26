import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Counter = ({id, onDelete, counterIncr, title, counterDecr}) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const data = count;
    sendDataToParent(data);
  };

  const handleIncrement = () => {
    setCount(count + 1);

    counterIncr(id);
  };
  console.log(count);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      counterDecr(id);
    }
  };
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            style={styles.plusButton}
            title="+"
            onPress={handleIncrement}
            onClick={handleClick}
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.minusButton}
            title="-"
            onPress={handleDecrement}
            onClick={handleClick}
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.deleteButton}
            title="Delete"
            onPress={handleDelete}
          />
        </View>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    borderWidth: 1,
    color: '#fff',
    backgroundColor: '#19376D',
    padding: 10,
    textAlign: 'center',
    borderRadius: 8,
  },
  container: {
    backgroundColor: '#57C5B6',
    padding: 8,
    margin: '5%',
    width: '95%',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  count: {
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#576CBC',
    marginVertical: 10,
    borderRadius: 8,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  plusButton: {
    backgroundColor: '#3DDC84',
    color: '#fff',
  },
  minusButton: {
    backgroundColor: '#FF0000',
    color: '#fff',
  },
  deleteButton: {
    backgroundColor: '#FFD400',
    color: '#fff',
  },
});
