import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./loginStyle/Button";
import { ErrorMessage } from "./loginStyle/ErrorMessage";
import { Wrap } from "../components/loginStyle/Wrap";
import { Title } from "../components/loginStyle/Title";
import { LoginWrap } from "../components/loginStyle/LoginWrap";
import { userDb } from "./CreateAccount";

// const userDb = {
//   dbUsername: "test",
//   dbPw: "123123123",
// };

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    const { username, password } = getValues();
    const correctUsername = userDb.filter((username) => username === username);
    const correctPw = userDb.filter((password) => password === password);

    if (username !== correctUsername[0].username) {
      setError("usernameResult", { message: "아이디가 틀렸습니다" });
    }

    if (password !== correctPw[0].password) {
      setError("passwordResult", { message: "비번이 틀렸습니다" });
    }

    if (
      username === correctUsername[0].username &&
      password === correctPw[0].password
    ) {
      navigate("/");
    }
  };
  console.log(errors);

  return (
    <Wrap>
      <LoginWrap>
        <Title>LOGIN</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              required: "아이디는 필수 입니다.",
              minLength: {
                value: 3,
                message: "아이디는 3자리 이상 작성해 주세요",
              },
              onChange() {
                clearErrors("usernameResult");
              },
            })}
            type="text"
            placeholder="이메일이나 아이디를 입력 해 주세요"
          />

          {errors?.username?.message && (
            <ErrorMessage message={errors?.username?.message} />
          )}
          {errors?.usernameResult?.message && (
            <ErrorMessage message={errors?.usernameResult?.message} />
          )}

          <input
            {...register("password", {
              required: "패스워드는 필수 입니다.",
              minLength: {
                value: 8,
                message: "패스워드는 8자리 이상 작성해 주세요",
              },
              onChange() {
                clearErrors("passwordResult");
              },
            })}
            type="password"
            placeholder="패스워드"
          />

          {errors?.password?.message && (
            <ErrorMessage message={errors?.password?.message} />
          )}
          {errors?.passwordResult?.message && (
            <ErrorMessage message={errors?.passwordResult?.message} />
          )}

          <Button active={isValid} text="로그인" />
          <span>
            계정이 없으세요? <Link to="/signup">회원가입</Link>
          </span>
        </form>
      </LoginWrap>
    </Wrap>
  );
};
