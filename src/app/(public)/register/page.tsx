import Input from "@/components/form/input";
import Submit from "@/components/form/submit";
import Hero from "@/components/form/hero";
import HeaderForm from "@/components/form/headerForm";
import "../../../styles/global.css"

export const metadata = {
    title: 'TripValley | Registrar',
}

export default function UserRegister() {
    return (
        <>
            <HeaderForm
            titleName="Cadastrar"
            titleNav="Entrar"
            URI="/login"
            ></HeaderForm>
            <div className="flex items-center justify-center md:flex md:h-screen md:justify-left md:items-start">
                <div className="md:w-full ">
                    <Hero></Hero>
                </div>
                <div className="md:w-3/5">
                    <div className=" container flex flex-col justify-center items-center mt-10">
                        <div className="text-left mb-4">
                            <h1 className="text-gray-700 font-bold text-3xl mb-4">Crie sua conta</h1>
                            <p className="text-gray-500">Preencha os campos abaixo para criar sua conta.</p>
                        </div>
                    </div>
                    <div className="container px-10 flex flex-col justify-center items-center">
                        <div className="max-w-lg">
                            <Input iconName="user" type="text" name="name" placeholder="Nome completo" />
                            <Input iconName="mail" type="email" name="email" placeholder="E-mail" />
                            <Input iconName="mail" type="email" name="confirmEmail" placeholder="Confirmar e-mail" />
                            <Input iconName="password" type="password" name="password" placeholder="Senha" />
                            <Input iconName="password" type="password" name="confirmPassword" placeholder="Confirmar senha" />
                            <p className="mt-5">Ao clicar em <span className="text-blue-400 font-medium">Continuar</span> você declara que leu e
                                aceita os <span className="text-blue-400 font-medium">termos e condições de uso</span> da Trip Valley.</p>

                            <Submit type="submit" name="submit" value="Continuar" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
