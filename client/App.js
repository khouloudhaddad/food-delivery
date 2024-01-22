import Navigation from "./navigation";
import { NativeWindStyleSheet } from "nativewind";
import { Provider } from "react-redux";
import { store } from "./store";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
