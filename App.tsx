import { RootStack } from "@/navigation";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return(
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
  
}

export default App;