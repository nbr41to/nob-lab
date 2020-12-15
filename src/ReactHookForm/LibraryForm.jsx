import React from 'react'
import { useForm, Controller } from 'react-hook-form'

// Material-UI
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Input,
  InputLabel,
  TextField,
  Radio,
  RadioGroup,
  Button,
} from '@material-ui/core';

export const LibraryForm = () => {
  {/* Controllerを使う */ }
  const { handleSubmit, register, errors, control } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <form
        className="box flex column"
        style={{ backgroundColor: "white", color: "black" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>form2(Material-UI)</h2>
        <br />
        {/* nameとrefを指定できれば制御可能 */}
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          inputRef={register}
        />
        <br />
        {/* <FormControl component="fieldset"> */}
        <InputLabel htmlFor="input">Email address</InputLabel>
        <Input
          id="input"
          name="email"
          variant="outlined"
          inputRef={register}
        />
        {/* </FormControl> */}
        {/* formControlいらない？ */}

        {/* refを設定できないコンポーネントの場合 */}
        <div className="box">
          <FormLabel component="legend">Gender</FormLabel>
          <Controller
            name="gender"
            // control属性忘れずに
            control={control}
            // validation
            rules={{ required: true }}
            // component
            as={
              <RadioGroup aria-label="gender" name="gender1" >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
              </RadioGroup>
            }
          />
          {/* これでvalueを取得できる */}
          {errors.gender && <p>選択してください</p>}
          {/* validationはerrorsに入る */}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
