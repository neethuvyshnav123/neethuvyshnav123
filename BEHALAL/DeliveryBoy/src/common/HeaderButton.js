import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Entypo';



const CustomHeaderButton = props => {
  return (
    <HeaderButton>
        < Icon name="menu" size={30} color="#900" light />
    </HeaderButton>
  );
};

export default CustomHeaderButton;