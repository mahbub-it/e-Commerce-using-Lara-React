import { Link } from 'react-router-dom'

const LoginForm = ({ onClose }) => {
  return (
    <>
      <div className="page-overlay" onClick={onClose} />
      <div className="aside aside_right aside_visible overflow-hidden customer-forms">
        <div className="customer-forms__wrapper d-flex position-relative">
          <div className="customer__login">
            <div className="aside-header d-flex align-items-center">
              <h3 className="text-uppercase fs-6 mb-0">Login</h3>
              <button className="btn-close-lg btn-close-aside ms-auto" onClick={onClose}></button>
            </div>
              {/* /.aside-header */}

              <form action="https://uomo-html.flexkitux.com/Demo9/login_register.html" method="POST" className="aside-content" onChange={(e) => {e.preventDefault(); console.log(e.target.value);}}>
                <div className="form-floating mb-3">
                  <input name="email" type="email" className="form-control form-control_gray" id="customerNameEmailInput"
                    placeholder="name@example.com" />
                  <label htmlFor="customerNameEmailInput">Username or email address *</label>
                </div>

                <div className="pb-3"></div>

                <div className="form-label-fixed mb-3">
                  <label htmlFor="customerPasswordInput" className="form-label">Password *</label>
                  <input name="password" id="customerPasswordInput" className="form-control form-control_gray" type="password"
                    placeholder="********" />
                </div>

                <div className="d-flex align-items-center mb-3 pb-2">
                  <div className="form-check mb-0">
                    <input name="remember" className="form-check-input form-check-input_fill" type="checkbox" value=""
                      id="flexCheckDefault" />
                    <label className="form-check-label text-secondary" htmlFor="flexCheckDefault">Remember me</label>
                  </div>
                  <Link to="reset_password.html" className="btn-text ms-auto">Lost password?</Link>
                </div>

                <button className="btn btn-primary w-100 text-uppercase" type="submit">
                  Log In
                </button>

                <div className="customer-option mt-4 text-center">
                  <span className="text-secondary">No account yet?</span>
                  <Link to="login_register.html#register-tab" className="btn-text js-show-register">Create Account</Link>
                </div>
              </form>
            </div>
            {/* /.customer__login */}

            <div className="customer__register">
              <div className="aside-header d-flex align-items-center">
                <h3 className="text-uppercase fs-6 mb-0">Create an account</h3>
                <button className="btn-close-lg btn-close-aside ms-auto" onClick={onClose}></button>
              </div>
              {/* /.aside-header */}

              <form action="https://uomo-html.flexkitux.com/Demo9/login_register.html" method="POST" className="aside-content">
                <div className="form-floating mb-4">
                  <input name="username" type="text" className="form-control form-control_gray" id="registerUserNameInput"
                    placeholder="Username" />
                  <label htmlFor="registerUserNameInput">Username</label>
                </div>

                <div className="pb-1"></div>

                <div className="form-floating mb-4">
                  <input name="email" type="email" className="form-control form-control_gray" id="registerUserEmailInput"
                    placeholder="user@company.com" />
                  <label htmlFor="registerUserEmailInput">Email address *</label>
                </div>

                <div className="pb-1"></div>

                <div className="form-label-fixed mb-4">
                  <label htmlFor="registerPasswordInput" className="form-label">Password *</label>
                  <input name="password" id="registerPasswordInput" className="form-control form-control_gray" type="password"
                    placeholder="*******" />
                </div>

                <p className="text-secondary mb-4">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and for
                  other purposes described in our privacy policy.
                </p>

                <button className="btn btn-primary w-100 text-uppercase" type="submit">
                  Register
                </button>

                <div className="customer-option mt-4 text-center">
                  <span className="text-secondary">Already have account?</span>
                  <Link to="#" className="btn-text js-show-login">Login</Link>
                </div>
              </form>
            </div>
            {/* /.customer__register */}
          </div>
          {/* /.customer-forms__wrapper */}
        </div>
    </>
  )
}

export default LoginForm