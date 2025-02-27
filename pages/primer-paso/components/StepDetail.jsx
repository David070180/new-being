import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const steps = [
    {
        key: 'step1',
        title: 'Paso 1',
        buttonText: 'Mas informacion',
        redirect: '/trastornos',
        description: (
            <p className="text-[16px] lg:pr-[300px]">
                <b>El primer paso ya lo has dado,</b> estas en busca de
                informacion y has
                llegado al lugar correcto.
                <br />
                Sabemos que no es facil, y en este momento el futuro parece
                incierto,
                queremos ayudarte a resolver cualquier duda con respecto a tu{' '}
                situacion y como resolverla. <br />
                <br />
                <b>
                    Conoce mas acerca de los signos, sintomas y consecuencias.
                </b>
            </p>
        ),
    },
    {
        key: 'step2',
        title: 'Paso 2',
        buttonText: 'Contactanos',
        redirect: '',
        description: (
            <p className="text-[16px] lg:pr-[300px]">
                Ahora que conoces mas de tu situacion es importante que
                <b>contactes</b> a uno de nuestros profesionales para que te
                asesore y
                responda a todas tus preguntas. <br />
                <br />
                Ya sea que tu familiar no acepte ayuda o si lo haga, uno de
                nuestros
                profesionales te asesorara en la metodologia de intervencion
                para
                lograr, un ingreso volutario y a si aumentar las posibilidades
                de una
                rehabilitacion exitosa,{' '}
                <b>llamanos ahora para solucionar tu situacion.</b>
            </p>
        ),
    },
    {
        key: 'step3',
        title: 'Paso 3',
        redirect: '/tratamientos',
        buttonText: 'Mas informacion',
        description: (
            <p className="text-[16px] lg:pr-[300px]">
                La intervencion oportuna es la clave para{' '}
                <b> solucion efectiva y a </b>
                <b>largo plazo.</b> <br />
                <br />
                Sabemos que hablar sobre los trastornos con un familiar no es tarea sencilla{' '}
                no es tarea sencilla, es por eso que contamos con especialistas
                en
                intervencion en crisis, quienes desarrollan junto contigo un
                plan
                individualizado para una <b>intervencion exitosa</b> y asi
                lograr un <b>ingreso</b>
                <b>voluntario.</b>
            </p>
        ),
    },
    {
        key: 'step4',
        title: 'Paso 4',
        buttonText: 'Mas informacion',
        redirect: '/tratamientos',
        description: (
            <p className="text-[16px] lg:pr-[300px]">
                Nuestros tratamientos son efectivos por que{' '}
                <b>trabajamos junto con la </b>
                <b>persona y su familia </b> en todas las áreas de su vida.{' '}
                <br />
                <br />
                En CLINICA NUEVO SER contamos con una <b>
                    amplia experiencia{' '}
                </b>{' '}
                en el tratamiento integral a todo tipo de
                trastornos de personalidad, atendiendo de forma{' '}
                <b>individualizada</b>
                todas las áreas del ser humano, su salud mental, física,
                espiritual y la
                familia. <br />
                <br />
                <b>
                    Conoce nuestros tratamientos y las soluciones que podemos
                    ofrecer.
                </b>
            </p>
        ),
    },
];

export default function StepDetail() {
    return (
        <>
            {steps?.map((step, index) => {
                if (step.key === 'step4') {
                    return (
                        <div className="bg-[#15284B]" key={step.title}>
                            <div className="lg:rounded-br-[430px] bg-white grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:p-10 lg:p-10">
                                <div className="grid grid-rows-1 place-items-center">
                                    <div>
                                        <p className="text-6xl mb-4 font-bold text-center">
                                            {step.title}
                                        </p>
                                    </div>
                                    <div>
                                        <Image
                                            src={require(`../../../public/assets/step${index + 1}.png`)}
                                            alt="section1"
                                            width={250}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-rows-1">
                                    <div className="p-8 md:p-2">
                                        <p className="text-4xl text-cyan-300 mb-8">
                                            {step.title}
                                        </p>
                                        <div>
                                            {step.description}
                                            <Link href={step.redirect}>
                                                <button className="outline outline-8 p-4 ml-4 rounded-2xl mt-8 mb-8 border-black">
                                                    <p className="text-cyan-500">
                                                        {step.buttonText}
                                                    </p>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                return (
                    <div className="p-8" key={step.title}>
                        <div className="lg:rounded-br-[430px] bg-white grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                            <div className="grid grid-rows-1 place-items-center">
                                <p className="text-6xl mb-4 font-bold text-center">
                                    {step.title}
                                </p>
                                <Image
                                    src={require(`../../../public/assets/step${index + 1}.png`)}
                                    alt="section1"
                                    width={250}
                                    loading="lazy"
                                />
                            </div>
                            <div className="grid grid-rows-1">
                                <div className="">
                                    <p className="text-4xl text-cyan-300 mb-8 mt-20">
                                        {step.title}
                                    </p>
                                    <div>
                                        {step.description}
                                        <Link href={step.redirect}>
                                            <button className="outline outline-8 p-4 ml-4 rounded-2xl mt-8 border-black">
                                                <p className="text-cyan-500">
                                                    {step.buttonText}
                                                </p>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
