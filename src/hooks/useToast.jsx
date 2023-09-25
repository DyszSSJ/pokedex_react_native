import Toast from 'react-native-toast-message';
export const useToast = () => {
  const showToast = (type, text, texto2) => {
    Toast.show({
      type: type,
      text1: text,
      text2: texto2,
      position: 'bottom',
      visibilityTime: 2000,
    });
  };

  return {
    showToast,
  };
};
