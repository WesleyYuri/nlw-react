import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsStepProps {
    openGuestsModal: () => void;
    openConfirmTrip: () => void;
    emailsToInvite: string[];
}

export function InviteGuestsStep({
    openConfirmTrip,
    emailsToInvite,
    openGuestsModal
} : InviteGuestsStepProps){
    return (
        <div className="flex items-center h-16 gap-3 px-4 bg-zinc-900 shadow-shape rounded-xl">
            <button type="button" onClick={openGuestsModal} className='flex items-center flex-1 gap-2 text-left'>
                <UserRoundPlus className='size-5 text-zinc-400' />
                {emailsToInvite.length > 0 ? (
                    <span className='flex-1 text-lg text-zinc-100'>
                        {emailsToInvite.length} pessoa(s) convidada(s)
                    </span>
                ) : (
                    <span className='flex-1 text-lg text-zinc-400'>Quem estará na viagem?</span>
                )}
            </button>

            <div className='w-px h-6 bg-zinc-400' />

            <Button variant="primary" onClick={openConfirmTrip}>
                Confirmar viagem
                <ArrowRight className='size-5' />
            </Button>
        </div>
    );
}