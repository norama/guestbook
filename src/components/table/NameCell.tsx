interface INameCell {
  text: string
}

const NameCell = ({ text }: INameCell) => <strong>{text}</strong>

export default NameCell
