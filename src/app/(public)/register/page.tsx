import Header from "@/components/header";
import Input from "@/components/form/input";
import "../../../styles/global.css"

export const metadata = {
    title: 'TripValley | Registrar',
}

export default function UserRegister() {
    return (
        <>
            <Header></Header>
            <div>
                <h1>Crie sua conta</h1>
                <p>Preencha os campos abaixo para criar sua conta.</p>
            </div>
            <div className="flex flex-col items-center justify-left">
                <Input iconName="user" type="text" name="name" placeholder="Nome completo" />
                <Input iconName="mail" type="email" name="email" placeholder="E-mail" />
                <Input iconName="mail" type="email" name="confirmEmail" placeholder="Confirmar e-mail" />
                <Input iconName="password" type="password" name="password" placeholder="Senha" />
                <Input iconName="password" type="password" name="confirmPassword" placeholder="Confirmar senha" />
                <p>Ao clicar em <span className="text-blue-400 font-medium">Continuar</span> você declara que leu e
                    aceita os <span className="text-blue-400 font-medium">termos e condições de uso</span> da Trip Valley.</p>
                <input type="submit" value="Confirmar" />
            </div>
        </>
    )
}
