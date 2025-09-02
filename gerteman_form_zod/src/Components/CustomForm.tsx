
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type formValues } from "./models/";
import { InputForm } from "./components/InputForm";

const CustomForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors } } = useForm<formValues>({
      resolver: zodResolver(schema),
      mode: "onBlur", //Modo que se quiere validar
      defaultValues: { //Valores por default para que no salga error en la terminal
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }

    });

  const onSubmit: SubmitHandler<formValues> = (data) => {
    console.log(data);
  };

  return (<form action="" onSubmit={handleSubmit(onSubmit)}>
    <InputForm control={control} name="name" label="Name" type="text" error={errors.name} />
    <InputForm control={control} name="email" label="Email" type="email" error={errors.email} />
    <InputForm control={control} name="password" label="Password" type="password" error={errors.password} />
    <InputForm control={control} name="confirmPassword" label="Confirm Password" type="password" error={errors.confirmPassword} />
    <button type="submit">Submit</button>
  </form>);
};

export default CustomForm;