import React, { useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { SCREENS } from '../utils/routes';
import PersonCard from '../components/user/personCard';
import { defaultStyle } from '../styles/defaultStyle';
import { Colors } from '../theme/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/actions/usersActions';

const { USER, USERDETAIL } = SCREENS;

const User: React.FC = ({ navigation }) => {
  const { users, error, pending } = useSelector(state => state.users);
  const dispatch = useDispatch();

  {
    /*
 const getUsers = async () => {
   setPending(true);
    {
      /* try {
      const response = await axios.get(
        'https://randomuser.me/api/?&results=20',
      );
      console.log('✅', response.data.results);
      setUsers(response.data.results);
    } catch (error) {
      console.log(' Error', error.response);
      setError(error.response.data.error);
    } finally {
      setPending(false);
    }
  };
    }
    getRequest(USERS_URL, { results: 20 })
      .then(response => {
        console.log(response.data.results);
        setUsers(response.data.results);
      })
      .catch(error => {
        setError(error.response.data.error);
      })
      .finally(() => {
        setPending(false);
      });
};
   */
  }

  useEffect(() => {
    // getUsers();
    dispatch(getUsers({ results: 20,}));
  }, []);

  return (
    <SafeAreaView style={defaultStyle.safeContainer}>
      <View style={defaultStyle.container}>
        {pending ? (
          <ActivityIndicator size={'large'} color={Colors.DARKGREEN} />
        ) : (
          <FlatList
            ListEmptyComponent={
              error ? (
                <View style={styles.error}>
                  <Text style={styles.title}>ERROR</Text>
                  <Text style={styles.text}>{error}</Text>
                </View>
              ) : (
                <View style={styles.error}>
                  <Text style={styles.title}>UYARI</Text>
                  <Text style={styles.text}>Kullanıcı Bulunamadı 😒</Text>
                </View>
              )
            }
            contentContainerStyle={{ gap: 10 }}
            keyExtractor={(item, index) => index.toString()}
            data={users}
            renderItem={({ item }) => <PersonCard user={item} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.CORALRED,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.CORALRED,
    textAlign: 'center',
    paddingTop: 25,
  },
  error: {
    paddingHorizontal: 15,
  },
});

export default User;
