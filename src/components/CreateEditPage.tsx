import React, {Component} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

interface Props {
  loading: boolean;
}

class CreateEditPage extends Component<Props> {
  render() {
    return (
      <View>
        <ScrollView>
          {this.props.loading && (
            <View style={styles.preloaderContainer}>
              <Image
                style={styles.preloader}
                source={{
                  uri:
                    'https://bontelstore.ru/images/blue-loading-gif-transparent-9.gif',
                }}
              />
            </View>
          )}
          <Image
            style={styles.avatar}
            source={{
              uri:
                'https://99px.ru/sstorage/86/2017/01/image_861701171351153465139.gif',
            }}
          />
          <View style={styles.userDataContainer}>
            <Text style={styles.text}>Name:</Text>
            <TextInput style={styles.userCreateInput} />
            <Text style={styles.text}>Surname:</Text>
            <TextInput style={styles.userCreateInput} />
            <Text style={styles.text}>Phone:</Text>
            <TextInput style={styles.userCreateInput} />
            <Text style={styles.text}>Email:</Text>
            <TextInput style={styles.userCreateInput} />
          </View>
          <TouchableOpacity onPress={() => Alert.alert('save')}>
            <View style={styles.btnCreateContainer}>
              <Text style={styles.btnText}>Save</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {selectedUser: state.selectedUser, loading: state.loading};
};

export default connect(mapStateToProps)(CreateEditPage);

const styles = StyleSheet.create({
  preloaderContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '60%',
  },
  preloader: {
    width: 200,
    height: 200,
  },
  userCreateContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
  },
  avatar: {
    height: 350,
    width: 412,

    borderRadius: 20,
    borderColor: '#c6c6c6',
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
    paddingRight: 10,
  },
  userCreateInput: {
    paddingRight: 0,
    paddingLeft: 5,
    paddingBottom: 3,
    paddingTop: 3,

    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#c6c6c6',
  },
  btnCreateContainer: {
    marginTop: 10,
    width: 'auto',
    height: 50,
    backgroundColor: '#1894f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
