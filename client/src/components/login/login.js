import { NavBar } from "../navbar/navbar";

export const Login=()=>{
    return(
        <>
        {/* <NavBar/> */}
        <section className="container">
        <header>Login</header>
        <form action="#" className="form">
          <div className="input-box">
            <label>Email Address</label>
            <input type="text" placeholder="Enter email address" required />
          </div>
          <div className="input-box">
            <label>Password</label>
            <input type="password" placeholder="Enter Password" required />
          </div>
          <button>Submit</button>
        </form>
      </section>
        </>
    );
}