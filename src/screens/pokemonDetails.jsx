import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PokemonDetails({ navigation, route }) {
  const [pokemonDetails, setPokemonDetails] = useState({});

  async function attemptToPokemonViaAxios() {
    const response = await axios(route.params.pokemonDetailsUrl);
    setPokemonDetails(response.data);
    console.log(response.data);
  }

  // one time when screen shows up to the user
  useEffect(() => {
    attemptToPokemonViaAxios();
  }, []);

  return (
    <View>
      <View>
        {pokemonDetails ? (
          <Image
            className="h-44 w-44"
            source={{
              uri:
                pokemonDetails.sprites?.front_default ||
                pokemonDetails.sprites?.back_default,
            }}
          />
        ) : null}
      </View>
      <Text>{pokemonDetails.name}</Text>
    </View>
  );
}
