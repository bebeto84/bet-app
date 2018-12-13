import { GestureResponderEvent, TouchableOpacity, Text } from 'react-native';
import * as React from 'react';
import { getImage } from './../../helpers/image';
import { CardItem } from 'native-base';
import { justifyContent } from './../../config/styles';
export interface CompetitionProps {
  id: number;
  name: string;
  code: string;
  emblemUrl: string;
}
export interface CompetitionComponentProps {
  competition: CompetitionProps;
  toCompetition: (ev: GestureResponderEvent) => void;
}

export const Competition: React.FunctionComponent<CompetitionComponentProps> = (
  props: CompetitionComponentProps
) => {
  const { id, emblemUrl: crestUrl, name } = props.competition;
  const Image1: any = getImage({ id, crestUrl });

  return (
    <CardItem
      button={true}
      bordered={true}
      key={id}
      style={justifyContent}
      onPress={props.toCompetition}
    >
      <Text>{name}</Text>
      {Image1}
    </CardItem>
  );
};
