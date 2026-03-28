// RegisterStepOne.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/shared/theme/colors";

const roles = ["CEO / Director", "Administrador General", "Propietario"];

const checkPasswordStrength = (password: string) => {
  const rules = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    symbol: /[^A-Za-z0-9]/.test(password),
  };

  const score = Object.values(rules).filter(Boolean).length;

  return { score, rules };
};

export default function RegisterStepOne({ navigation }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  });
  const [isPasswordInputFocused, setIsPasswordInputFocused] = useState(false);
  const { score, rules } = checkPasswordStrength(form.password);

  const getStrengthColor = () => {
    if (score <= 2) return "#D9534F";
    if (score === 3 || score === 4) return "#F0AD4E";
    return colors.forest;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appName}>EqusData</Text>
      <Text style={styles.subtitle}>Crea tu organización en minutos</Text>

      <View style={styles.card}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Al crear esta cuenta, serás el administrador principal del sistema.
          </Text>
        </View>

        <TextInput
          placeholder="Nombre del administrador"
          style={styles.input}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />

        <TextInput
          placeholder="Email administrador"
          style={styles.input}
          onChangeText={(text) => setForm({ ...form, email: text })}
        />

        {/* SELECT DE ROL */}
        <Text style={styles.label}>Selecciona rol</Text>
        <View style={styles.roleContainer}>
          {roles.map((role) => (
            <TouchableOpacity
              key={role}
              style={[
                styles.roleItem,
                form.role === role && styles.roleSelected,
              ]}
              onPress={() => setForm({ ...form, role })}
            >
              <Text
                style={[
                  styles.roleText,
                  form.role === role && styles.roleTextSelected,
                ]}
              >
                {role}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* PASSWORD */}
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          style={styles.input}
          onChangeText={(text) => setForm({ ...form, password: text })}
          onFocus={() => setIsPasswordInputFocused(true)}
          onBlur={() => { setIsPasswordInputFocused(false)}}
        />
        {
          isPasswordInputFocused ? 
          (
            <>
              <View style={styles.progressContainer}>
                <View
                  style={[
                    styles.progressBar,
                    {
                      width: `${(score / 5) * 100}%`,
                      backgroundColor: getStrengthColor(),
                    },
                  ]}
                />
              </View>

              
              <View style={styles.rules}>
                <Text style={rules.length ? styles.valid : styles.invalid}>
                  • Mínimo 8 caracteres
                </Text>
                <Text style={rules.upper ? styles.valid : styles.invalid}>
                  • Una mayúscula
                </Text>
                <Text style={rules.lower ? styles.valid : styles.invalid}>
                  • Una minúscula
                </Text>
                <Text style={rules.number ? styles.valid : styles.invalid}>
                  • Un número
                </Text>
                <Text style={rules.symbol ? styles.valid : styles.invalid}>
                  • Un símbolo
                </Text>
              </View>
            </>
          ) : null

        }
        

        <TextInput
          placeholder="Repetir contraseña"
          secureTextEntry
          style={styles.input}
          onChangeText={(text) =>
            setForm({ ...form, confirmPassword: text })
          }
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RegisterStepTwo")}
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  appName: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.forest,
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 20,
    color: colors.moss,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
  },
  infoBox: {
    backgroundColor: colors.sage,
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  infoText: {
    color: "#fff",
    fontSize: 13,
  },
  input: {
    backgroundColor: colors.cream,
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.sand,
  },
  label: {
    marginBottom: 8,
    color: colors.moss,
    fontWeight: "600",
  },
  roleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },
  roleItem: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.cream,
    marginRight: 8,
    marginBottom: 8,
  },
  roleSelected: {
    backgroundColor: colors.forest,
  },
  roleText: {
    color: colors.text,
  },
  roleTextSelected: {
    color: "#fff",
    fontWeight: "bold",
  },
  progressContainer: {
    height: 8,
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  progressBar: {
    height: "100%",
  },
  rules: {
    marginBottom: 10,
  },
  valid: {
    color: colors.forest,
    fontSize: 12,
  },
  invalid: {
    color: "#999",
    fontSize: 12,
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