import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

export default class Welcome extends Component<Props> {
  state = {};

  render() {
    return (
      <View style={styles.aboutContainer}>
        <Text style={styles.mainText}>About Developer: Vitalii Lazarenko</Text>
        <Text style={styles.sectionDescription}>
          Welcome to the task for ASFERRO
        </Text>
        <View style={styles.btnContainer}>
          <Button
            title="Run App"
            onPress={() => {
              this.props.navigation.navigate('User List');
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
