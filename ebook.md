# 1. Criar um novo projeto Expo:
expo init flipboard-game

# 2. Se o Expo CLI não estiver instalado ou se você quiser reinstalá-lo:
npm install -g expo-cli

# 3. Use o Expo CLI Local:
npx create-expo-app flipboard-game

# 4. ✅ Your project is ready!

To run your project, navigate to the directory and run one of the following npm commands.

- cd flipboard-game
- npm start # you can open iOS, Android, or web from here, or run them directly with the commands below.        
- npm run android >>> (npx expo start) <<< 
- npm run ios # requires an iOS device or macOS for access to an iOS simulator
- npm run web

# 5. It looks like you're trying to use web support but don't have the required dependencies installed.

##   Please install react-native-web@~0.19.10, react-dom@18.2.0, @expo/metro-runtime@~3.2.3 by running:

npx expo install react-native-web react-dom @expo/metro-runtime

# Logs for your project will appear below. Press Ctrl+C to exit.
# It looks like you're trying to use web support but don't have the required dependencies installed.

# Please install react-native-web@~0.19.10, react-dom@18.2.0, @expo/metro-runtime@~3.2.3 by running:

npx expo install react-native-web react-dom @expo/metro-runtime

# If you're not using web, please ensure you remove the "web" string from the platforms array in the project Expo config.

