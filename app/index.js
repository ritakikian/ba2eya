import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ba2eya</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/login')}
          >
          <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/register')}
          >
          <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE724D',
  },
  logo : {
    color: '#fff',
    fontSize: 36,
    fontWeight: '700',
  },
  actions: {
    padding: 32, gap: 16,
  },
  button: {
    backgroundColor: '#FE724D',
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});