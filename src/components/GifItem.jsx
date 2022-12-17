
export const GifItem = ({title, url}) => {
    /*<li key = {id}>{title}</li>*/
  return (
    <div className='card'>
        <img src = {url} alt = {title} />
    </div>
  )
}
