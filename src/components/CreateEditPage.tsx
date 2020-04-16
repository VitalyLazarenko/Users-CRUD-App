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
    name:
      this.props.route.params.mode === 'edit'
        ? this.props.selectedUser.name
        : '',
    phone:
      this.props.route.params.mode === 'edit'
        ? this.props.selectedUser.phone
        : '',
    email:
      this.props.route.params.mode === 'edit'
        ? this.props.selectedUser.email
        : '',
    website:
      this.props.route.params.mode === 'edit'
        ? this.props.selectedUser.website
        : '',
    company: {
      name:
        this.props.route.params.mode === 'edit'
          ? this.props.selectedUser.company.name
          : '',
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
                    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/09b24e31234507.564a1d23c07b4.gif',
                }}
              />
            </View>
          )}
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={{
                uri:
                  'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png',
              }}
            />
          </View>
          <View style={styles.userDataContainer}>
            <Text style={styles.text}>Name:</Text>
            <TextInput
              style={styles.userCreateInput}
              autoCompleteType={'name'}
              defaultValue={this.state.name}
              onChangeText={(name: string) => {
                this.setState({name});
              }}
            />

            <Text style={styles.text}>Phone:</Text>
            <TextInput
              style={styles.userCreateInput}
              autoCompleteType={'tel'}
              defaultValue={this.state.phone}
              onChangeText={(phone: string) => {
                this.setState({phone});
              }}
            />

            <Text style={styles.text}>Email:</Text>
            <TextInput
              style={styles.userCreateInput}
              autoCompleteType={'email'}
              defaultValue={this.state.email}
              onChangeText={(email: string) => {
                this.setState({email});
              }}
            />

            <Text style={styles.text}>Website:</Text>
            <TextInput
              style={styles.userCreateInput}
              defaultValue={this.state.website}
              onChangeText={(website: string) => {
                this.setState({website});
              }}
            />

            <Text style={styles.text}>Company:</Text>
            <TextInput
              style={styles.userCreateInput}
              defaultValue={this.state.company.name}
              onChangeText={(companyName: string) => {
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

  validator(state: any) {
    if (state.name === '' || +state.name.length > +120) {
      return {valid: false, error: 'Name is not validate!'};
    }

    if (state.phone === '' || +state.phone.length > +30) {
      return {valid: false, error: 'Phone is not validate!'};
    }

    if (state.email === '' || +state.email.length > +60) {
      return {valid: false, error: 'Email is not validate!'};
    }
    if (state.website === '' || +state.website.length > +60) {
      return {valid: false, error: 'Website is not validate!'};
    }

    if (state.company.name === '' || +state.company.name.length > +60) {
      return {valid: false, error: 'Company is not validate!'};
    }

    return {valid: true, error: ''};
  }

  onClickHandler() {
    const validate = this.validator(this.state);

    if (validate.valid) {
      const {mode} = this.props.route.params;
      if (mode === 'create') {
        store.dispatch(createUserThunk({...this.state}));
        this.props.navigation.navigate('User List');
      }
      if (mode === 'edit') {
        store.dispatch(
          updateUserThunk(this.props.selectedUser.id || 0, {...this.state}),
        );
        this.props.navigation.navigate('User List');
      }
    } else {
      Alert.alert(validate.error);
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
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 300,
    width: 250,

    borderRadius: 20,
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
