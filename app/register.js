import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/colors';

export default function Register() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Ba2eya</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>Hello! Register to get started.</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput style={styles.input} placeholder="Confirm password" secureTextEntry />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <Text style={styles.or}>— Or continue with —</Text>

        <View style={styles.socials}>
          <Text>G</Text>
          <Text></Text>
          <Text>f</Text>
        </View>

        <Text style={styles.footer}>
          Already have an account?{' '}
          <Text style={styles.link} onPress={() => router.push('/login')}>
            Login Now
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    height: 220,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: { color: '#fff', fontSize: 32, fontWeight: '700' },
  form: { padding: 24 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 24 },
  label: { fontSize: 12, color: COLORS.textLight, marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
  },
  forgot: {
    alignSelf: 'flex-end',
    color: COLORS.primary,
    marginBottom: 24,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  or: { textAlign: 'center', color: COLORS.textLight, marginBottom: 16 },
  socials: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    marginBottom: 24,
  },
  footer: { textAlign: 'center', color: COLORS.textLight },
  link: { color: COLORS.primary, fontWeight: '600' },
});
