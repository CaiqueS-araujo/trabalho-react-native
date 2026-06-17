import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type DrawerParamsList = {
    Main: undefined;
    Perfil: undefined;
}


export function Main() {

    const navigation = useNavigation();

  return (
    <View>
      <Text>testando!</Text>
    </View>
  )
}