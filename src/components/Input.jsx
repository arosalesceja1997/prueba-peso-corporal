
import * as React from 'react';

export default function MyInput({name}) {
    let cadena = name.substring(0, name.length - 5).toLowerCase();
    return (
        <div className="cdgc-width">
            <div className="input-group mb-3 mt-3">
                <label className="cdgc-width">
                    {name}
                    <input type="text" className="form-control rounded-pill mt-2 cdgc-input" placeholder={"Escribe tu " + cadena }/>
                </label>
            </div>
        </div>
    );
}