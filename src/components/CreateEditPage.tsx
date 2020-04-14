import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TextInput,
  Alert,
} from 'react-native';

export default class CreateEditPage extends Component {
  render() {
    return (
      <View style={styles.userCreateContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://99px.ru/sstorage/86/2017/01/image_861701171351153465139.gif',
          }}
        />
        <View style={styles.userDataContainer}>
          <Text style={styles.text}>Name:</Text>
          <TextInput style={styles.userCreateInput}>Vasya</TextInput>
          <Text style={styles.text}>Surname:</Text>
          <TextInput style={styles.userCreateInput}>Kuznec</TextInput>
          <Text style={styles.text}>Phone:</Text>
          <TextInput style={styles.userCreateInput}>0660183774</TextInput>
          <Text style={styles.text}>Email:</Text>
          <TextInput style={styles.userCreateInput}>
            slkdnasjd@gmail.com
          </TextInput>
        </View>
        <View style={styles.btnCreateContainer}>
          <Button title={'Save'} onPress={() => Alert.alert('save')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userCreateContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  avatar: {
    height: '50%',
    width: '95%',

    margin: 10,

    borderRadius: 20,
    borderColor: '#583eea',
    borderWidth: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 1,
    paddingTop: 6,
  },
  userDataContainer: {
    paddingLeft: 10,
  },
  userCreateInput: {
    paddingRight: 0,
    paddingLeft: 5,
    paddingBottom: 3,
    paddingTop: 3,

    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#583eea',
  },
  btnCreateContainer: {},
});
