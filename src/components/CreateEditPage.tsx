import React, {Component} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import store from '../store';
import {createUserThunk, updateUserThunk} from '../store/thunks';
import {IUser} from '../interfaces';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  loading: boolean;
  route: any;
  selectedUser: IUser;
}

class CreateEditPage extends Component<Props> {
  state = {
    name: this.props.selectedUser.name,
    phone: this.props.selectedUser.phone,
    email: this.props.selectedUser.email,
    website: this.props.selectedUser.website,
    company: {
      name: this.props.selectedUser.company.name,
    },
  };

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
            <TextInput
              style={styles.userCreateInput}
              autoCompleteType={'name'}
              defaultValue={this.props.selectedUser.name || ''}
              onChangeText={(name) => {
                this.setState({name});
              }}
            />

            <Text style={styles.text}>Phone:</Text>
            <TextInput
              style={styles.userCreateInput}
              autoCompleteType={'tel'}
              defaultValue={this.props.selectedUser.phone || ''}
              onChangeText={(phone) => {
                this.setState({phone});
              }}
            />

            <Text style={styles.text}>Email:</Text>
            <TextInput
              style={styles.userCreateInput}
              autoCompleteType={'email'}
              defaultValue={this.props.selectedUser.email || ''}
              onChangeText={(email) => {
                this.setState({email});
              }}
            />

            <Text style={styles.text}>Website:</Text>
            <TextInput
              style={styles.userCreateInput}
              defaultValue={this.props.selectedUser.website || ''}
              onChangeText={(website) => {
                this.setState({website});
              }}
            />

            <Text style={styles.text}>Company:</Text>
            <TextInput
              style={styles.userCreateInput}
              defaultValue={this.props.selectedUser.company.name || ''}
              onChangeText={(companyName) => {
                this.setState({company: {name: companyName}});
              }}
            />
          </View>
          <TouchableOpacity onPress={() => this.onClickHandler()}>
            <View style={styles.btnCreateContainer}>
              <Text style={styles.btnText}>Save</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  onClickHandler() {
    const {mode} = this.props.route.params;
    if (mode === 'create') {
      store.dispatch(createUserThunk({...this.state}));
    }
    if (mode === 'edit') {
      store.dispatch(
        updateUserThunk(this.props.selectedUser.id || 0, {...this.state}),
      );
      this.props.navigation.navigate('User List');
      Alert.alert(JSON.stringify(this.state));
    }
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
