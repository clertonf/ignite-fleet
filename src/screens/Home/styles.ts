import styled from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export const Container = styled(SafeAreaProvider).attrs({
})`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_800};
`;

export const Title = styled.Text``;
