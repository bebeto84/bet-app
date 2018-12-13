import * as React from 'react';
import { CompetitionProps, Competition } from './../../components/Competition';
import { NavigationScreenProps } from 'react-navigation';

import { ScrollView, GestureResponderEvent } from 'react-native';
import { getTemplate } from './../../screens/template';

export interface CompetitionsScreenProps extends NavigationScreenProps {
  competitions: CompetitionProps[];
  init: any;
}

export class CompetitionsScreen extends React.Component<
  CompetitionsScreenProps
> {
  componentDidMount() {
    this.props.init();
  }

  navigateToCompetition = (ev: GestureResponderEvent): void => {
    this.props.navigation.navigate('CompetitionModalScreen');
  };

  render() {
    const competitions = this.props.competitions.map(competition => {
      if (competition) {
        return (
          <Competition
            key={competition.id}
            competition={competition}
            toCompetition={this.navigateToCompetition}
          />
        );
      }
      return null;
    });
    return getTemplate(this.props, <ScrollView>{competitions}</ScrollView>); //
  }
}
