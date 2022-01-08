import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity, TouchableHighlight  } from 'react-native';
import { Audio } from 'expo-av';

const styles = StyleSheet.create({
	container: {
		paddingTop: 90,
		flex: 1,
		flexDirection: 'row'
	},
	tinyLogo: {
		// flex: 2,
		width: 50,
		height: 50,
		padding: 25,
	},
	logo: {
		width: 50,
		height: 50,
		marginLeft: 10
	},
});

export const PlayAudio = (props) => {
	const [sound, setSound] = React.useState();

	async function playSound() {
	  console.log('Loading Sound');
	  const { sound } = await Audio.Sound.createAsync(
		require('../../assets/Hello.mp3')
	  );
	  setSound(sound);
      
	  console.log('Playing Sound');
	  await sound.playAsync(); }
      
	React.useEffect(() => {
	  return sound
	    ? () => {
		console.log('Unloading Sound');
		sound.unloadAsync(); }
	    : undefined;
	}, [sound]);

	async function playSound2() {
		console.log('Loading Sound');
		const { sound } = await Audio.Sound.createAsync(
		      require('../../assets/nomusic.mp3')
		);
		setSound(sound);
	    
		console.log('Playing Sound');
		await sound.playAsync(); }
	    
	      React.useEffect(() => {
		return sound
		  ? () => {
		      console.log('Unloading Sound');
		      sound.unloadAsync(); }
		  : undefined;
	      }, [sound]);

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={()=>playSound()}>
    				<Image style={styles.tinyLogo} source={require('../../assets/openmusic.png')} />
			</TouchableOpacity>
			<TouchableOpacity onPress={()=>playSound2()}>
    				<Image style={styles.logo} source={require('../../assets/mute.png')} />
			</TouchableOpacity>
			 {/* <Image
			 	onPress={() => this.playSound()}
				style={styles.tinyLogo}
				source={{
				uri: 'https://firebasestorage.googleapis.com/v0/b/duan1-3cc8b.appspot.com/o/openmusic.png?alt=media&token=3ff7c3a5-10b1-4f75-b392-6bbf47bdb4b1',
				}}
      			/> */}
			{/* <Button title="Play Sound" onPress={playSound} /> */}
			{/* <Button title="Stop" onPress={playSound2}></Button> */}
		</View>
	)
}

