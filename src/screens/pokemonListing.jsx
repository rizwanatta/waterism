import { View, Text, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PokemonListing({ navigation }) {
  const [pokemonData, setPokemonData] = useState([]);

  //fetch ()
  // axios/....

  const BASE_URL = "https://pokeapi.co/api/v2";
  const listing_ep = "/pokemon";

  async function attemptToPokemon() {
    const response = await fetch(BASE_URL + listing_ep);
    const pokemons = await response.json();
    setPokemonData(pokemons.results);
  }

  async function attemptToPokemonViaAxios() {
    const response = await axios(BASE_URL + listing_ep);
    setPokemonData(response.data.results);
  }

  // one time when screen shows up to the user
  useEffect(() => {
    attemptToPokemonViaAxios();
  }, []);

  // on each item press this will work
  function onItemPressed(item) {
    navigation.navigate("PokemonDetails", { pokemonDetailsUrl: item.url });
  }

  const __renderItem = ({ item }) => (
    <Pressable onPress={() => onItemPressed(item)}>
      <View className="p-2 m-2 bg-pink-200">
        <Text>{item.name}</Text>
      </View>
    </Pressable>
  );

  return (
    <View>
      <FlatList data={pokemonData} renderItem={__renderItem} />
    </View>
  );
}
