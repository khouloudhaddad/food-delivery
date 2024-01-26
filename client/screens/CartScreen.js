import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../slices/RestaurantSlice";
import { selectCartItems, selectCartTotal } from "../slices/CartSlice";

export default function CartScreen() {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({});

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);
  return (
    <View className="bg-white flex-1">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Shopping Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
        {/* delivery time */}
        <View
          className="flex-row px-4 items-center"
          style={{ backgroundColor: themeColors.bgColor(0.2) }}
        >
          <Image
            source={require("../assets/images/bikeGuy.png")}
            className="w-20 h-20 rounded-full"
          />
          <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
          <TouchableOpacity>
            <Text
              className="font-bold"
              style={{ color: themeColors.bgColor(1) }}
            >
              Change
            </Text>
          </TouchableOpacity>
        </View>
        {/* dishes */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 50,
          }}
          className="bg-white pt-5"
        >
          {Object.entries(groupedItems).map(([key, items]) => {
            let dish = items[0];
            return (
              <View
                className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
                key={key}
              >
                <Text className="font-bold" style={{ color: themeColors.text }}>
                  {items.length} x
                </Text>
                <Image className="h-14 w-14 rounded-full" source={dish.image} />
                <Text className="flex-1 font-bold text-gray-700">
                  {dish.name}
                </Text>
                <Text className="font-semibold text-base">${dish.price}</Text>
                <TouchableOpacity
                  className="p-1 rounded-full"
                  style={{ backgroundColor: themeColors.bgColor(1) }}
                >
                  <Icon.Minus
                    strokeWidth={2}
                    height={20}
                    width={20}
                    stroke="white"
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        {/* Totamls */}
        <View
          style={{ backgroundColor: themeColors.bgColor(0.2) }}
          className="p-6 px-8 rounded-t-3xl space-y-4"
        >
          <View className="flex-row justify-between">
            <Text className="text-gray-700">Subtotal</Text>
            <Text className="text-gray-700">$20</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-700">Delivery Fee</Text>
            <Text className="text-gray-700">$10</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-700 font-extrabold">Total</Text>
            <Text className="text-gray-700 font-extrabold">$30</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Checkout")}
              style={{ backgroundColor: themeColors.bgColor(1) }}
              className="p-3 rounded-full"
            >
              <Text className="text-white text-center font-bold text-lg">
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
