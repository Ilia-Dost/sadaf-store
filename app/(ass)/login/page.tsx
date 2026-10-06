"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Mail, User } from "lucide-react";

interface FormValue {
  username: string;
  email: string;
}

export default function Login() {
  const router = useRouter();
  const [show, setShow] = useState(true);

  const how = () => {
    setShow(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValue>();

  const onSubmit = async (data: FormValue) => {
    await new Promise((resolve) => setTimeout(resolve, 700));

    if (data.email === "ilia.dr1384@gmail.com" && data.username === "ilia") {
      alert(`خوش آمدی ${data.username}`);
      router.push("/");
    } else {
      alert("ایمیل  یا نام کاربری وارد شده معتبر نیست.");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 px-4 items-start justify-center pt-12 md:items-center md:pt-0 dark:bg-slate-900">
      {show ? (
        <div className="w-[300px] rounded-2xl bg-green-400 p-4 shadow-lg">
          <div className="mb-4 space-y-2">
            <p className="text-sm font-medium text-green-900">
              Username = ilia
            </p>
            <p className="text-sm font-medium text-green-900">
              Email = ilia.dr1384@gmail.com
            </p>
          </div>
          <div className="flex justify-end">
            <button
              onClick={how}
              className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              متوجه شدم
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:bg-slate-900 dark:shadow-[0_8px_30px_rgba(255,255,255,0.25)]">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              ورود به حساب کاربری
            </h1>
            <p className="mt-2 text-sm text-slate-500 dark:text-white">
              فروشگاه اتصالات صنعتی صدف
            </p>
          </div>

          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-slate-700 dark:text-white/85"
              >
                نام کاربری
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white"
                />
                <input
                  id="username"
                  type="text"
                  placeholder="نام کاربری"
                  {...register("username", {
                    required: "نام کاربری الزامی است",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+$/,
                      message: "فرمت نام کاربری صحیح نیست",
                    },
                    minLength: {
                      value: 4,
                      message: "نام کاربری شما کوچیک است",
                    },
                    maxLength: {
                      value: 10,
                      message: "نام کاربری شما بیش از اندازه زیاد است",
                    },
                  })}
                  className="h-12 w-full text-slate-700 rounded-xl border border-slate-300 pr-11 pl-4 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:text-white"
                />
              </div>

              {errors.username && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700 dark:text-white"
              >
                ایمیل
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white"
                />
                <input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  {...register("email", {
                    required: "ایمیل الزامی است",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "فرمت ایمیل صحیح نیست",
                    },
                  })}
                  className="h-12 w-full text-slate-700 rounded-xl border border-slate-300 pr-11 pl-4 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:text-white"
                />
              </div>

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 h-12 w-full rounded-xl bg-sky-600 font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "در حال ورود..." : "ورود"}
            </button>
          </form>

          <div className="mt-8 border-t border-slate-200 pt-5 text-center text-sm text-slate-500 dark:text-white">
            صدف | فروشگاه اتصالات صنعتی
          </div>
        </div>
      )}
    </div>
  );
}