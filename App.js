import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './src/components/Button';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Display from './src/components/Display';

export default class App extends Component {
  state = {
    displayValue: '0',
  };

  addDigit = (n) => {
    this.setState({displayValue: n});
  };

  clearMemory = () => {
    this.setState({displayValue: '0'});
  };

  setOperation = (operation) => {};
  render() {
    return (
      <>
        <View style={styles.scrollView}>
          <Display value={this.state.displayValue} />
          <View style={styles.row}>
            <Button onClick={this.clearMemory} label={'AC'} operation />
            <Button onClick={() => this.addDigit('1')} label={'1'} />
            <Button onClick={() => this.addDigit('2')} label={'2'} />
            <Button
              onClick={() => this.setOperation('+')}
              label={'+'}
              operation
            />
          </View>
          <View style={styles.row}>
            <Button onClick={() => this.addDigit('3')} label={'3'} />
            <Button onClick={() => this.addDigit('4')} label={'4'} />
            <Button onClick={() => this.addDigit('5')} label={'5'} />
            <Button
              onClick={() => this.setOperation('-')}
              label={'-'}
              operation
            />
          </View>
          <View style={styles.row}>
            <Button onClick={() => this.addDigit('6')} label={'6'} />
            <Button onClick={() => this.addDigit('7')} label={'7'} />
            <Button onClick={() => this.addDigit('8')} label={'8'} />
            <Button
              onClick={() => this.setOperation('*')}
              label={'*'}
              operation
            />
          </View>
          <View style={styles.row}>
            <Button onClick={() => this.addDigit('9')} label={'9'} />
            <Button onClick={() => this.addDigit('0')} label={'0'} />
            <Button onClick={console.warn('teste')} label={'='} operation />
            <Button
              onClick={() => this.setOperation('/')}
              label={'/'}
              operation
            />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
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
