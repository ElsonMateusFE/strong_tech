class Card {
  title: string
  image: string
  descricao: string
  action: string

  constructor(title: string, image: string, descricao: string, action: string) {
    this.title = title
    this.image = image
    this.descricao = descricao
    this.action = action
  }
}

export default Card
