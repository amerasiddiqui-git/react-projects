function Cards(props) {
  return (
      <div className="cards-box">
        <img src="https://images.unsplash.com/photo-1757317202611-5047086e9024?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h4>{props.Name}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>view now</button>
      </div> 
  );
}
export default Cards;
