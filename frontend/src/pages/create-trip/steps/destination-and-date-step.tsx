import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface DestinationAndDateStepProps {
    isGuestInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
}

export function DestinationAndDateStep({
    closeGuestsInput,
    openGuestsInput,
    isGuestInputOpen,


}: DestinationAndDateStepProps) {

    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
    const [eventStartAndEndDates , setEventStartAndEndDates] = useState<DateRange | undefined>()

    function openDatePicker() {
        return setIsDatePickerOpen(true)
    }

    function closeDatePicker() {
        return setIsDatePickerOpen(false)
    }

    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

            <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400" />
                <input disabled={isGuestInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placehholde-zinc-400 outline-none flex-1" />
            </div>

            <button onClick={openDatePicker} disabled={isGuestInputOpen} className="flex items-center gap-2 text-left">
                < Calendar className="size-5 text-zinc-400" />
                <span

                    className="text-lg text-zinc-400 w-40">
                    Quando?

                </span>

            </button >

            {isDatePickerOpen && (<div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <h2 className="font-lg font-semibold">Selecione a Data</h2>
                            <button>
                                <X className="size-5 text-zinc-400" onClick={closeDatePicker} />
                            </button>
                        </div>
                    </div>

                    <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates}/>

                </div>
            </div>
        )}
            

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestInputOpen ? (


                <Button onClick={closeGuestsInput} variant="secondary">
                    <Settings2 className="size-5" />
                    Alterar local/data
                </Button>

            )
                :
                (
                    <Button onClick={openGuestsInput} variant="primary">
                        Continuar
                        <ArrowRight className="size-5" />
                    </Button>
                )
            }

        </div>
    )
}