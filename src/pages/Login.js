import classes from "./Login.module.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className={classes["LoginPage__container"]}>
      <div className={classes["LoginPage__container-FormContainer"]}>
        <div
          className={classes["LoginPage__container-FormContainer_container"]}
        >
          <Link
            to="/"
            className={
              classes["LoginPage__container-FormContainer_container-logo"]
            }
          >
            <img
              src="https://cdn.sellix.io/static/images/images/logo_logo.svg"
              alt="sellix logo"
            />
          </Link>
          <form className={classes["LoginPage__container-FormContainer-form"]}>
            <div
              className={
                classes["LoginPage__container-FormContainer-form_title"]
              }
            >
              Welcome Back!
            </div>
            <span
              className={
                classes["LoginPage__container-FormContainer-form_detail"]
              }
            >
              Please sign in below to continue into your Sellix Dashboard.
            </span>
            <div
              className={
                classes["LoginPage__container-FormContainer-form_btnGoogle"]
              }
            >
              <div
                className={
                  classes[
                    "LoginPage__container-FormContainer-form_btnGoogle_container"
                  ]
                }
              >
                <div
                  className={
                    classes[
                      "LoginPage__container-FormContainer-form_btnGoogle_container-now"
                    ]
                  }
                >
                  <div
                    className={
                      classes[
                        "LoginPage__container-FormContainer-form_btnGoogle_container-now_logo"
                      ]
                    }
                  >
                    <img
                      src="https://freesvg.org/img/1534129544.png"
                      alt="google logo"
                    />
                  </div>
                  <span>Sign in with Google</span>
                </div>
              </div>
            </div>
            <div
              className={
                classes["LoginPage__container-FormContainer-form_line"]
              }
            >
              <div
                className={
                  classes["LoginPage__container-FormContainer-form_line-main"]
                }
              ></div>
              <span
                className={
                  classes["LoginPage__container-FormContainer-form_line-span"]
                }
              >
                or
              </span>
              <div
                className={
                  classes["LoginPage__container-FormContainer-form_line-main"]
                }
              ></div>
            </div>
            <div
              className={
                classes["LoginPage__container-FormContainer-form_firstSection"]
              }
            >
              <div>
                <label
                  className={
                    classes[
                      "LoginPage__container-FormContainer-form_firstSection-firstlabel"
                    ]
                  }
                >
                  Email / Username
                </label>
              </div>
              <input
                className={
                  classes[
                    "LoginPage__container-FormContainer-form_firstSection-firstinput"
                  ]
                }
              ></input>
            </div>
            <div
              className={
                classes["LoginPage__container-FormContainer-form_firstSection"]
              }
            >
              <div>
                <label>
                  <div
                    className={
                      classes[
                        "LoginPage__container-FormContainer-form_firstSection-firstlabel"
                      ]
                    }
                  >
                    <div>Password</div>
                    <a href="_">Forget Password?</a>
                  </div>
                </label>
              </div>
              <input
                className={
                  classes[
                    "LoginPage__container-FormContainer-form_firstSection-firstinput"
                  ]
                }
              ></input>
            </div>
            <button
              className={
                classes[
                  "LoginPage__container-FormContainer-form_firstSection-btn"
                ]
              }
            >
              <span>Sign In</span>
            </button>
          </form>
        </div>
        <span
          className={
            classes["LoginPage__container-FormContainer_container-signup"]
          }
        >
          Don’t have an account? <a href="_">Sign up</a>
        </span>
      </div>
      <div className={classes["LoginPage__container-Footer"]}>
        Sellix SRL @ 2023
        <div className={classes["LoginPage__container-Footer_links"]}>
          <a href="_">Terms</a>
          <span>.</span>
          <a href="_">Privacy</a>
        </div>
      </div>
    </div>
  );
};
export default Login;
