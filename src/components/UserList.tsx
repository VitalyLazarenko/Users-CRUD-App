import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import User from './User';

export default class UserList extends Component {
  render() {
    return (
      <View>
        <View style={styles.userHeader}>
          <Text style={styles.textHeader}>Tool Bar</Text>
        </View>
        <SafeAreaView>
          <ScrollView style={styles.scrollView}>
            <View style={styles.userList}>
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    height: '94%',
    backgroundColor: '#fff',
  },
  userHeader: {
    width: 'auto',
    height: 50,
    backgroundColor: '#583eea',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    color: '#fff',
    fontWeight: 'bold',
  },
  userList: {},
});
