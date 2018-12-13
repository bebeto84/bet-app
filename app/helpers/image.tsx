import Image from 'react-native-remote-svg';
import * as React from 'react';

export const getImage = ({ id: imageId = 0, crestUrl: url = '' }): any => {
  return (
    <Image
      key={imageId}
      style={{ width: 25, height: 25 }}
      source={{ uri: url }}
    />
  );
};
