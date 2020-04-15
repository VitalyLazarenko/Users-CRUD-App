import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, Button} from 'react-native';

import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {IUser} from '../interfaces';
import {removeUserThunk} from '../store/thunks';
import store from '../store';
import {ActionCreators} from '../store/actions';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  userData: IUser;
}

export default class User extends Component<Props> {
  render() {
    return (
      <View style={styles.userContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png',
          }}
        />
        <View style={styles.userDataContainer}>
          <Text style={styles.userBoldText}>{this.props.userData.name}</Text>
          <Text>{this.props.userData.phone}</Text>
          <Text>{this.props.userData.email}</Text>
          <Text>{this.props.userData.website}</Text>
          <Text style={styles.userBoldText}>{this.props.userData.company.name}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            title={'remove'}
            onPress={() =>
              store.dispatch(removeUserThunk(this.props.userData.id || 0))
            }
          />
          <Button
            title={'edit'}
            onPress={() => {
              store.dispatch(
                ActionCreators.selectUserActionCreator(
                  this.props.userData.id || 0,
                ),
              );
              this.props.navigation.navigate('Edit Page', {mode: 'edit'});
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userContainer: {
    height: 120,

    flexDirection: 'row',
    justifyContent: 'space-between',

    margin: 3,

    backgroundColor: 'rgba(238,238,238,0.53)',
    borderRadius: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 20,
  },
  userDataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userBoldText: {
    padding: 5,

    color: '#696969',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userData: {
    color: '#696969',
    fontSize: 18,
  },
  btnContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});
