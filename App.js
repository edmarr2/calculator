import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './src/components/Button';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Display from './src/components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class App extends Component {
  state = {...initialState};

  addDigit = (n) => {
    if (n === '.' && this.state.displayValue.includes('.')) {
      return;
    }
    const clearDisplay =
      this.state.displayValue === '0' || this.state.clearDisplay;

    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({displayValue, clearDisplay: false});

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({values});
    }
  };

  clearMemory = () => {
    this.setState({...initialState});
  };

  setOperation = (operation) => {
    if (this.state.current === 0) {
      this.setState({operation, current: 1, clearDisplay: true});
    }
    const equals = operation === '=';
    const values = [...this.state.values];
    try {
      values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
    } catch (e) {
      console.warn(e);
      values[0] = this.state.values[0];
    }

    values[1] = 0;
    this.setState({
      displayValue: values[0],
      operation: equals ? null : operation,
      current: equals ? 0 : 1,
      clearDisplay: !equals,
      values,
    });
  };
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
            <Button onClick={() => this.addDigit('0')} label={'='} operation />
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
