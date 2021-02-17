import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import Button from './src/components/Button';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Display from './src/components/Display';
const App: () => React$Node = () => {
  const state = {
    displayValue: '0'
  }
  return (
    <>
      <View style={styles.scrollView}>
        <Display value={this.state.displayValue}/>
        <View style={styles.row}>
          <Button onClick={console.warn('teste')} label={'+'}/>
          <Button onClick={console.warn('teste')} label={'-'}/>
          <Button onClick={console.warn('teste')} label={'*'}/>
          <Button onClick={console.warn('teste')} label={'/'}/>
        </View>
        <View style={styles.row}>
          <Button onClick={console.warn('teste')} label={'1'}/>
          <Button onClick={console.warn('teste')} label={'2'}/>
          <Button onClick={console.warn('teste')} label={'3'}/>
          <Button onClick={console.warn('teste')} label={'4'}/>
        </View>
        <View style={styles.row}>
          <Button onClick={console.warn('teste')} label={'5'}/>
          <Button onClick={console.warn('teste')} label={'6'}/>
          <Button onClick={console.warn('teste')} label={'7'}/>
          <Button onClick={console.warn('teste')} label={'8'}/>
        </View>
        <View style={styles.row}>
          <Button onClick={console.warn('teste')} label={'9'}/>
          <Button onClick={console.warn('teste')} label={'0'}/>
          <Button onClick={console.warn('teste')} label={'='}/>
          <Button onClick={console.warn('teste')} label={'AC'}/>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  row:{
    flexDirection: 'row'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
