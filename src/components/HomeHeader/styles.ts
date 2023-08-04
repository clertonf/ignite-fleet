import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Image } from 'expo-image';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 32px;
  /* padding: ${getStatusBarHeight() + 32}px 24px 32px; */
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
`;

export const Greeting = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const Message = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`;

export const Name = styled.Text.attrs({
	numberOfLines: 1,
})`
  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  margin-right: 12px;
`;

export const Picture = styled(Image)`
  width: 54px;
  height: 54px;
  border-radius: 7px;
`;


