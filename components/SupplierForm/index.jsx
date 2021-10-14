import {
  Form,
  InputForm,
  ContainerCheck,
  ButtonForm,
  TextForm,
  AceptTerms,
  TextareaForm,
} from './styles';

function SupplierForm() {
  return (
    <Form>
      <TextForm htmlFor="name">Nombre Completo</TextForm>
      <InputForm
        id="name"
        name="name"
        type="text"
        autoComplete="name"
        required
      />
      <TextForm htmlFor="celphone">Numero Celular</TextForm>
      <InputForm
        id="celphone"
        name="celphone"
        type="text"
        autoComplete="celphone"
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
      <TextForm htmlFor="instagram">Perfil de Instagram</TextForm>
      <InputForm
        id="instagram"
        name="instagram"
        type="text"
        autoComplete="instagram"
        required
      />
      <TextForm>
        ¿Que tipo de experiencias quieres ofrecer con nosotros?
      </TextForm>
      <ContainerCheck>
        <div>
          <label className="label-form">
            Aventura
            <input name="aventure" type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="label-form">
            Naturaleza
            <input name="nature" type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="label-form">
            Turismo
            <input name="tourism" type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="label-form">
            Espirituales y relajación
            <input name="spiritual" type="checkbox" />
            <span className="checkmark" />
          </label>
        </div>
        <div>
          <label className="label-form">
            Románticas
            <input name="romantic" type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="label-form">
            Gastronomicas
            <input name="gastronomic" type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="label-form">
            Cultural
            <input name="culture" type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="label-form">
            Estilo de vida exclusivo
            <input name="culture" type="checkbox" />
            <span className="checkmark" />
          </label>
        </div>
      </ContainerCheck>
      <TextForm>
        ¿Qué hace diferente las experiencias que bridandas comparadas con otras
        ofertas del mercado?
      </TextForm>
      <TextareaForm />
      <AceptTerms>
        <label className="label-form">
          Acepto el tratamiento de datos personales
          <input name="acept-terms" type="checkbox" />
          <span className="checkmark" />
        </label>
      </AceptTerms>
      <ButtonForm type="submit">Registrame gratis</ButtonForm>
    </Form>
  );
}

export default SupplierForm;
