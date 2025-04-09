
import Button from "@/components/Button";
import { Input, InputRadio } from "@/components/Input";

const addUser = () => {
  return (
    <>
      <div className="flex justify-center">
        <form className="flex w-full flex-col bg-[#27272A] gap-4 p-5 mt-9 max-w-xl items-center rounded-2xl">
          <Input label="Nome" placeholder="nome"/>
          <Input label="E-mail" placeholder="E-mail"/>
          <Input label="Senha" placeholder="Senha"/>
          <Input label="Confirmação de senha" placeholder="Confirmação de senha"/>

          <section className="flex justify-evenly w-full">
            <InputRadio label="Admin" />
            <InputRadio label="Editor" />
            <InputRadio label="Usuário" />
          </section>
          <Button className="max-w-36 mt-4">Salvar</Button>
        </form>
      </div>
    </>
  );
};

export default addUser;
