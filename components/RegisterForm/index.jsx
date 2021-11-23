import { useRouter } from 'next/router';

import useForm from '../../hooks/useForm';
import { registerdLead } from '../../lib/services/registerdLeads';

import {
  Form,
  InputForm,
  ContainerCheck,
  ButtonForm,
  TextForm,
  AceptTerms,
} from './styles';

function RegisterForm() {
  const router = useRouter();
  const { form, handleChange } = useForm({});

  const validateForm = () => {
    const { name, email, aceptTerms } = form;
    const isValid = name && email && aceptTerms;

    return isValid;
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const newLead = {
      ...form,
      perfilType: 'User',
    };

    try {
      await registerdLead(newLead, 'registerLead');
      router.push('/success');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextForm htmlFor="name">* Nombre Completo</TextForm>
      <InputForm
        id="name"
        name="name"
        type="text"
        onChange={handleChange}
        required
      />
      <TextForm htmlFor="email">* Email</TextForm>
      <InputForm
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        required
      />
      <TextForm>¿Qué tipo de experiencias te gustaría vivir?</TextForm>
      <ContainerCheck>
        <div>
          <label className="label-form">
            Aventura
            <input name="adventure" type="checkbox" onChange={handleChange} />
            <span className="checkmark" />
          </label>
          <label className="label-form">
            Naturaleza
            <input name="nature" type="checkbox" onChange={handleChange} />
            <span className="checkmark" />
          </label>
          <label className="label-form">
            Turismo
            <input name="tourism" type="checkbox" onChange={handleChange} />
            <span className="checkmark" />
          </label>
          <label className="label-form">
            Espirituales y relajación
            <input
              name="spiritualRelaxation"
              type="checkbox"
              onChange={handleChange}
            />
            <span className="checkmark" />
          </label>
        </div>
        <div>
          <label className="label-form">
            Románticas
            <input name="romantic" type="checkbox" onChange={handleChange} />
            <span className="checkmark" />
          </label>
          <label className="label-form">
            Gastronomicas
            <input
              name="gastronomics"
              type="checkbox"
              onChange={handleChange}
            />
            <span className="checkmark" />
          </label>
          <label className="label-form">
            Cultural
            <input name="culture" type="checkbox" onChange={handleChange} />
            <span className="checkmark" />
          </label>
          <label className="label-form">
            Estilo de vida exclusivo
            <input
              name="exclusiveLifestyle"
              type="checkbox"
              onChange={handleChange}
            />
            <span className="checkmark" />
          </label>
        </div>
      </ContainerCheck>
      <AceptTerms>
        <label className="label-form">
          * Acepto el tratamiento de datos personales
          <input
            name="aceptTerms"
            type="checkbox"
            required
            onChange={handleChange}
          />
          <span className="checkmark" />
        </label>
      </AceptTerms>
      <ButtonForm type="submit" disabled={!validateForm()}>
        Registrame gratis
      </ButtonForm>
    </Form>
  );
}

export default RegisterForm;
