// MainTabs.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Dashboard from "../screens/Dashboard";
// import Horses from "../screens/Horses";
// import Staff from "../screens/Staff";
// import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Caballos" component={Horses} />
      <Tab.Screen name="Personal" component={Staff} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
}