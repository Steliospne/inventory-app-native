import { View, Text } from "react-native";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <View
      className='p-4 rounded-lg'
      style={{
        shadowColor: "#171717",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}
    >
      <Text>{"Header Title"}</Text>
      <View className='bg-red-300'>{children}</View>
    </View>
  );
};

export default Card;
