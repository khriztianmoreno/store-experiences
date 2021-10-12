import {
  RegisterForm,
  LabelForm,
  InputForm,
  CheckForm,
  ContainerCheck,
  ButtonForm,
  TextForm,
  AceptTerms,
} from './styles';

function Form() {
  return (
    <RegisterForm>
      <TextForm htmlFor="name">Nombre Completo</TextForm>
      <InputForm
        id="name"
        name="name"
        type="text"
        autoComplete="name"
        required
      />
      <TextForm htmlFor="email">Email</TextForm>
      <InputForm
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <TextForm>¿Qué tipo de experiencias te gustaría vivir?</TextForm>
      <ContainerCheck>
        <div>
          <LabelForm>
            <CheckForm name="aventure" type="checkbox" />
            Aventura
          </LabelForm>
          <LabelForm>
            <CheckForm name="nature" type="checkbox" />
            Naturaleza
          </LabelForm>
          <LabelForm>
            <CheckForm name="tourism" type="checkbox" />
            Turismo
          </LabelForm>
          <LabelForm>
            <CheckForm name="spiritual" type="checkbox" />
            Espirituales y relajación
          </LabelForm>
        </div>
        <div>
          <LabelForm>
            <CheckForm name="romantic" type="checkbox" />
            Románticas
          </LabelForm>
          <LabelForm>
            <CheckForm name="gastronomic" type="checkbox" />
            Gastronomicas
          </LabelForm>
          <LabelForm>
            <CheckForm name="culture" type="checkbox" />
            Cultural
          </LabelForm>
          <LabelForm>
            <CheckForm name="vip" type="checkbox" />
            Estilo de vida exclusivo
          </LabelForm>
        </div>
      </ContainerCheck>
      <AceptTerms>
        <CheckForm name="acept-terms" type="checkbox" />
        Acepto el tratamiento de datos personales
      </AceptTerms>
      <ButtonForm type="submit">Registrame gratis</ButtonForm>
    </RegisterForm>
  );
}

export default Form;
