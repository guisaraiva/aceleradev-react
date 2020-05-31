mport React, { useState } from 'react';


import SuccessMessage from '../../components/SuccessMessage';

import Form from './Form';


import './UserForm.scss';


// fazer fetch post para adicionar novos usuários


const UserForm = () => {

  const [name, setName] = useState("");

  const [user, setUser] = useState("");

  const [email, setEmail] = useState("");

  const [urlImg, setUrlImg] = useState("");

  const [showMessage, setMessage] = useState(false);


  const handleChange = (callback, value) => callback(value);


  return (

    <React.Fragment>

      <section className="post__form" data-testid="user-form">

      <div className="container">

        <div className="post__form__wrapper">

          <Form 

            title="Nome"

            type="text"

            value={name}

            onChange={e => handleChange(setName, e.target.value)}

            placeholder="Ex: Fulano da Silva"

          />

          <Form 

            title="Usuário"

            type="text"

            value={user}

            onChange={e => handleChange(setUser, e.target.value)}

            placeholder="Ex: fulano_da_silva"

          />

          <Form 

            title="Email"

            type="email"

            value={email}

            onChange={e => handleChange(setEmail, e.target.value)}

            placeholder="Ex: fulado@provedor.com"

          />

          <Form 

            title="Url da Imagem de Perfil (use a url da imagem do LinkedIn)"

            type="text"

            value={urlImg}

            onChange={e => handleChange(setUrlImg, e.target.value)}

            placeholder="http://.."

          />

          <button type="button" onClick={() => setMessage(true)}>Cadastrar</button>

        </div>

      </div>

    </section>

    

    {showMessage && (

      <SuccessMessage />

    )}

    </React.Fragment>

  );

};


export default UserForm;

