import { User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
    closeConfirmTrip: () => void;
    createTrip: (event: FormEvent<HTMLFormElement>) => void;
    setOwnerName: (ownerName: string) => void;
    setOwnerEmail: (ownerEmail: string) => void;
}

export function ConfirmTripModal({
    closeConfirmTrip,
    createTrip,
    setOwnerName,
    setOwnerEmail,
}: ConfirmTripModalProps) {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black/60'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Confirmar criação de viagem</h2>
                        <button type="button" onClick={closeConfirmTrip}>
                            <X className='size-5 text-zinc-400 hover:text-zinc-300' />
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400 '>
                        Para concluir a criação da viagem para <span className='font-semibold text-zinc-100'>Florianópolis, Brasil</span> nas datas de <span className='font-semibold text-zinc-100'>16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
                    </p>
                </div>

                <form onSubmit={createTrip} className='space-y-3'>
                    <div className='flex items-center gap-2 px-4 border rounded-lg h-14 bg-zinc-950 border-zinc-800'>
                        <User className='text-zinc-400 size-5' />
                        <input
                            type="text"
                            name="name"
                            placeholder="Seu nome completo"
                            className="flex-1 text-lg bg-transparent outline-none placeholder:text-zinc-400"
                            onChange={(event) => setOwnerName(event.target.value)}
                        />
                    </div>

                    <div className='flex items-center gap-2 px-4 border rounded-lg h-14 bg-zinc-950 border-zinc-800'>
                        <User className='text-zinc-400 size-5' />
                        <input
                            type="email"
                            name="email"
                            placeholder="Seu e-mail pessoal"
                            className="flex-1 text-lg bg-transparent outline-none placeholder:text-zinc-400"
                            onChange={(event) => setOwnerEmail(event.target.value)}
                        />
                    </div>

                    <Button variant="primary" size="full" type="submit">
                        Confirmar criação da viagem
                    </Button>
                </form>
            </div>
        </div>
    );
}