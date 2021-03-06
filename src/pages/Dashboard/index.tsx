/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  useNavigation,
  useIsFocused,
  useLinkProps,
} from '@react-navigation/native';
import AuthContext from '../../contexts/auth';
import * as auth from '../../services/auth';
import api from '../../services/api';
import Inputs from '../../component/Inputs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from '@react-native-community/blur';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-community/async-storage';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Keyboard,
  RefreshControl,
} from 'react-native';
import {
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native-gesture-handler';

interface types {
  id?: number;
  coment: string;
  title: string;
  like: string;
  posts: Object[];
  index: number;
  res: {
    id: number;
  };
  getFeeds(): Promise<string>;
}

const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const Dashboard: React.FC<types> = () => {
  const { signOut, getFeed } = useContext(AuthContext);
  const [refreshing, setRefreshing] = React.useState(false);
  const { coment, like, dislike, love } = useContext(AuthContext);
  const [value, onChangeText] = React.useState('');

  useEffect(() => {
    async function loader() {
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedToken) {
        getFeeds();
      } else {
        return;
      }
    }
    loader();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function signCheck() {
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedToken) {
        console.log('SIGNCHECK');
      } else {
        return;
      }
    }
    signCheck();
  });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  let itens: any[] = [];
  const [DATA, setDATA] = useState<any[]>();
  async function getFeeds() {
    api.get('/feeds').then((res) => {
      for (let feed of res.data) {
        itens.push({
          id: feed.id.toString(),
          title: (
            <Inputs
              id={feed.id}
              author={feed.author.username}
              content={feed.content}
              likes={feed.likes}
              dislikes={feed.deslikes}
              createdAt={feed.createdAt}
              updatedAt={feed.updatedAt}
              activeUserLikedIt={feed.activeUserLikedIt}
              activeUserLovedIt={feed.activeUserLovedIt}
            />
          ),
        });
      }
      setDATA(itens);
    });
  }

  // eslint-disable-next-line no-shadow
  async function send(value: string) {
    Keyboard.dismiss();
    getFeed(value);
    getFeeds();
    onChangeText('');
  }

  function handleSignOut() {
    signOut();
  }

  const Item = ({ title }) => (
    <View style={styles.title_mensage}>
      <Text style={styles.mensage}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.mainView}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Deixe um comentário!</Text>
        </View>
        <View style={styles.touchs}>
          <TouchableWithoutFeedback style={styles.touch}>
            <FlatList
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
            />
            <View style={styles.bottomView}>
              <View style={styles.txtInputView}>
                <TextInput
                  style={styles.txtInput}
                  editable={true}
                  focusable={true}
                  blurOnSubmit={true}
                  maxLength={150}
                  multiline={false}
                  onChangeText={(text) => onChangeText(text)}
                  value={value}
                  clearTextOnFocus={true}
                />
                <Icon
                  name="send-o"
                  size={24}
                  color="#999"
                  style={styles.send}
                  onPress={() => send(value)}
                />
              </View>
              <View style={styles.viewSair}>
                <Text style={styles.txtSair} onPress={() => handleSignOut()}>
                  Sair
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    height: '100%',
  },
  header: {
    height: 60,
    backgroundColor: '#B5D6B2',
    justifyContent: 'center',
    paddingTop: 5,
  },
  headerText: {
    flex: 1,
    height: 50,
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#7AE7C7',
    fontWeight: 'bold',
    borderColor: '#000',
    borderWidth: 3,
    fontSize: 25,
    marginStart: 10,
    marginEnd: 10,
    borderRadius: 17,
    color: '#000',
    elevation: 5,
  },
  mainView: {
    backgroundColor: '#eaeaea',
    width: '100%',
    height: '100%',
  },
  touchs: {
    width: '100%',
    height: '100%',
  },
  touch: {
    width: '100%',
    height: '100%',
    backgroundColor: '#B5D6B2',
    paddingTop: 15,
    paddingStart: 15,
    paddingEnd: 15,
    paddingBottom: 180,
  },
  viewSair: {
    width: '100%',
    height: '50%',
    backgroundColor: '#011B44',
  },
  txtSair: {
    width: '100%',
    height: '100%',
    color: '#fff',
    fontSize: 20,
    paddingStart: 20,
    paddingTop: 2,
    backgroundColor: '#011B44',
  },
  txtInput: {
    backgroundColor: 'rgba(255,255,255, 0.8)',
    marginTop: 10,
    width: '80%',
    marginStart: 17,
    height: '70%',
    borderRadius: 17,
    color: '#000',
  },
  bottomView: {
    width: '110%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
  },
  txtInputView: {
    flexDirection: 'row',
    backgroundColor: '#011B44',
    width: '100%',
    height: 75,
  },
  send: {
    width: '10%',
    height: '55%',
    marginStart: 10,
    marginTop: 15,
    paddingTop: 11,
    paddingStart: 8,
    borderColor: 'rgba(255,255,255, 0.8)',
    borderWidth: 2,
    borderRadius: 60,
  },
  mensage: {
    width: '100%',
  },
  title_mensage: {
    width: '100%',
  },
});

export default Dashboard;
