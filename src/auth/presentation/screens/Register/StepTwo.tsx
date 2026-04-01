// RegisterStepTwo.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
// import RNPickerSelect from 'react-native-picker-select';
import { SafeAreaView } from "react-native-safe-area-context";
import { regions } from "../../../../app/json-data/regions";

import { colors } from "@/shared/theme/colors";

const organizationTypes = [
  "Centro ecuestre",
  "Criadero",
  "Equinoterapia",
  "Deporte ecuestre",
  "Otro",
];

// const regions = [
//   "Valparaíso",
//   "Metropolitana",
//   "Biobío",
//   "Araucanía",
// ];

type Item = {
  value: string;
  label: string;
  id: string;
}

interface PropsSelectableInput {
  items: Item[];
  placeholder: string | null | undefined;
  selected: string | undefined | null;
  onValueChange: (item: Item) => void;
}

const screenWidth = Dimensions.get('window').width;

const SelectableInput = ({ items, placeholder, selected, onValueChange }: PropsSelectableInput ) => {
  const [toggle, setToggle] = useState<'closed' | 'opened'>('closed')
  return (
    <View>
      <TouchableOpacity onPress={() => {setToggle(prev => prev === 'closed' ? 'opened' : 'closed')}} style={{...styles.input, width: screenWidth * 0.9 }}>
        <Text>{selected ?? placeholder}</Text>
      </TouchableOpacity>
      <ScrollView style={{ ...styles.input, display: toggle === 'opened' ? 'flex' : 'none'}}>
      {toggle === 'opened' ? items.map(item => {
        return (
          <TouchableOpacity onPress={() => {
            setToggle(prev => prev === 'closed' ? 'opened' : 'closed')
            onValueChange(item) }}
            style={styles.item}>
            <Text>{item.label}</Text>
          </TouchableOpacity>
        )
      }) : null }
      </ScrollView>
    </View>
  )
}

export default function RegisterStepTwo({ navigation }) {
  const [form, setForm] = useState({
    type: "",
    name: "",
    region: "",
    city: "",
  });

    const [selectedValue, setSelectedValue] = useState<null | string>(null);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Crear organización</Text>

        {/* Tipo organización */}
        <Text style={styles.label}>Tipo de organización</Text>
        <View style={styles.chips}>
          {organizationTypes.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.chip,
                form.type === item && styles.chipSelected,
              ]}
              onPress={() => setForm({ ...form, type: item })}
            >
              <Text
                style={[
                  styles.chipText,
                  form.type === item && styles.chipTextSelected,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Nombre */}
        <TextInput
          placeholder="Nombre organización"
          style={styles.input}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />

        {/* Región */}
        <Text style={styles.label}>Región</Text>
        <View style={styles.chips}>
          {/* {regions.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.chip,
                form.region === item && styles.chipSelected,
              ]}
              onPress={() => setForm({ ...form, region: item })}
            >
              <Text
                style={[
                  styles.chipText,
                  form.region === item && styles.chipTextSelected,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))} */}
        <SelectableInput items={regions.map(item => ({
          value: item.code,
          label: item.name,
          id: item.id
        })) as unknown as Item[]}
        selected={selectedValue}
        placeholder="Seleccione Región"
        onValueChange={(item) => {setSelectedValue(item.label)}}
        />

        </View>

        {/* Ciudad */}
        <TextInput
          placeholder="Ciudad / Comuna"
          style={styles.input}
          onChangeText={(text) => setForm({ ...form, city: text })}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("Dashboard")}
        >
          <Text style={styles.buttonText}>Crear organización</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.forest,
    marginBottom: 15,
  },
  label: {
    marginBottom: 8,
    color: colors.moss,
    fontWeight: "600",
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },
  chip: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.cream,
    marginRight: 8,
    marginBottom: 8,
  },
  chipSelected: {
    backgroundColor: colors.forest,
  },
  chipText: {
    color: colors.text,
  },
  chipTextSelected: {
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: colors.cream,
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.sand,
  },
  button: {
    backgroundColor: colors.forest,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  item: {
    // borderBottomColor: '#333',
    // borderBottomWidth: 1,
    paddingBottom: 8,
  }
});