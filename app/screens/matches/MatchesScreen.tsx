import * as React from 'react';
import { MatchProps, Match } from './../../components/Match';
import { NavigationScreenProps } from 'react-navigation';

import { ScrollView, View, Button, Text } from 'react-native';
import { getTemplate } from './../../screens/template';
import { getTeamById } from './../../features/teams/selectors';

export interface MatchesScreenProps extends NavigationScreenProps {
  matches: MatchProps[];
  teams: any;
  init: any;
}

export class MatchesScreen extends React.Component<MatchesScreenProps> {
  componentDidMount() {
    this.props.init();
  }

  navigateToTeam = (id: number): void => {
    this.props.navigation.navigate('ModalScreen');
  };

  render() {
    const matches = this.props.matches.map(match => {
      if (match) {
        const { awayTeam, homeTeam } = getTeamById(this.props.teams, match);
        return (
          <Match
            key={match.id}
            match={match}
            awayTeam={awayTeam}
            homeTeam={homeTeam}
            toTeam={this.navigateToTeam}
          />
        );
      }
      return null;
    });
    return getTemplate(this.props, <ScrollView>{matches}</ScrollView>); //
  }
}
