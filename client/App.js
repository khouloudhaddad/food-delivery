import Navigation from "./navigation";
import './global.css'
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <Navigation />
  );
}

