import { useCustomNavigation } from "@/hooks/useNavigation";
import { FIREBASE_AUTH } from "@/utils/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { Button, KeyboardAvoidingView, TextInput, View } from "react-native";

const Login = () => {
  const auth = FIREBASE_AUTH;
  const { navigate } = useCustomNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const loginResponse = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (loginResponse) navigate("Home");
    } catch (error: any) {
      alert("Login failed: " + error?.message);
    }
  };

  const handleRegister = async () => {
    try {
      const registerResponse = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (registerResponse) alert("Account successfully created!");
    } catch (error: any) {
      alert("Registration failed: " + error?.message);
    }
  };

  return (
    <View>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          value={email}
          placeholder="Email*"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          value={password}
          placeholder="Password*"
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Sign in" onPress={handleLogin} />
        <Button title="Create account" onPress={handleRegister} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
