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

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  loading: boolean;
}

import User from './User';

class UserList extends Component<Props> {
  render() {
    return (
      <View>
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
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Create Page');
          }}>
          <View style={styles.userHeader}>
            <Text style={styles.textHeader}>Create New User</Text>
          </View>
        </TouchableOpacity>

        <SafeAreaView>
          <ScrollView style={styles.scrollView}>
            <View style={styles.userList}>
              <User navigation={this.props.navigation} />
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
  userList: {},
});
