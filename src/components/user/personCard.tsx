import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Pressable } from 'react-native';
import { fullName } from '../../utils/fullname';
import { Colors } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../utils/routes';

type Props = {};
const {USERDETAIL}=SCREENS

const PersonCard: React.FC<Props> = ({ user }) => {
    const navigation=useNavigation()
  const genreImage =
    user.gender === 'male'
      ? require('../../assets/images/male.png')
      : require('../../assets/images/female.png');

  return (
    <Pressable onPress={()=>navigation.navigate(USERDETAIL,{user:user})} style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>
          {fullName(user.name.first, user.name.last)}
        </Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.email}>{user.phone}</Text>
        <Text style={styles.location}>
          {user.location.state} / {user.location.country}
        </Text>
      </View>
      <View>
        <ImageBackground source={genreImage} style={styles.bgimage} />
        <Image
          source={{ uri: user.picture.large }}
          style={[styles.image, { top: user.gender === 'male' ? 20 : 15 }]}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.TEXT,
    borderRadius: 27,
    borderColor: Colors.SOFTGRAY,
    borderBottomWidth: 5,
    borderRightWidth: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,

    shadowRadius: 5,
  },
  info: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-evenly',
    height: '100%',
    paddingVertical: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.ICEBLUE,
  },
  location: {
    fontSize: 17  ,
    fontWeight: '600',
    color: Colors.ICEBLUE,
  },
  email: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.WHITE,
  },
  bgimage: {
    width: 135,
    height: 135,
    borderRadius: 20,
    overflow: 'hidden',
  },

  image: {
    position: 'absolute',
    width: 95,
    height: 95,
    backgroundColor: 'red',
    borderRadius: 40,
    left: 20,
  },
});

export default PersonCard;
