
const Home = () => {

    let handleClick = (e) => {
        console.log('Hello , Friends',e);
    }
    let handleSecondClick = (name , e) => {
        console.log('Hello , '+name);
        console.log(e.target);
    }
    return (
        <>
           <div className="home">
              <h2>HomePage </h2> 
              <button onClick={handleClick}>Click Me</button>
              <button onClick={(e) => {handleSecondClick('Mario',e)}}>Click Me Again</button>
            </div> 
        </>
    )
}

export default Home
