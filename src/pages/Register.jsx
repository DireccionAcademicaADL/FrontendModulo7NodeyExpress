import { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";

const RegisterPage = () => {
  const { registerWithEmailAndPassword } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerWithEmailAndPassword(email, password);
    alert(response?.message || "Something went wrong");
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create account
        </button>
      </form>
    </div>
  );
};
export default RegisterPage;
