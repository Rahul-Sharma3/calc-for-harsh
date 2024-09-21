import { useState } from 'react';
import './Calculator.css';

function Calculator() {
    const [diamond, setDiamond] = useState(''); // Initialize with an empty string
    const [diamondct, setDiamondct] = useState('');
    const [Stone, setStone] = useState('');
    const [Stonect, setStonect] = useState('');
    const [gold, setgold] = useState('');
    const [goldct, setgoldct] = useState('');
    const [making, setmaking] = useState('');
    const [makingct, setmakingct] = useState('');
    const [purchase, setpurchase] = useState('');

    function handleGold(e) {
        const newGoldValue = e.target.value; // Get the updated value from the input
        setgold(newGoldValue); // Update the state for gold
        setmaking(newGoldValue); // Set the same value for making
    }

    function handlereset() {
        setDiamond('');
        setDiamondct('');
        setStone('');
        setStonect('');
        setgold('');
        setgoldct('');
        setmaking('');
        setmakingct('');
        setpurchase('');
    }

    return (
        <div className='main-cal'>
            <h2>Do it now!</h2>
            <div className='calc'>
                <div className='card'>
                    <p>Diamond</p>
                    <input type="number" value={diamond} onChange={(e) => setDiamond(e.target.value)} placeholder='value' className='val' />
                    <input type="number" value={diamondct} onChange={(e) => setDiamondct(e.target.value)} placeholder='ct' className='val' />
                    <br />
                    = {diamond * diamondct || 0}
                </div>
                <div className='card'>
                    <p>Stone</p>
                    <input type="number" value={Stone} onChange={(e) => setStone(e.target.value)} placeholder='value' className='val' />
                    <input type="number" value={Stonect} onChange={(e) => setStonect(e.target.value)} placeholder='ct' className='val' />
                    <br />
                    = {Stone * Stonect || 0}
                </div>
                <div className='card'>
                    <p>gold</p>
                    <input type="number" value={gold} onChange={handleGold} placeholder='value' className='val' />
                    <input type="number" value={goldct} onChange={(e) => setgoldct(e.target.value)} placeholder='ct' className='val' />
                    <br />
                    = {gold * goldct || 0}
                </div>
                <div className='card'>
                    <p>making</p>
                    <input type="number" value={making} placeholder='value' className='val' />
                    <input type="number" value={makingct} onChange={(e) => setmakingct(e.target.value)} placeholder='ct' className='val' />
                    <br />
                    = {making * makingct || 0}
                </div>
                <div className='card'>
                    <p>Total: {diamond * diamondct + Stone * Stonect + gold * goldct + making * makingct || 0}
                        <br />
                        Purchase <input type="number" value={purchase} onChange={(e) => setpurchase(e.target.value)} placeholder='Value' className='val' />
                        <br />
                        Profit: {purchase - diamondct || 0}
                    </p>
                    <div className='make-center'><button className='btn' onClick={handlereset}>Reset All</button></div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
