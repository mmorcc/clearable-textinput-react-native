import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import ClearableTextInput from './src/component/clearable-textinput.component';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      textVal: ''
    }

    this.handleClear = this.handleClear.bind(this);
    this.handleTextChanged = this.handleTextChanged.bind(this);
  }

  handleClear() {
    this.setState({textVal: ''})
  }

  handleTextChanged(event) {
    this.setState({textVal: event.nativeEvent.text})
  }
 
  render() {
    return (
      <View style={styles.container}>


        <ClearableTextInput 
          label={'Control Component'}
          placeholder={'parent control the value'}
          value={this.state.textVal}
          onTextChanged = {this.handleTextChanged}
          onClear={this.handleClear}
        />

        <ClearableTextInput 
          placeholder={'parent uncontrol the value'}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
