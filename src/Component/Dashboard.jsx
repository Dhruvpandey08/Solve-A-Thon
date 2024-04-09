import React from 'react'

export default function DashBoard() {

  function loadCoolerData() {
    console.log("Loading")
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

  
  return (
    <>  
    <div className="flex h-screen font-thin">
        <div className="w-1/5 bg-green-800 text-white font-thin">
            <div className="p-4">
                <div className="flex flex-wrap items-center">
                    <img src="images/logo.png" alt="Logo" className="h-20 w-auto"/>
                    <p className="text-3xl ml-2">Water Quality Monitoring</p>
                </div>
                <a href="#" className="text-2xl block m-3 ml-2"><i className="fas fa-home"></i> Home</a>
                <a href="#" className="text-2xl block m-3 ml-2"><i className="fas fa-bell"></i> Alerts</a>
                <a href="#" className="text-2xl block m-3 ml-2"><i className="fas fa-envelope"></i> Contact</a>
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
                <select id="coolerSelect" disabled className="border border-gray-300 rounded-md p-2 ml-2">
                </select>
            </div>
            <button className="font-thin bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-300">Submit</button>
        </div>
    </div> 
    </>
  )
}














