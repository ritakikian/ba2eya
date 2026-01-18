import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/colors';
import { auth } from '../lib/firebase';
export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace('/(tabs)');
    } catch (error) {
      Alert.alert('Registration failed', error.message);
    } finally {
      setLoading(false);
    }
  };
  const passwordMatch = password && confirmPassword && password === confirmPassword;
  const isDisabled = !email || !password || !passwordMatch || loading;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Ba2eya</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>Hello! Register to get started.</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry value={password} onChangeText={setPassword}/>

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput style={styles.input} placeholder="Confirm password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword}/>

        {!passwordMatch && confirmPassword.length > 0 && (
          <Text style={styles.error}>Passwords do not match</Text>)}

        <TouchableOpacity style={[styles.button, isDisabled  && { opacity: 0.6 },]} disabled={isDisabled || loading} 
          onPress={handleRegister}>
          <Text style={styles.buttonText}>
            {loading ? 'Loading...' : 'Register'}
          </Text>
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
  title: { fontSize: 32, textAlign: 'center', fontWeight: '700', marginBottom: 24 },
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
