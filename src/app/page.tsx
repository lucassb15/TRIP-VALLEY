import Footer from "@/components/footer";
import Header from "@/components/header";
import Input from "@/components/form/input";
import "../styles/global.css"

export const metadata = {
  title: 'TripValley | Home',
}

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="px-10">
        <br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum totam eaque, ut commodi corrupti alias architecto qui, perferendis eligendi error laboriosam dolorum rerum quaerat sit iste facilis adipisci nulla culpa eius atque. Odit rerum ad quaerat, aut in id velit sunt eum neque explicabo voluptatibus repellat? Facere similique enim molestiae est provident quod eveniet illo ab et quisquam! Minima blanditiis atque ea, eius molestiae repellat mollitia dolore fuga aliquam reprehenderit eveniet. Eaque hic et corrupti ipsam facilis voluptates omnis qui! Sapiente, eaque, modi eligendi, numquam quo delectus vero pariatur asperiores distinctio sint est laborum aliquid ipsum sequi culpa id perferendis.</p>
        <br /><br /><br /><br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum totam eaque, ut commodi corrupti alias architecto qui, perferendis eligendi error laboriosam dolorum rerum quaerat sit iste facilis adipisci nulla culpa eius atque. Odit rerum ad quaerat, aut in id velit sunt eum neque explicabo voluptatibus repellat? Facere similique enim molestiae est provident quod eveniet illo ab et quisquam! Minima blanditiis atque ea, eius molestiae repellat mollitia dolore fuga aliquam reprehenderit eveniet. Eaque hic et corrupti ipsam facilis voluptates omnis qui! Sapiente, eaque, modi eligendi, numquam quo delectus vero pariatur asperiores distinctio sint est laborum aliquid ipsum sequi culpa id perferendis.</p>
        <br />
        <p>est voluptatibus provident Minima blanditiis atque ea, eius molestiae repellat mollitia dolore fuga aliquam reprehenderit eveniet. Eaque hic et corrupti ipsam facilis voluptates omnis qui! Sapiente, eaque, modi eligendi, numquam quo delectus vero pariatur asperiores distinctio sint est laborum aliquid ipsum sequi culpa id perferendis.</p>
        <br />
      </div>
      <div className="flex flex-col items-center justify-left">
        <Input iconName="user" type="text" name="name" placeholder="Nome completo" />
        <Input iconName="mail" type="email" name="email" placeholder="E-mail" />
        <Input iconName="mail" type="email" name="confirmEmail" placeholder="Confirmar e-mail" />
        <Input iconName="password" type="password" name="password" placeholder="Senha" />
        <Input iconName="password" type="password" name="confirmPassword" placeholder="Confirmar senha" />
      </div>
      <Footer></Footer>
    </>
  )
}
