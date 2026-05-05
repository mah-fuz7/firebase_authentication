 
const Home = () => {
    return (
       <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://i.ibb.co.com/PGb9rTdv/b-w.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold animate-bounce">Wellcome to Firebase🔥</h1>
      <p className="mb-5">
Authentication and Authoraization
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Home;