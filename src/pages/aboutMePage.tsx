import { DescriptionComp } from "../components/descriptionComp/DescriptionComp"

export const AboutMePage = () => {
  return (
    <>
      <DescriptionComp description="Hola, soy Brandon Hernandez Rocha. Estoy soltero y vivo con mis padres. 
    Mis pasatiempos favoritos son pasar con mi familia. Disfruto el tiempo libre sacando a mis mascotas a pasear, hacer jardinería, hacer ejercicio por las mañanas y jugar videojuegos con mis amigos por las noches. Mi comida favorita son el pollo en adobo rojo. Mis deportes favorito es el futbol y el ajedrez."/>
      <figure className="text-center">
        <img src="https://media1.tenor.com/m/yWSRmymbuBkAAAAC/waving-hi.gif" alt="gif_saludo" style={{ maxWidth: '100px' }} />
      </figure>
    </>
  )
}
