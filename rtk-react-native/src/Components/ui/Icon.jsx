import { Ionicons } from '@expo/vector-icons';

const Icon = ({ name, size = 32, color }) => {
    return <Ionicons name={name} size={size} color={color} />;
};

export default Icon;