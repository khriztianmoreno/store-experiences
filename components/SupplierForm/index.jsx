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
  TextareaForm,
} from './styles';

function SupplierForm() {
  const router = useRouter();
  const { form, handleChange } = useForm({});

  const validateForm = () => {
    const { name, email, phone, aceptTerms } = form;
    const isValid = name && email && aceptTerms && phone;

    return isValid;
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const newLead = {
      ...form,
      perfilType: 'Supplier',
    };

    try {
      await registerdLead(newLead, 'registerSupplier');
      router.push('/success?type=supplier');
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
      <TextForm htmlFor="phone">* Numero Celular</TextForm>
      <InputForm
        id="phone"
        name="phone"
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
      <TextForm htmlFor="instagram">Perfil de Instagram</TextForm>
      <InputForm
        id="instagram"
        name="instagram"
        type="text"
        onChange={handleChange}
      />
      <TextForm>
        ¿Que tipo de experiencias quieres ofrecer con nosotros?
      </TextForm>
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
      <TextForm name="description" onChange={handleChange} required>
        * ¿Qué hace diferente las experiencias que bridandas comparadas con
        otras ofertas del mercado?
      </TextForm>
      <TextareaForm />
      <AceptTerms>
        <label className="label-form">
          Acepto el tratamiento de datos personales *
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

export default SupplierForm;
