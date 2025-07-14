import { Slot } from 'expo-router';
import { KeyboardAvoidingView, Platform } from 'react-native';

export default function Layout() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Slot />
    </KeyboardAvoidingView>
  );
}
