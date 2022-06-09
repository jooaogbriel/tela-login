import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import Riot from "../images/riot.png"
import Meta from "../images/meta.png"
import Google from "../images/google.png"
import Apple from "../images/apple.png"


export const Form = () => {

    const [user,Setuser] = useState([])

    const history = useHistory();

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("Email obrigatório").email("Email inválido").matches(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,"Email inválido"),
        password: yup.string().required("Senha obrigatória").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/,"Senha obrigatória"),
        confirmPassword: yup.string().oneOf([yup.ref("password")],"Senha não identica")
    })

    const { register,handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(formSchema),

    }) 

    const onSubmitFunction = (data) => {
        if(user){
            Setuser([...user,data])
            history.push(`/userpage/ ${data.name}`)
        }
    }

    return (
        <>
        <img src={ Riot } className='login__logo'></img>
        <h1 className='login__title'> Fazer login</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>

            <label className='login__label'>
                <span className='span-active'>nome do usuário</span>
                <input type="text" className="input" {...register("name")}/>
                {errors.name?.message}
            </label>

            <label className='login__label'>
            <span className='span-active'>email</span>
                <input type="text" className="input" {...register("email")}/>
                {errors.email?.message}
            </label>

            <label className='login__label'>
            <span className='span-active'>senha</span>
                <input type="password" className="input" {...register("password")}/>
                {errors.password?.message}
            </label>

            <label className='login__label'>
            <span className='span-active'>confirmar senha</span>
                <input type="password" className="input" {...register("confirmPassword")}/>
                {errors.confirmPassword?.message}
            </label>

            <div class="login__icons">
          <button type="button" class="icons__button">
            <img src={Meta} alt="facebok"/>
          </button>
  
          <button type="button" class="icons__button">
            <img src={Google} alt="google"/>
          </button>
  
          <button type="button" class="icons__button">
            <img src={Apple} alt="apple"/>
          </button>
        </div>

        <label class="login__label--checkbox">
          <input type="checkbox" class="input--checkbox"/>
          Manter login
        </label>

        <div class="wrapper">
        <button type="submit" class="login__button" >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/>
          </svg>
        </button>
        
        </div>
        
        <a href="#" class="login__link">não consegue iniciar sessão?</a>
        <a href="#" class="login__link">criar conta</a>
        
        </form>

        </>
    )
}