import { createSignal } from "solid-js";
import { Show } from "solid-js";

export default function (props) {
    const [prviBroj, setPrviBroj] = createSignal();
    const [drugiBroj, setDrugiBroj] = createSignal();
    const [operacija, setOperacija] = createSignal("zbrajanje");
    let broj;


    return (
        <div>
            <label>Prvi broj: </label>
            <input type="number" value={prviBroj()} onInput={(event) => {
                if (!(event.target.value)) return;
                setPrviBroj(parseFloat(event.target.value));
            }}></input> <br /> <br />
            <label>Drugi broj: </label>
            <input type="number" value={drugiBroj()} onInput={(event) => {
                if (!(event.target.value)) return;
                setDrugiBroj(parseFloat(event.target.value))}}></input> <br /> <br />
            
            <select
            name="operacija"
            onchange={(e) => setOperacija(e.target.value)}>
                <option value={"zbrajanje"}>Zbrajanje</option>
                <option value={"oduzimanje"}>Oduzimanje</option>
                <option value={"mnozenje"}>Množenje</option>
                <option value={"djeljenje"}>Djeljenje</option>
            </select> <br /> <br />
            <div> <span>&#8203;</span>
            <Show when={prviBroj() && drugiBroj()}>
                <Show when={operacija() === "zbrajanje"}>
                    {prviBroj()} + <Show when={drugiBroj() < 0}>(</Show>{drugiBroj()}<Show when={drugiBroj() < 0}>)</Show> = {(prviBroj() + drugiBroj()).toFixed(3)}
                </Show>
                <Show when={operacija() === "oduzimanje"}>
                    {prviBroj()} - <Show when={drugiBroj() < 0}>(</Show>{drugiBroj()}<Show when={drugiBroj() < 0}>)</Show> = {(prviBroj() - drugiBroj()).toFixed(3)}
                </Show>
                <Show when={operacija() === "mnozenje"}>
                    {prviBroj()} * <Show when={drugiBroj() < 0}>(</Show>{drugiBroj()}<Show when={drugiBroj() < 0}>)</Show> = {(prviBroj() * drugiBroj()).toFixed(3)}
                </Show>
                <Show when={operacija() === "djeljenje"}>
                    {prviBroj()} / <Show when={drugiBroj() < 0}>(</Show>{drugiBroj()}<Show when={drugiBroj() < 0}>)</Show> = {(prviBroj() / drugiBroj()).toFixed(3)}
                </Show>
            </Show>
            </div>
        </div>
    )
}