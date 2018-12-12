import * as React from 'react';
import { MatchProps, Match, TeamProps } from './../../components/Match';
import { NavigationScreenProps } from 'react-navigation';
import {
  Container,
  Header,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Title,
  Content,
  Footer,
  Badge,
  Text
} from 'native-base';
import { ScrollView } from 'react-native';

export interface MatchesScreenProps {
  matches: MatchProps[];
  teams: any;
  init: any;
  navigation: NavigationScreenProps<any, any>;
}
const getTeam: any = (teams: any, match: MatchProps) => {
  return {
    homeTeam: teams[match.homeTeam],
    awayTeam: teams[match.awayTeam]
  };
};

export class MatchesScreen extends React.Component<MatchesScreenProps, {}> {
  componentDidMount() {
    this.props.init();
  }

  render(): any {
    debugger;
    const matches = this.props.matches.map(match => {
      if (match) {
        const { awayTeam, homeTeam } = getTeam(this.props.teams, match);
        return (
          <Match
            key={match.id}
            match={match}
            awayTeam={awayTeam}
            homeTeam={homeTeam}
          />
        );
      }
      return null;
    });
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent={true}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Matches</Title>
          </Body>
          <Right>
            <Badge>
              <Text>{matches.length}</Text>
            </Badge>
          </Right>
        </Header>
        <Content>
          <ScrollView>{matches}</ScrollView>
        </Content>
        <Footer />
      </Container>
    ); //
  }
}
