import React from "react";
import { StyleSheet, Text, View, YellowBox } from "react-native";
import Routes from "./src/routes";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

export default function App() {
  return <Routes />;
}
