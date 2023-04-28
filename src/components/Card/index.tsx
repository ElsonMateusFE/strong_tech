type Props = {
  title: string
  image: string
  descricao: string
  action: string
}

const Card = ({ title, image, descricao, action }: Props) => (
  <section>
    <h3>{title}</h3>
    <div>
      <img src={image} alt={title} />
      <main>
        <p>{descricao}</p>
        <a href={action}>Saiba mais</a>
      </main>
    </div>
  </section>
)

export default Card
