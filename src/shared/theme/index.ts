// theme.js
import { DefaultTheme } from "@react-navigation/native";
import { colors } from './colors';

export const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#DBD0C4", // cream (fondo claro)
    primary: "#697254",    // forest
    card: "#FFFFFF",
    text: "#2E2E2E",
    border: "#B69C85",
    notification: "#92735C",
  },
};