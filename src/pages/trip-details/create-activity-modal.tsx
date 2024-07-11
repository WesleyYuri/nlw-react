import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent } from "react";
import { api } from "../../lib/axios";
import { useNavigate, useParams } from "react-router-dom";

interface CreateActivityModalProps {
    closeCreateActivityModal: () => void;
}

export function CreateActivityModal({
    closeCreateActivityModal,
}: CreateActivityModalProps) {
    const { tripId } = useParams();

    async function createActivity(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const title = data.get('title')?.toString();
        const occurs_at = data.get('occurs_at')?.toString();

        api.post(`/trips/${tripId}/activities`, {
            title,
            occurs_at,
        });

        closeCreateActivityModal();
        window.document.location.reload();
    }

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black/60'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
                        <button type="button" onClick={closeCreateActivityModal}>
                            <X className='size-5 text-zinc-400 hover:text-zinc-300' />
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400 '>
                        Todos os convidados podem ver as atividades
                    </p>
                </div>

                <form onSubmit={createActivity} className='space-y-3'>
                    <div className='flex items-center gap-2 px-4 border rounded-lg h-14 bg-zinc-950 border-zinc-800'>
                        <Tag className='text-zinc-400 size-5' />
                        <input
                            type="text"
                            name="title"
                            placeholder="Qual a atividade?"
                            className="flex-1 text-lg bg-transparent outline-none placeholder:text-zinc-400" />
                    </div>

                    <div className="flex items-center gap-2">
                        <div className='flex items-center flex-1 gap-2 px-4 border rounded-lg h-14 bg-zinc-950 border-zinc-800'>
                            <Calendar className='text-zinc-400 size-5' />
                            <input
                                type="datetime-local"
                                name="occurs_at"
                                placeholder="Data e horário da atividade"
                                className="flex-1 text-lg bg-transparent outline-none placeholder:text-zinc-400" />
                        </div>
                    </div>

                    <Button variant="primary" size="full" type="submit">
                        Salvar atividade
                    </Button>
                </form>
            </div>
        </div>
    );
}