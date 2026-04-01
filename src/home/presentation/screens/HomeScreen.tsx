// Dashboard.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../theme/colors";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>EqusData</Text>

        <View style={styles.alert}>
          <Text>🔔</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </View>
      </View>

      {/* Resumen */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Resumen</Text>
        <Text>Total caballos: 24</Text>
        <Text>En tratamiento: 5</Text>
      </View>

      {/* Recordatorio */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Hoy</Text>
        <Text>• Vacuna caballo "Relámpago"</Text>
        <Text>• Revisión veterinaria</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.forest,
  },
  alert: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -10,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
  },
  cardTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});