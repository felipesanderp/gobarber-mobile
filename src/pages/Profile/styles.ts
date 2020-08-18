import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;

  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const BackPowerOff = styled.View`
  margin-top: 40px;

  flex-direction: row;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity``;

export const SignOutButton = styled.TouchableOpacity``;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab_500Medium';
  margin: 24px 0;
`;
