import { StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Ionicons, MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';

export default function NotificacionesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../../assets/images/TWlogo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Notificaciones</Text>
      </View>

      <View style={styles.notification}>
        <Ionicons name="checkmark-circle" size={24} color="#093659" />
        <Text style={styles.text}>Tu contraseña fue actualizada con éxito</Text>
        <Pressable>
          <Entypo name="cross" size={20} color="gray" />
        </Pressable>
      </View>

      <View style={styles.notification}>
        <MaterialCommunityIcons name="calendar-clock" size={24} color="#093659" />
        <Text style={styles.text}>Tu viaje comienza en 2 días</Text>
        <Pressable>
          <Entypo name="cross" size={20} color="gray" />
        </Pressable>
      </View>

      <View style={styles.notification}>
        <FontAwesome name="envelope" size={24} color="#093659" />
        <Text style={styles.text}>Tienes 1 solicitud de mensaje</Text>
        <Pressable>
          <Entypo name="cross" size={20} color="gray" />
        </Pressable>
      </View>

      <View style={styles.notification}>
        <FontAwesome name="user-plus" size={24} color="#093659" />
        <Text style={styles.text}>Tienes 1 nueva solicitud de amistad</Text>
        <Pressable>
          <Entypo name="cross" size={20} color="gray" />
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#093659',
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  text: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 14,
    color: '#1E1E1E',
  },
});
