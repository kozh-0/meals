import { useState } from "react"; 

export default function Search({cb}) {
const [value, setValue] = useState('');

    const handlSubmit = () => cb(value);

    return (
        <div className="row">
            <div className="input-field">
                <input
                    type='search'
                    placeholder="search"
                    onKeyDown={(e) => {if (e.key === 'Enter') handlSubmit()}}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button 
                    className="btn"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0
                    }}
                    onClick={handlSubmit}
                >Search</button>
            </div>
        </div>
    )
}