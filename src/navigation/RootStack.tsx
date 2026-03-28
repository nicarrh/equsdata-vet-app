import { LoginScreen, RegisterStepOne, RegisterStepTwo } from '@/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="RegisterStepOne" component={RegisterStepOne} />
      <Stack.Screen name="RegisterStepTwo" component={RegisterStepTwo} />
    </Stack.Navigator>
  );
}


export {
  RootStack
}