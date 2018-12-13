import * as React from 'react';
import { MatchComponentProps } from './Match.props';
import { Text, CardItem } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { getImage } from './../../helpers/image';
import { justifyContent } from './../../config/styles';

export const Match: React.FunctionComponent<MatchComponentProps> = (
  props: MatchComponentProps
) => {
  const Image1: any = getImage(props.homeTeam || {});
  const Image2: any = getImage(props.awayTeam || {});

  return (
    <CardItem bordered={true} key={props.match.id} style={justifyContent}>
      <Text>{props.homeTeam ? props.awayTeam.name : ''}</Text>
      <TouchableOpacity>{Image1}</TouchableOpacity>
      <Text> - </Text>
      <TouchableOpacity onPress={props.toTeam}>{Image2}</TouchableOpacity>
      <Text>{props.homeTeam ? props.awayTeam.name : ''}</Text>
    </CardItem>
  );
};
