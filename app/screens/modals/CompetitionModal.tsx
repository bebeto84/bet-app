import { NavigationScreenProps } from 'react-navigation';
import { View, Button, Text } from 'react-native';
import * as React from 'react';

export class CompetitionModalScreen extends React.Component<
  NavigationScreenProps
> {
  goBack = () => this.props.navigation.goBack();
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Competition!</Text>
        <Button onPress={this.goBack} title="Dismiss" />
      </View>
    );
  }
}
