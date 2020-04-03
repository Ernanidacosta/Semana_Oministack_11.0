import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Image, Text, TouchableOpacity } from "react-native";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.header.bold}>0 Casos.</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <View style={styles.incidentList}>
        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>AACD</Text>

          <Text style={styles.incidentProperty}>Caso:</Text>
          <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

          <Text style={styles.incidentProperty}>Valor:</Text>
          <Text style={styles.incidentValue}>R$ 150,00</Text>

          <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#e02041" />
          </TouchableOpacity>
        </View>

        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>AACD</Text>

          <Text style={styles.incidentProperty}>Caso:</Text>
          <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

          <Text style={styles.incidentProperty}>Valor:</Text>
          <Text style={styles.incidentValue}>R$ 150,00</Text>

          <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#e02041" />
          </TouchableOpacity>
        </View>

        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>AACD</Text>

          <Text style={styles.incidentProperty}>Caso:</Text>
          <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

          <Text style={styles.incidentProperty}>Valor:</Text>
          <Text style={styles.incidentValue}>R$ 150,00</Text>

          <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#e02041" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
