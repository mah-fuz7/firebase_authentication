 
const MyContainer = ({className="",children,url}) => {
    return (
        <div
  className={`hero min-h-screen bg-cover bg-center bg-no-repeat ${className}`}
  style={{
    backgroundImage:url ?
      `url(${url})`:"none"
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content  text-center w-full">
    <div className="w-full ">
      {children}
    </div>
  </div>
</div>
    );
};

export default MyContainer;