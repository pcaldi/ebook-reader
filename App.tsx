import { StatusBar } from "expo-status-bar";
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });


  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        style={"light"}
      />
      <Routes />

    </>
  );
}

