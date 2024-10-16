import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IHomeList, HomeType } from "../../core/store/slices/HomeListSlice";
import * as S from "../../global";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { addNewHome } from "../../core/store/slices/HomeListSlice";


export interface CreateHomeFormProps {
  handleClose: () => void;
}

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  width: 80%;
  margin: 2.8rem auto;
`;

export default function CreateHomeForm({ handleClose }: CreateHomeFormProps) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IHomeList>();
  const onSubmit: SubmitHandler<IHomeList> = (data) => {
    let code = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    let newData: IHomeList = {...data, "home_id": code}

    dispatch(addNewHome(newData));
    handleClose();
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <FormControl variant="standard">
          <InputLabel error={errors.home_type ? true : false}>
            Home type
          </InputLabel>
          <Select
            {...register("home_type", { required: true })}
            error={errors.home_type ? true : false}
          >
            <MenuItem value={HomeType.apart}>Apartment</MenuItem>
            <MenuItem value={HomeType.house}>House</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Home title"
          variant="standard"
          fullWidth
          {...register("home_title", { required: true, minLength: 4 })}
          error={errors.home_title ? true : false}
        />

        <TextField
          label="Home address"
          variant="standard"
          fullWidth
          {...register("address", { required: true, minLength: 4 })}
          error={errors.address ? true : false}
        />
      </FormContent>

      <S.ModalActions>
        <S.BaseButton onClick={handleClose}>Cancel</S.BaseButton>
        <S.BaseButton type="submit" color="primary">
          Create
        </S.BaseButton>
      </S.ModalActions>
    </form>
  );
}
