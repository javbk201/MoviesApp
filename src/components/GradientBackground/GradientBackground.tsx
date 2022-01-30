import { StyleSheet, Text, View } from 'react-native';
import React, { Children } from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    children: JSX.Element | JSX.Element[]
}

const GradientBackground = ({children}: Props) => {
  return (
    <View style={styles.gradientContainer}>
      <LinearGradient 
      colors={[
          'purple',
          'gray',
          'white'
        ]}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.7 }}
        />
       {children} 
    </View>
  );
};

export default GradientBackground;

const styles = StyleSheet.create({
    gradientContainer:{
        flex: 1,
    }
});
