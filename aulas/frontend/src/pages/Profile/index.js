import React from 'react';

import logoImg from '../../assets/logo.svg';

export default function Profile(){
    return( 
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo"/>
                <span>Bem Vinda, AACD</span>
            </header>
        </div>
    )
}