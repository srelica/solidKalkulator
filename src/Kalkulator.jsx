import { createSignal } from "solid-js";

export default function (props) {
    const [prviBroj, setPrviBroj] = createSignal();
    const [drugiBroj, setDrugiBroj] = createSignal();
    let broj;


    return (
        <div>
            <label>Prvi broj</label>
            <input type="number" value={prviBroj()} onInput={(event) => setPrviBroj(parseFloat(event.target.value))}></input> <br />
            <label>Drugi broj</label>
            <input type="number" value={drugiBroj()} onInput={(event) => setDrugiBroj(parseFloat(event.target.value))}></input> <br />

            <div>{prviBroj()} + {drugiBroj() } = {prviBroj() + drugiBroj()}</div>
            <div>{prviBroj()} + {drugiBroj() } = {prviBroj() - drugiBroj()}</div>
            <div>{prviBroj()} + {drugiBroj() } = {prviBroj() * drugiBroj()}</div>
            <div>{prviBroj()} + {drugiBroj() } = {prviBroj() / drugiBroj()}</div>
        </div>
    )
}