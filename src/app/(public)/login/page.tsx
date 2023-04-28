import Input from "@/components/form/input";
import Submit from "@/components/form/submit";
import Google from "@/components/form/google";
import Hero from "@/components/form/hero";
import HeaderForm from "@/components/form/headerForm";
import "../../../styles/global.css"

export const metadata = {
    title: 'TripValley | Logar',
}

export default function UserRegister() {
    return (
        <>
            <HeaderForm
                titleName="Login"
                titleNav="Cadastrar"
                URI="/register"
            ></HeaderForm>
            <div className="flex items-center justify-center md:flex md:h-screen md:justify-left md:items-start">
                <div className=" md:w-full ">
                    <Hero></Hero>
                </div>
                <div className="md:w-3/5">
                    <div className=" container flex flex-col justify-center items-center mt-20">
                        <div className="text-left mb-4 ml-5 w-9/12">
                            <h1 className="text-gray-700 font-bold text-3xl mb-4">Estamos quase lá!</h1>
                            <p className="text-gray-500">Faça seu login para começar uma experiência incrível.</p>
                        </div>
                    </div>
                    <div className="container px-10 flex flex-col justify-center items-center">
                        <form className="md:w-10/12" action="">
                            <Input iconName="mail" type="email" name="email" placeholder="E-mail" />
                            <Input iconName="password" type="password" name="password" placeholder="Senha" />
                            <p className="mt-5"><a className="text-blue-400 font-medium" href="#">Esqueci minha senha</a></p>
                            <Submit type="submit" name="submit" value="Login" />
                        </form>
                        <div className="flex flex-row w-full justify-center items-center gap-5 mt-5">
                            <div className="border-b-2 border-gray-300 w-4/12"></div>
                            <p className="text-gray-400">ou</p>
                            <div className="border-b-2 border-gray-300 w-4/12"></div>
                        </div>
                        <div className="w-10/12">
                            <Google />
                        </div>
                        <div className="w-10/12 mt-5">
                            <p className="text-gray-500">Não possui uma conta? <a className="text-blue-500" href="#">Criar conta</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
