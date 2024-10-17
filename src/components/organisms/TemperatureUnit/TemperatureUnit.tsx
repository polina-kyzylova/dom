import React from "react";
import Radio from "@mui/material/Radio";
import { theme } from "../../../core/theme/index";
import * as S from './styled';


const RadioTheme = {
  color: theme.colors.disabled,
  "&.Mui-checked": {
    color: theme.colors.lightRed,
  },
};


export default function TemperatureUnit() {
  const [selectedValue, setSelectedValue] = React.useState("auto");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    inputProps: { "aria-label": item },
  });

  return (
    <S.TemperCard>
      <div>Chart</div>

      <div>
        <p>Mode</p>
        <div>
          <Radio id="auto" {...controlProps("auto")} sx={RadioTheme} />
          <S.RadioLabel isChecked={(selectedValue === "auto")!!} htmlFor="auto">
            Auto
          </S.RadioLabel>

          <Radio id="custom" {...controlProps("custom")} sx={RadioTheme} />
          <S.RadioLabel
            isChecked={(selectedValue === "custom")!!}
            htmlFor="custom"
          >
            Custom
          </S.RadioLabel>


          <Radio id="off" {...controlProps("off")} sx={RadioTheme} />
          <S.RadioLabel
            isChecked={(selectedValue === "off")!!}
            htmlFor="off"
          >
            Off
          </S.RadioLabel>
        </div>
      </div>
    </S.TemperCard>
  );
}
