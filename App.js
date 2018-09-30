import React from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favColor: undefined,
            items: [
                {
                    label: 'Red',
                    value: 'red',
                },
                {
                    label: 'Orange',
                    value: 'orange',
                },
                {
                    label: 'Blue',
                    value: 'blue',
                },
            ]
        };
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.scrollView}>
              <View style={styles.container}>
                <Text>What&rsquo;s your favorite color?</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'Select a color...',
                        value: null,
                    }}
                    items={this.state.items}
                    onValueChange={(value) => {
                        this.setState({
                            favColor: value,
                        });
                    }}
                    value={this.state.favColor}
                >
                  <Text>children view</Text>
                </RNPickerSelect>
                {/* dummy list Layout */}
                {this.listItem()}
                {this.listItem()}
                {this.listItem()}
                {this.listItem()}
                {this.listItem()}
                {this.listItem()}
                {this.listItem()}
                {this.listItem()}
                {this.listItem()}
                {this.listItem()}
                {this.listItem()}
                {this.listItem()}
              </View>
            </ScrollView>
        );
    }

    listItem = () => {
      return (
        <View>
          <View style={styles.separator}/>
          <View style={styles.listItem}>
            <Text>ListItems</Text>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexGrow:1,
        paddingTop: 30,
        backgroundColor: '#fff',
        paddingHorizontal: 10
    },
    scrollView: {
      flex:1,
      flexGrow:1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingHorizontal: 10
    },
    separator: {
      height:1,
      width: '100%',
      backgroundColor: '#E6E6E6'
    },
    listItem: {
      margin: 10,
      width: '100%',
      backgroundColor: 'transparent'
      // this is ok.
      // backgroundColor: '#FFF'
    }
});
