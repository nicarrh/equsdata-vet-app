// LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const colors = {
  sage: "#A7AD89",
  cream: "#DBD0C4",
  moss: "#8C916C",
  sand: "#B69C85",
  forest: "#697254",
  earth: "#92735C",
};

export const i18n = {
  login: {
    welcomeText: 'equsdata',
  }
}

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{i18n.login.welcomeText}</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={{color: "#666",}}>
            ¿No tienes cuenta?{" "}
          </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('RegisterStepOne')} >
            <Text style={styles.link}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.forest,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: colors.cream,
    borderRadius: 12,
    padding: 14,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.sand,
  },
  button: {
    backgroundColor: colors.forest,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 15,
    color: "#666",
    justifyContent: 'center',
    alignItems: 'center',

  },
  link: {
    color: colors.earth,
    fontWeight: "bold",
  },
});