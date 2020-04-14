import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, Button, Alert} from 'react-native';

export default class User extends Component {
  render() {
    return (
      <View style={styles.userContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://99px.ru/sstorage/86/2017/01/image_861701171351153465139.gif',
          }}
        />
        <View style={styles.userDataContainer}>
          <Text style={styles.userName}>Name: Vasya</Text>
          <Text>Sur name: Kuznec</Text>
          <Text>Phone: 0660183774</Text>
          <Text>Email: slkdnasjd@gmail.com</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button title={'remove'} onPress={() => Alert.alert('remove')} />
          <Button title={'edit'} onPress={() => Alert.alert('edit')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    margin: 3,

    backgroundColor: 'rgba(238,238,238,0.53)',
    borderRadius: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 20,
    borderColor: '#583eea',
    borderWidth: 1,
  },
  userDataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
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
