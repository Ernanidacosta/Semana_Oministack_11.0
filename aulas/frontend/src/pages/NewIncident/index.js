import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import './styles.css';

import logoImg from "../../assets/logo.svg";
import api from '../../services/api';

export default function NewIncident() {
    const [title, setTitle]= useState('');
    const [description, setTitleDescription]= useState('');
    const [value, setValue]= useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
      e.preventDefault();

      const data = {
        title,
        description,
        value,
      };
      try {
        await api.post('incidents', data, {
          headers:{
            Authorization: ongId,
          }
        })

        history.push('/profile');
      } catch (err) {
        alert('Erro ao cadastrar novo caso, tente novamente.')
      }
    }


    return (<div className="new-incident-container">
    <div className="content">
      <section>
        <img src={logoImg} alt="Logo" />
        <h1>Cadastrar Novo Caso</h1>
        <p>
          Descreva o caso detalhadamente para encontrar um herói que o resolva
        </p>

        <Link className="back-link" to="/profile">
          <FiArrowLeft size={16} color="#E02041" />
          Voltar ao Inicio
        </Link>
      </section>
      <form onSubmit={handleNewIncident}>
            <input 
              placeholder="Titulo do Caso"
              value={title}
              onChange={e=> setTitle(e.target.value)}  
            />
            <textarea 
              placeholder="Descrição"
              value={description}
              onChange={e=> setTitleDescription(e.target.value)}  
            />
            <input 
              placeholder="Valor em Reais"
              value={value}
              onChange={e=> setValue(e.target.value)}  
            />
            <button className="button" type="submit">Cadastrar</button>
      </form>
    </div>
  </div>)
}