import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./loginStyle/Button";
import { ErrorMessage } from "./loginStyle/ErrorMessage";
import { Wrap } from "../components/loginStyle/Wrap";
import { Title } from "../components/loginStyle/Title";
import { LoginWrap } from "../components/loginStyle/LoginWrap";

export let userDb = [];

export const CreateAccount = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    const { username, password } = getValues();
    const userObj = {
      id: Date.now(),
      username,
      password,
    };
    userDb.push(userObj);
    navigate("/login");
  };
  console.log(userDb);

  return (
    <Wrap>
      <LoginWrap>
        <Title>SIGN UP</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              required: "아이디는 필수 입니다.",
              minLength: {
                value: 3,
                message: "아이디는 3자리 이상 작성해 주세요",
              },
            })}
            type="text"
            placeholder="아이디를 입력 해 주세요"
          />

          {errors?.username?.message && (
            <ErrorMessage message={errors?.username?.message} />
          )}

          <input
            {...register("email", {
              required: "이메일은 필수 입니다.",
              minLength: {
                value: 3,
                message: "이메일은 3자리 이상 작성해 주세요",
              },
            })}
            type="text"
            placeholder="이메일 입력 해 주세요"
          />
          {errors?.email?.message && (
            <ErrorMessage message={errors?.email?.message} />
          )}

          <input
            {...register("password", {
              required: "패스워드는 필수 입니다.",
              minLength: {
                value: 8,
                message: "패스워드는 8자리 이상 작성해 주세요",
              },
            })}
            type="password"
            placeholder="패스워드"
          />

          {errors?.password?.message && (
            <ErrorMessage message={errors?.password?.message} />
          )}

          <input
            {...register("re_password", {
              required: "패스워드는 필수 입니다.",
              minLength: {
                value: 8,
                message: "패스워드는 8자리 이상 작성해 주세요",
              },
            })}
            type="password"
            placeholder="패스워드 확인"
          />
          {errors?.re_password?.message && (
            <ErrorMessage message={errors?.password?.message} />
          )}

          <Button active={isValid} text="회원가입" />
          <span>
            계정이 있으세요? <Link to="/login">로그인</Link>
          </span>
        </form>
      </LoginWrap>
    </Wrap>
  );
};
