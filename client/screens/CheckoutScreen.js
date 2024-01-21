import { View, Image } from "react-native";
import React from "react";

export default function CheckoutScreen() {
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={require("../assets/images/delivery.gif")}
        className="h-80 w-80"
      />
    </View>
  );
}
