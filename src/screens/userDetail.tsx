import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { SCREENS } from '../utils/routes';
import { defaultStyle } from '../styles/defaultStyle';
import { Colors } from '../theme/colors';
import { fullName } from '../utils/fullname';
import InfoRow from '../components/user/infoRow';

type Props = {};
const { USER, USERDETAIL } = SCREENS;
const UserDetail: React.FC<Props> = ({ navigation, route }) => {
  const { user } = route.params;

  return (
    <SafeAreaView style={defaultStyle.safeContainer}>
      <View style={defaultStyle.safeContainer}>
        <ScrollView style={styles.container}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 15,
            }}
          >
            <Image style={styles.image} source={{ uri: user.picture.large }} />
          </View>
          <Text style={styles.name}>
            {fullName(user.name.first, user.name.last)}
          </Text>
          <View style={styles.info}>
            <InfoRow label={'Gender'} value={user.gender} />
            <InfoRow
              label={'Birdday'}
              value={new Date(user.dob.date).toLocaleDateString('tr-TR')}
            />
            <InfoRow
              label={'Register'}
              value={new Date(user.registered.date).toLocaleDateString('tr-TR')}
            />
            <InfoRow label={'Email'} value={user.email} />
            <InfoRow label={'Phone'} value={user.phone} />
            <InfoRow label={'Country'} value={user.location.country} />
            <InfoRow label={'State'} value={user.location.state} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
    borderWidth: 10,
    borderColor: Colors.AMBER,
    alignItems: 'center',
  },
  info: { gap: 25, marginTop: 15 },

  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.AMBER,
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default UserDetail;
