// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useEffect,useState } from 'react';

export default function DashBoard() {
    const [flag,setflag] = useState(false);
    const [temp,setTemp]= useState(0);
    const [tds,setTds]= useState(0);
    const [turbidity,setTurbidity]= useState(0);

    function loadCoolerData() {
        const floor = document.getElementById('floorSelect').value ;
        var coolerSelect = document.getElementById('coolerSelect');
        coolerSelect.innerHTML = '';
        if (floor) {
            coolerSelect.innerHTML = '<option value="">' + '--Select a cooler--' + '</option>' +
                                    '<option value="' + floor + 'A">' + 'Cooler ' + floor + 'A' + '</option>' +
                                    '<option value="' + floor + 'B">' + 'Cooler ' + floor + 'B' + '</option>';
            coolerSelect.disabled = false;
        } else {
            coolerSelect.disabled = true;
        }
  }

  function showData(){
    setflag(true);
  }
  function toggle(){
    setflag(false);
  }

  useEffect(() => {
    const interval = setInterval(async () => {
        const response = await fetch('https://api.thingspeak.com/channels/2440815/feeds.json?api_key=E45MWGDEG7W6I3WR&results=1');
        const data=await response.json();
        setTemp(data.feeds[0].field1);
        setTurbidity(data.feeds[0].field2);
        setTds(data.feeds[0].field3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  
  return (
    <>  
    <div className="flex min-h-screen font-thin">
        <div className="w-1/5 bg-teal-800 text-white font-thin">
            <div className="p-4">
                <div className="flex flex-wrap items-center justify-center">
                    <img src="images/logo.png" alt="Logo" className="h-20 w-auto" />
                    <p className="text-3xl ml-2 text-center">Water Quality Monitoring</p>
                </div>
                <a href="#" className="text-2xl block m-3 ml-2 text-center"><i className="fas fa-home"></i> Home</a>
                <a href="#" className="text-2xl block m-3 ml-2 text-center"><i className="fas fa-bell"></i> Alerts</a>
                <a href="#" className="text-2xl block m-3 ml-2 text-center"><i className="fas fa-envelope"></i> Contact</a>
            </div>
        </div>
        
        <div className="w-4/5 p-6 font-thin">
            <h1 className="text-4xl mb-4">DashBoard</h1>
            <div className="mb-4">
                <label for="floorSelect" className="font-thin text-2xl">Floor:</label>
                <select id="floorSelect" onChange={loadCoolerData} className="text-2xlborder border-gray-300 rounded-md p-2 ml-2">
                    <option value="0">--Select floor--</option>
                    <option value="1">Floor 1</option>
                    <option value="2">Floor 2</option>
                    <option value="3">Floor 3</option>
                </select>
            </div>
            <div className="mb-4">
                <label for="coolerSelect" className="font-thin text-2xl">Water Cooler:</label>
                <select onChange={toggle} id="coolerSelect" disabled className="border border-gray-300 rounded-md p-2 ml-2">
                </select>
            </div>
            <button onClick={showData} className="font-thin bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-300">Submit</button>
            
            {
            flag && <>
            <div className='flex flex-wrap mt-5 '>
                <div className='flex border-solid border-2 border-gray-500 w-80 h-44 mr-2 rounded-md'>
                    <div className='font-bold ml-1'>
                        Temperature 
                    <div className='font-thin ml-1 text-6xl mt-2'>{temp}</div> </div> 
                </div>
                <div className='border-solid border-2 border-gray-500 w-80 h-44 mr-2 rounded-md'>
                    <div className='font-bold ml-1'>Turbidity  
                    <div className='font-thin ml-1 text-6xl mt-2'>{turbidity}</div></div>
                </div>
                <div className='border-solid border-2 border-gray-500 w-80 h-44 mr-2 rounded-md'>
                    <div className='font-bold ml-1'>TDS
                    <div className='font-thin ml-1 text-6xl mt-2'>{tds}</div></div>
                </div>
            </div>
            <br></br>
            <div className='flex flex-wrap'>
                <div className="iframe-container border-2 border-gray-500 rounded-md overflow-hidden flex flex-wrap">
                    <iframe width="500" height="250" src="https://thingspeak.com/channels/2440815/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=6&type=line&update=10"></iframe>
                    <iframe width="500" height="250" src="https://thingspeak.com/channels/2440815/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=6&type=line&update=10"></iframe>
                    <iframe width="500" height="250" src="https://thingspeak.com/channels/2440815/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=6&type=line&update=10"></iframe>
                </div>
            </div> </>
            }
        </div>
    </div> 

    </>
  )
}














