// RegisterStepTwo.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { colors } from "@/shared/theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterStepTwo() {
  const [form, setForm] = useState({
    type: "",
    name: "",
    country: "",
    region: "",
    city: "",
    address: "",
    email: "",
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1}}>
        <Text style={styles.appName}>EqusData</Text>
      </View>
      <View style={{ flex: 9, justifyContent: 'center'}}>
        <Text style={styles.title}>Datos de tu organización</Text>

        <ScrollView>
          <TextInput
            placeholder="Tipo de organización"
            style={styles.input}
            onChangeText={(text) => setForm({ ...form, type: text })}
          />

          <TextInput
            placeholder="Nombre del centro"
            style={styles.input}
            onChangeText={(text) => setForm({ ...form, name: text })}
          />

          <TextInput
            placeholder="País"
            style={styles.input}
            onChangeText={(text) => setForm({ ...form, country: text })}
          />

          <TextInput
            placeholder="Región"
            style={styles.input}
            onChangeText={(text) => setForm({ ...form, region: text })}
          />

          <TextInput
            placeholder="Comuna"
            style={styles.input}
            onChangeText={(text) => setForm({ ...form, city: text })}
          />

          <TextInput
            placeholder="Dirección"
            style={styles.input}
            onChangeText={(text) => setForm({ ...form, address: text })}
          />

          <TextInput
            placeholder="Correo institucional"
            style={styles.input}
            onChangeText={(text) => setForm({ ...form, email: text })}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Crear organización</Text>
          </TouchableOpacity>
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: colors.background,
    padding: 20,
  },
  appName: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.forest,
    textAlign: "center",
    marginBottom: 24
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.forest,
    marginBottom: 15,
  },
  input: {
    backgroundColor: colors.cream,
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.sand,
  },
  button: {
    backgroundColor: colors.forest,
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});