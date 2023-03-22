import {View, Text} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDown = ({selectedItemContainerStyle}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ]);

  return (
    <DropDownPicker
      style={{
        borderRadius: 4,
        borderColor: '#171717',
        backgroundColor: '#171717',
      }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder=""
    />
  );
};

export default DropDown;
