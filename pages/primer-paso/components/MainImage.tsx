import React from 'react';
import image from '../../../public/assets/friends.png';
import Image from 'next/image';

export default function MainImage() {
    return (
        <div className="w-full h-screen text-white z-1">
            <Image
                src={image}
                className="w-screen h-screen object-cover absolute mix-blend-overlay"
                alt="Home"
                loading="lazy"
            />
            <div className="w-full h-screen  pl-36 mx auto text-left flex flex-col justify-center bg-cover bg-center mt-[90px]">
                <h1 className="md:text-7xl sm:text-6xl font-bold">
                    El primer paso
                </h1>
                <h3 className="md:text-4xl sm:text-3xl text-cl font-bold pb-10">
                    hacia una vida libre de addicciones
                </h3>
                <p className="text-[20px]">
                    Estamos aqui para ayudarte en tu tratamiento, sabemos que
                    este
                </p>
                <p className="text-[20px]">
                    primer paso es dificil de tomar, por lo que si tienes alguna
                    duda o
                </p>
                <p className="text-[20px]">
                    preocupacion no dudes en contactarte con nosotros.
                </p>
            </div>
        </div>
    );
}
