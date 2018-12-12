import * as React from 'react';
import { MatchScreenProps, TeamProps } from './Match.props';
import { Text, CardItem } from 'native-base';
// tslint:disable-next-line:import-name
import Image from 'react-native-remote-svg';

const getImage = (matchId: number, team: TeamProps): any => {
  if (!team) {
    return undefined;
  }
  const imageId = `${matchId}-${team.id}`;
  return (
    <Image
      key={imageId}
      style={{ width: 50, height: 50 }}
      source={{ uri: team.crestUrl }}
    />
  );
};
export const Match: React.FunctionComponent<MatchScreenProps> = (
  props: MatchScreenProps
) => {
  const Image1: any = getImage(props.match.id, props.homeTeam);
  const Image2: any = getImage(props.match.id, props.awayTeam);
  const homeName: string = props.homeTeam ? props.homeTeam.name : '';
  const awayName: string = props.homeTeam ? props.awayTeam.name : '';
  return (
    <CardItem key={props.match.id}>
      {Image1}
      <Text>{homeName}</Text>
      <Text> - </Text>
      <Text>{awayName}</Text>
      {Image2}
    </CardItem>
  );
};
