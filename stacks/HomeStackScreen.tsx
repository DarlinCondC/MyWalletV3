import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen1 from '../src/screens/HomeScreen1';
import HomeScreen2 from '../src/screens/HomeScreen2';
import HomeScreen3 from '../src/screens/HomeScreen3';
import HomeScreen4 from '../src/screens/HomeScreen4';
import HomeScreen5 from '../src/screens/HomeScreen5';
import { BottomNavigation } from 'react-native-paper';

/////
const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;


const HomeStackScreen = () => {
    const HomeStack = createNativeStackNavigator();

    const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: 'queue-music' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    });

    return (

        <HomeStack.Navigator>
            <HomeStack.Screen name="Pantalla Principal" component={HomeScreen1} />
            <HomeStack.Screen name="Balance" component={HomeScreen2} />
            <HomeStack.Screen name="Registro" component={HomeScreen3} />
            <HomeStack.Screen name="Enviar CNDR" component={HomeScreen4} />
            <HomeStack.Screen name="Recibir CNDR" component={HomeScreen5} />

        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
        </HomeStack.Navigator>
        
    );
};

export default HomeStackScreen
