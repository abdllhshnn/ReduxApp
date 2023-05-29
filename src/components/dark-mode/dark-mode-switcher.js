import React from 'react'
import { Form } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode } from '../../store/slices/theme'
import { $t } from '../../helpers/locale-helper';
const DarkModeSwitcher = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const dispatch = useDispatch();
  
    return (
      <div>
        <Form.Check
          type="switch"
          id="dmSwitch"
          label={darkMode ? $t("dark-mode") : $t("dark-mode")}
          checked={darkMode}
          onChange={() => dispatch(setDarkMode(!darkMode))}
        />
      </div>
    );
  };
  

export default DarkModeSwitcher