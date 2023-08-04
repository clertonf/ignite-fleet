import React from 'react';

import { StatusBar } from 'react-native';
import { AppProvider, UserProvider } from '@realm/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { SignIn } from './src/screens/SignIn';
import theme from './src/theme';
import { Loading } from './src/components/Loading';
import { REALM_APP_ID } from '@env';
import { Routes } from './src/routes';

export default function App() {
	const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold });

	if(!fontsLoaded) {
		return (
			<Loading />
		);
	}

	return (
		<AppProvider id={REALM_APP_ID} >
			<ThemeProvider theme={theme}>
				<SafeAreaProvider>
					<StatusBar
						barStyle='light-content'
						backgroundColor='transparent'
						translucent
					/>
					<UserProvider fallback={SignIn} >
						<Routes />
					</UserProvider>
				</SafeAreaProvider>
			</ThemeProvider>
		</AppProvider>
	);
}


