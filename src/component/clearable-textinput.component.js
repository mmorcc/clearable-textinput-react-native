import React, { Component } from 'react';
import {
    View, TextInput, TouchableOpacity, Text, StyleSheet
} from 'react-native';

const ClearButton = (props) => {
    if (props.isDirty) {
        return (
            <TouchableOpacity 
                style={styles.btn}
                onPress={props.onClearPressed}
            >
                <Text style={styles.btn_text}>X</Text>
            </TouchableOpacity>
        )
    }
    return null;
}

export default class ClearableTextInput extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: props.value || '',
            isDirty: () => this.state.value.length > 0 ? true : false
        };

        // bind event
        this.handleChanged = this.handleChanged.bind(this);
        this.onClearPressed = this.onClearPressed.bind(this);
    }

    onClearPressed() {
        const {onClear} = this.props;
        this.setState({value: ''});
        onClear && onClear();
    }
    
    handleChanged(event) {
        const {onTextChanged} = this.props;
        this.setState({value: event.nativeEvent.text});
        onTextChanged && onTextChanged(event);
    }

    render() {

        const {value} = this.state;
        const {...inputProps} = this.props;

        return (
            <View style={styles.wrapper}>
                this.props.label ? <Text style={styles.label}>{this.props.label}</Text> : null;

                <View style={styles.input_wrapper}>
                    <TextInput
                        style={styles.input_text}
                        value={value}
                        onChange={this.handleChanged}
                        {...inputProps}
                        />

                    <ClearButton
                        isDirty={this.state.isDirty()}
                        onClearPressed={this.onClearPressed} />
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flex: 0,
        width: '100%'
    },
    label:{
        paddingLeft: 10,
        paddingRight: 10,
    },
    input_wrapper: {
        flex: 0,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#D5D5D5'
    },
    input_text: {
        flex: 1,
        height: 50,
        fontSize: 16,
        paddingLeft: 10,
        paddingRight: 10
    },
    btn: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_text: {
        fontSize:16,
        fontWeight: 'bold'
    }

});