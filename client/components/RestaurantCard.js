import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";

export default function RestaurantCard({ item }) {
  return (
    <TouchableWithoutFeedback>
      <View className="h-36 w-64 mr-6 bg-white rounded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-2">
            <Image source={require("../assets/images/fullStar.png")} />
            <Text className="text-xs">
              <Text className="text-green-700">{item.stars}</Text>
              <Text className="text-gray-700">
                ({item.reviews} review) .
                <Text className="font-semibold">{item.category}</Text>
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
