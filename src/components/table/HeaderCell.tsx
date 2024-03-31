interface IHeaderCell {
  text: string
}

const HeaderCell = ({ text }: IHeaderCell) => <strong>{text}</strong>

export default HeaderCell
