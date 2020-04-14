import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';

export default class Welcome extends Component {
  state = {};

  render() {
    return (
      <View style={styles.aboutContainer}>
        <Text style={styles.mainText}>About Developer: Vitaly Lazarenko</Text>
        <Text style={styles.sectionDescription}>
          Welcome to the task for ASFERRO
        </Text>
        <View style={styles.btnContainer}>
          <Button
            title="Run App"
            onPress={() => {
              Alert.alert('1');
              // this.props.navigation.navigate('UserList');
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 24,
    fontWeight: '600',
  },
  aboutContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  btnContainer: {
    marginTop: 15,
  },
  sectionDescription: {},
});
