export default function Section3() {
  return (
    <div className="text-[#15284B]">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 place-items-center justify-items-center p-8">
        <div className="grid lg:grid-rows-2 md:grid-rows-1 justify-items-start lg:p-20">
          <div className="">
            <h3 className="flex font-semibold lg:text-3xl text-xl text-[#15284B] mb-[20px]">Playas de Tijuana</h3>
            <h3 className="flex font-semibold lg:text-3xl text-xl text-[#15284B] mb-[30px]">CLÍNICA DE ATENCIÓN SECUNDARIA</h3>
            
          </div>
          <div className="p-2">
            <p>
              Nuestra Unidad de Atención Secundaria y Post-Tratamiento de trastornos es un espacio acondicionado para la recuperación de las personas de forma integral. Cuenta con espacios para sesiones de grupo y terapias individuales, amplio comedor, así como alberca, patios y cómodas habitaciones.
            </p>
            <br />
            <p className="underline decoration-solid">
              <a href="https://www.google.com/maps/place/Parral+3041,+Sta+Lucia,+22705+Rosarito,+B.C.,+M%C3%A9xico/@32.4048869,-117.0603072,17z/data=!3m1!4b1!4m5!3m4!1s0x80d936b493327e4d:0x1b83aa2e94b9bfba!8m2!3d32.404827!4d-117.060246">
                Calle Londres #3551, Sección Costa Azul, Playas de Tijuana, C.P. 22506, Tijuana, B.C. México.
              </a>
            </p>
          </div>
        </div>
        <div className="w-auto h-auto grid place-items-center">
          {/* TODO: cambiar imagen por icon */}
          <img
            src='../assets/CLINICA_SER-1.jpg'
            alt="Como Actuar"
            style={{ borderRadius: "55%", width: '400px', height: "400px" }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}