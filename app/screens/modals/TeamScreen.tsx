import * as React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { View, Button, Text } from 'react-native';

export class TeamModalScreen extends React.Component<NavigationScreenProps> {
  goBack = () => this.props.navigation.goBack();
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button onPress={this.goBack} title="Dismiss" />
      </View>
    );
  }
}
