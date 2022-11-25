function Destination(props) {
  return (
    <div className='destination-container'>
      <div className='image-container'>
        <img src={props.image}></img>
      </div>
      <div className='description-container'>
        <div className='navigation'>
          <span class="destination-pin material-symbols-outlined">location_on</span>
          <span className='location'>{props.location}</span>
          <span className='map-link'><a href={props.link} target='_blank'>View on Google Maps</a></span>
        </div>
        <h2 className='atraction'>{props.atraction}</h2>
        <p className='date'>{props.date}</p>
        <p className='fact' >{props.description}</p>
      </div>
    </div>
  );
};

export default Destination;