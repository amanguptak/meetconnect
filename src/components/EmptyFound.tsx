import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Inbox } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from '../utils/Constants';

interface EmptyStateProps {
  /**
   * Custom message to display under the icon
   * @default "No items found."
   */
  message?: string;
}


const EmptyState: React.FC<EmptyStateProps> = ({ message = 'No items found.' }) => {
  return (
    <View style={styles.container}>
      <Inbox size={RFValue(48)} color={COLORS.tertiary} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(20),
  },
  text: {
    marginTop: RFValue(16),
    fontSize: RFValue(16),
    color: COLORS.text,
    textAlign: 'center',
    fontWeight:'600',
  },
});

export default EmptyState;
