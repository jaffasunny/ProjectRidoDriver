import React, {useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDown = ({onChange, value, setGenderValue, errors}) => {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const [items, setItems] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ]);

  useEffect(() => {
    setGenderValue(value);
  }, [value]);

  return (
    <DropDownPicker
      dropDownContainerStyle={{borderColor: '#dfdfdf'}}
      style={{
        borderRadius: 4,
        backgroundColor: '#171717',
        borderColor: focus ? 'blue' : errors ? 'red' : '#171717',
      }}
      textStyle={{color: '#fff'}}
      listItemLabelStyle={{color: 'black'}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={onChange}
      setItems={setItems}
      onPress={() => setFocus(true)}
      onClose={() => setFocus(!focus)}
      placeholder=""
    />
  );
};

export default DropDown;
