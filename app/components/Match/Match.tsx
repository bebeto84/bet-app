import * as React from 'react';
import { MatchScreenProps, TeamProps } from './Match.props';
import { Text, CardItem } from 'native-base';
// tslint:disable-next-line:import-name
import Image from 'react-native-remote-svg';
import * as styles from './style';
import { TouchableOpacity, GestureResponderEvent } from 'react-native';

const getImage = (matchId: number, team: TeamProps): any => {
  if (!team) {
    return undefined;
  }
  const imageId = `${matchId}-${team.id}`;
  return (
    <Image
      key={imageId}
      style={{ width: 20, height: 20 }}
      source={{ uri: team.crestUrl }}
    />
  );
};

export const Match: React.FunctionComponent<MatchScreenProps> = (
  props: MatchScreenProps
) => {
  const Image1: any = getImage(props.match.id, props.homeTeam);
  const Image2: any = getImage(props.match.id, props.awayTeam);

  const onPressTeam = (ev: GestureResponderEvent): void => {
    props.toTeam(ev.target);
  };
  return (
    <CardItem bordered={true} key={props.match.id} style={styles.matchStyle}>
      <Text>{props.homeTeam ? props.awayTeam.name : ''}</Text>
      <TouchableOpacity>{Image1}</TouchableOpacity>
      <Text> - </Text>
      <TouchableOpacity onPress={onPressTeam}>{Image2}</TouchableOpacity>
      <Text>{props.homeTeam ? props.awayTeam.name : ''}</Text>
    </CardItem>
  );
};
