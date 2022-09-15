import ForgetPasswordForm from '../components/ForgetPasswordForm'

export default function ForgetPassword() {
  return (
    <div className="flex h-screen w-full items-center justify-center p-6 md:p-0">
      <div role="img" className="hidden h-screen bg-sky-200 md:block md:w-1/12 lg:w-6/12" />
      <section className="  flex w-full flex-col items-center justify-center gap-y-7 md:w-11/12 lg:w-6/12">
        <img src="/assets/logo.png" alt="Logo" className="w-full max-w-[395px]" />
        <h1 className="text-center font-poppins text-2xl font-semibold leading-8 text-gray-900">
          Acompanhamento de Bolsistas
        </h1>
        <h2 className="max-w-[400px] text-center font-inter font-semibold leading-8 text-gray-900">
          Forneça seu endereço de e-mail usando durante o seu cadastro e enviaremos sua senha
          recuperada.
        </h2>
        <ForgetPasswordForm />
      </section>
    </div>
  )
}
