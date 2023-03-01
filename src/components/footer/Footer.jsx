import './Footer.css'

const Footer = (props) => {
  return (
    <div className="Footer">
      Demo E-Shop &copy; {props.year} - All Right Reserved || Designed By {props.name}
    </div>
  )
}

export default Footer
