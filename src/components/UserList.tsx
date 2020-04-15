import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

import User from './User';
import {getUsersThunk} from '../store/thunks';
import {IUser} from '../interfaces';
import store from '../store';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  loading: boolean;
  users: IUser[];
}

class UserList extends Component<Props> {
  componentDidMount(): void {
    store.dispatch(getUsersThunk());
  }

  render() {
    return (
      <View>
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
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Create Page', {mode: 'create'});
          }}>
          <View style={styles.userHeader}>
            <Text style={styles.textHeader}>Create New User</Text>
          </View>
        </TouchableOpacity>

        <SafeAreaView>
          <ScrollView style={styles.scrollView}>
            <View>
              {this.props.users &&
                this.props.users.map((x: IUser) => (
                  <User
                    key={x.id}
                    navigation={this.props.navigation}
                    userData={x}
                  />
                ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {users: state.users, loading: state.loading};
};

export default connect(mapStateToProps)(UserList);

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
  scrollView: {
    height: '94%',
    backgroundColor: '#fff',
  },
  userHeader: {
    width: 'auto',
    height: 50,
    backgroundColor: '#1894f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
