import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../../theme/colors';

type Props = {};

const InfoRow: React.FC<Props> = ({ label, value }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.value}>: {value}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  left: { flex: 1 },
  right: { flex: 1, position: 'absolute', left: 85, top: 0 },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.AMBER,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InfoRow;
