import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

import User from './User';

export default class UserList extends Component<Props> {
  render() {
    return (
      <View>
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

// const mapStateToProps = (state) => {
//   return {users: state.users, loading: state.app.loading};
// };
//
// export default connect(mapStateToProps)(UserList);

const styles = StyleSheet.create({
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
